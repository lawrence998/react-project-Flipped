module.exports={
    getOrder:function(app,db){
        app.get('/getOrder',function(req,res){
            var user_id = req.query.user_id*1
            //console.log('user_id:',user_id);
            var order_status = 0;
            var sql = `
                select
                    *
                from
                    orderPage o
                    inner join product p on o.product_id = p.product_id
                where o.user_id=${user_id} and order_status=0`
            db.select(sql,function(result,error){
                if(result.status == true){
                    res.send(result);
                }else{
                    res.send(error);
                }
            })
        });

        app.post('/delOrder',function(req,res){
            let order_id = req.body.order_id*1;
            let sql = `delete from orderpage where order_id=${order_id}`;
            db.deleteCart(sql,(result) => {
                if(result.status == true){
                    res.send(result);
                }else{
                    res.send(error);
                }
            })
        });

        app.post('/delOrders',function(req,res){
            let orderArr = req.body.orderArr;
//          let obj = '';
//          orderArr.map((item)=>{
//              obj += item + ',';
//          });
//          obj = obj.slice(0,-1);
            let sql = `delete from orderpage where order_id in (${orderArr})`;
            db.deleteCart(sql,(result) => {
                if(result.status == true){
                     res.send(result);
                }else{
                     res.send(error);
                }
            })
        });

        app.get('/orderList', function(req, res){
            var page = req.query.page;
            var pageItems = req.query.pageitems;
            var sql = `
            select
                SQL_CALC_FOUND_ROWS *
            from
                orderPage
            `;
            if(page && pageItems){
                sql += `limit ${(page - 1) * pageItems}, ${pageItems}`
            }
            sql += `; select FOUND_ROWS() as rowscount;`
            db.select(sql, function(data){
                res.send(data);
            })
        })

        app.post('/changeOrder',function(req,res){
            let user_id = req.body.user_id*1;
            let sql = `update orderPage set order_status=1 where user_id=${user_id}`;
            db.updateCart(sql,(result) => {
                if(result.status == true){
                    res.send(result);
                }else{
                    res.send(error);
                }
            })
        });
    }
    
}