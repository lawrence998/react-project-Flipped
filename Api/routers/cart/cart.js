module.exports={
    addCart:function(app,db){
        //这里已经可以用来查询数据了
        app.post('/addCart',function(req,res){
            let product_qty = req.body.product_qty;
            let product_id = req.body.product_id;
            let color = JSON.stringify(req.body.color);
            let size = JSON.stringify(req.body.size);
            let user_id = req.body.user_id*1;
            let sql = `insert into cart(product_id,user_id,product_qty,color,size) values(${product_id},${user_id},${product_qty},${color},${size})`;
            db.insertCart(sql,(result) => {
                if(result.status == true){
                    res.send(result);
                }else{
                    res.send(error);
                }
            })
        });

        app.get('/getCart',function(req,res){
            var user_id = req.query.user_id*1
            
            var sql = `
                select
                    c.*,
                    u.username,
                    p.*
                from
                    cart c
                    inner join user u on c.user_id = u.user_id
                    inner join product p on c.product_id = p.product_id
                where c.user_id=${user_id}`
            db.select(sql,function(result,error){
                if(result.status == true){
                    res.send(result);
                }else{
                    res.send(error);
                }
            })
        });

        app.post('/subCart',function(req,res){
            let product_qty = req.body.p_qty - 1;
            if(product_qty<1){
                product_qty = 1*1;
            }
            let cart_id = req.body.cart_id*1;
            let sql = `update cart set product_qty=${product_qty} where cart_id=${cart_id}`;
            let sql1 = `select * from cart where cart_id=${cart_id}`
            db.updateCart(sql,(result) => {
                if(result.status == true){
                    db.select(sql1,(response)=>{
                        res.send(response);
                    })
                }else{
                    res.send(error);
                }
            })
        });

        app.post('/plusCart',function(req,res){
            let product_qty = parseInt(req.body.p_qty) + 1;
            let cart_id = req.body.cart_id*1;
            let sql = `update cart set product_qty=${product_qty} where cart_id=${cart_id}`;
            let sql1 = `select * from cart where cart_id=${cart_id}`
            db.updateCart(sql,(result) => {
                if(result.status == true){
                    db.select(sql1,(response)=>{
                        res.send(response);
                    })
                }else{
                    res.send(error);
                }
            })
        });

        app.post('/delCart',function(req,res){
            let cart_id = req.body.cart_id*1;
            let sql = `delete from cart where cart_id=${cart_id}`;
            db.deleteCart(sql,(result) => {
                if(result.status == true){
                    res.send(result);
                }else{
                    res.send(error);
                }
            })
        });

        app.post('/addOrder',function(req,res){
            var arr_item = JSON.parse(req.body.arr_item)
            console.log(arr_item);
            let str = '';
            let str1 = '';
            arr_item.map((item,idx)=>{
                let cart_id = item.cart_id*1;
                let order_status = 0;
                let user_id = item.user_id*1;
                let product_id = item.product_id;
                let product_qty = item.product_qty*1;
                let size = JSON.stringify(item.size);
                let color = JSON.stringify(item.color);
                str += `(${cart_id},${order_status},${user_id},${product_id},${product_qty},${size},${color})` + `,`;
                str1 += item.cart_id + ','; 
            })
            str1 = str1.slice(0,-1);
            str = str.slice(0,-1);
            let sql = `insert into orderPage(cart_id,order_status,user_id,product_id,product_qty,size_type,color) values` +　str;
            let sql1 = `delete from cart where cart_id in (${str1})`;
            // console.log(sql,sql1);
            db.insertCart(sql,(result) => {
                if(result.status == true){
                    db.deleteCart(sql1,(response) => {
                        if(response.status == true){
                            res.send(response);
                        }
                    })
                }else{
                    res.send(error);
                }
            })


            
            // let cart_id = req.body.cart_id*1;
            // let sql = `delete from cart where cart_id=${cart_id}`;
            // db.deleteCart(sql,(result) => {
            //     if(result.status == true){
            //         res.send(result);
            //     }else{
            //         res.send(error);
            //     }
            // })
        });

        
    }
}