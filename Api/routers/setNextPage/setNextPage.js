module.exports = {
	setNextPage(app,db){
		app.post('/nextpagesearch',function(req,res){
			console.log(req.body);
			var username = req.body.username;
			var key = req.body.changeType;
			var value = req.body.value;
			db.update(`update user set ${key} = '${value}' where username = '${username}'`,{[key]:value},function(result){
				console.log(1111,result);
				if(result.status == true){
					res.send(result.data.results);
				}
			})
		})
	}
}