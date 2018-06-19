

module.exports={
    Order:function(app,db){
        //这里已经可以用来查询数据了
        app.post('/Orders',function(req,res){
            let user_id = req.body.user_id;

          	var sql = 
		          	`select
						*
					from
						orderPage o
						inner join product p on o.product_id = p.product_id
						where o.user_id = "${user_id}"`;
            db.select(sql,(result) => {
                if(result.status == true){
                    res.send(result);
                }else{
                	res.send({msg:'你还没有订单呢'});
                }
            })
        })
    }
}