
module.exports = {
	settingMsg(app,db){
		app.post('/setPresonMsg',function(req,res){
			console.log(req.body);
			var username = req.body.username;
			var password = req.body.password;
			console.log(`select * from user where username='${username}' and password = '${password}'`);
			db.select(`select * from user where username='${username}' and password = '${password}'`,function(result){
				console.log(result);
				if(result.status == true)
				res.send(result.data.results);
			})
		})
	}
}