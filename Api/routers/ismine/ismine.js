module.exports={
	IsMine:function(app,db){
		//这里已经可以用来查询数据了
		app.post('/addPlace',function(req,res){
			//获取所有商品
			var username = req.body.username;
			var phone = req.body.phone;
			var place = req.body.place;
			var detailPlace = req.body.detailPlace;
			var user_id = req.body.user_id;
			var arr = [username,phone,place,detailPlace,user_id];
			var  addSql = `INSERT INTO place(place_id,username,phone,place,detailPlace,user_id) VALUES (0,?,?,?,?,?)`;
			db.insert(addSql,arr,function(result){
				if(result.status == true){
					res.send({status:true,data:'添加地址成功'});
				}else{
					res.send({status:false,data:'添加地址失败'});
				}
			})
		});





		app.post('/getPlace',function(req,res){
			//获取所有商品
			//console.log(222,req.body);
			
			var user_id = req.body.user_id;
			var place_id = req.body.place_id;
			var select_id = req.body.select_id;
			var user_id = req.body.user_id;
			if(user_id && place_id == ''){
				db.select(`select * from place where user_id = "${user_id}"`,function(result){
					if(result.status == true){
						res.send(result);
					}else{
						res.send({status:false,data:'获取地址失败'});
					}
				})
			}

			if(place_id && user_id){
				//console.log(111);
				db.update(`update place set select_status = "${select_id}" where place_id = "${place_id}"`, {select_status:select_id},
				function(result){
					if(result.status == true){
						// res.send({status:true});
						db.select(`select * from place where user_id = "${user_id}"`,function(result){
							if(result.status == true){
								res.send({status:true,result:result});
							}else{
								res.send({status:false,data:'获取地址失败'});
							}
						})
					}
				})
			}
		});
	}
}