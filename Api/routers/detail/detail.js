
module.exports={
    getDetail:function(app,db){
        //这里已经可以用来查询数据了
        app.get('/detail',function(req,res){
            //获取所有商品
            var id = req.query.id*1
//          console.log('id:',id);
            db.select(`select * from product where product_id=${id}`,function(result){
                if(result.status == true){
                    res.send(result);
                }
            })
        });









        //以下是增删查改的的例子，有需要自己复制，修改，
        //DBhelper已经是可以用的四个语句，请谨慎用，若要修改，修改前请，跟其他人说明


        app.get('/addOrder',function(req,res){
            //写入订单
            var arrs = req.query.arr;
            var  addSql = `INSERT INTO product(product_id,title,adress,houseType,room_size,room_qty,bed_qty,price,owner_name) VALUES (0,?,?,?,?,?,?,?,?)`;
            db.insert(addSql,arrs,function(result){
                    res.send(result.data);
            })
        });

        //查询
        app.get('/getPageData',function(req,res){
            //分页查询
                var qty = req.query.qty;    
                var page = req.query.page;
                var total1 = (page-1)*qty;
                var total2 = qty;   
                db.select(`select * from product limit ${total1},${total2}`,function(result){
                    if(result.status == true){
                        res.send(result);
                    }
                })
        });

        app.get('/commentupdate',function(req,res){
            //修改数据
            db.update(
            `update product set comment_content="${req.query.msg}" where product_id = "${req.query.id}"`, {comment_conetnt:req.query.msg},
            function(result){
                if(result.status == true){
                    res.send(result);
                }
            })
        });


        app.get('/commentdele',function(req,res){
            //删除数据
            db.dele(`delete from  product where product_id = "${req.query.id}"`, {product_id:req.query.id},
                function(result){
                    if(result.status == true){
                        res.send({result:result,status:true});
                    }
                })
        });


    }
}
