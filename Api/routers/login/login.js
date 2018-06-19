
var jwt = require('jsonwebtoken');

module.exports={
	Login:function(app,db){
		//这里已经可以用来查询数据了
		app.post('/login',function(req,res){
			//获取所有商品
			var username = req.body.username;
			var password = req.body.password;
			db.select(`select * from user where username = "${username}" and password = "${password}"`,function(result){
				if(result.status == true){
					var user_id = result.data.results[0].user_id;
					//console.log(user_id);
					var token = {username:username,password:password,user_id:user_id};
					// var user = {username:username,password:password};
					// var token = jwt.sign({data: user}, 'secret', { expiresIn: '36h' });
					res.send({status:true,token:token,data:'登录成功'});
				}else{
					res.send({status:'error',data:'用户名或密码有误'})
				}
			})
		});


		//这里已经可以用来查询数据了
		app.post('/loginfilter',function(req,res){
			//获取所有商品
			var username = req.body.username;
			var password = req.body.password;
			db.select(`select * from user where username = "${username}" and password = "${password}"`,function(result){
				if(result.status == true){
					
					res.send({status:true,data:'登录成功'});
				}else{
					res.send({status:'error',data:'用户名或密码有误'})
				}
			})
		});


		//这里后台系统登录
		app.post('/manageLoginIn',function(req,res){
			//获取所有商品
			var username = req.body.username;
			var password = req.body.password;
			db.select(`select * from user where username = "${username}" and password = "${password}"`,function(result){
				if(result.status == true){
					res.send({status:true,data:'登录成功'});
				}else{
					res.send({status:'error',data:'用户名或密码有误'})
				}
			})
		});


	 	app.post('/verfiy',function(req,res){

	 		var token = req.body.token;
//	 		console.log(req.body);
	 		jwt.verify(token,'secret',function(err,decode){
	 			if(err){
	 				// 伪冒的token,过期的token
	 				res.send({data:'用户有误,或过期'})
	 			}else{
//	 				console.log(decode);
	 				var username = decode.data.username;
					var password = decode.data.password;

					db.select(`select * from user where username = "${username}" and password = "${password}"`,function(result){
						if(result.status == true){
							var user = {username:username,password:password};
							var token = jwt.sign({data: user}, 'secret', { expiresIn: '36h' });
							res.send({status:true,username:username,password:password});

							// db.insert(..........)
						}
					})
	 			}
	 		})
	 	});
	}
}
