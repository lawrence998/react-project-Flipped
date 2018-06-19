
var db = require('../../db/DBHelper');

module.exports={
    // 设计师列表
    getProduct:function(app,db){
        app.get('/getdesigner',function(req,res){
           
            var style = JSON.stringify(req.query.page);
            var zd = req.query.zd;
            db.select(`select * from designer where ${zd} = ${style}`,function(result){
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

        //设计师详情页和设计师产品列表
        app.get('/getins',function(req,res){
        
                var arr=[];
                var style = JSON.stringify(req.query.page);
                db.select(`select * from designer where designer_id = ${style}`,
                    function(result){
                    if(result.status == true){
                        arr.push(result.data)

                    db.select(`select * from product where designer_id = ${style}`,function(results){
                        if(results.status == true){
                           arr.push(results.data)
                           res.send(arr)
                        }else{
                             res.send(arr)
                        }
                    })
                   
                 }
             })
        });

        // 设计师产品列表
        app.get('/getproducts',function(req,res){
           
            var style = JSON.stringify(req.query.page);
            db.select(`select * from product where designer_id = ${style}`,function(result){

                if(result.status == true){
                    res.send(result);
                }
            })
        });

        // 热门设计师
        app.get('/hot',function(req,res){
           
            var style = JSON.stringify(req.query.page);
//          console.log(1,style)
            db.select(`select * from designer where hot = ${style}`,function(result){
//              console.log(result.status)
                if(result.status == true){
                    res.send(result);
                }
            })
        });

        // 注册
         app.post('/getusername',function(req,res){
           
            var phone = req.body.phone;
            //console.log(phone);
            db.select(`select * from user where phone = ${phone}`,function(result){
                if(result.status == true){
                    res.send({statu:false});
                }else{
                    res.send({statu:true});
                }
            })
        });

         // 把用户名、手机号码、密码写入数据库
         app.post('/regin',function(req,res){
            
            var name = req.body.users;
            var password = req.body.psw;
            var ph = req.body.phones;
            
            db.insert(
                `insert into user (username,password,phone) VALUES (?,?,?)`,
                [name,password,ph],function(result){
                    res.send(result)
            })

        });


        // app.get('/commentupdate',function(req,res){
        //     //修改数据
        //     db.update(
        //     `update product set comment_content="${req.query.msg}" where product_id = "${req.query.id}"`, {comment_conetnt:req.query.msg},
        //     function(result){
        //         if(result.status == true){
        //             res.send(result);
        //         }
        //     })
        // });


        // app.get('/commentdele',function(req,res){
        //     //删除数据
        //     db.dele(`delete from  product where product_id = "${req.query.id}"`, {product_id:req.query.id},
        //         function(result){
        //             if(result.status == true){
        //                 res.send({result:result,status:true});
        //             }
        //         })
        // });


    }
}