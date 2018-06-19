
module.exports = {
	getProduct(app,db){
		app.get('/gettheme',function(req,res){
			var theme_hot = req.query.theme_hot;
			var sql = `select theme_id,theme_img from theme where theme_hot=${theme_hot};`;
			db.select(sql,function(data){
				
				res.send(data);
			})
		});
		app.get('/getthemeitem',function(req,res){
			var theme_id = req.query.theme_id;
			var sql = `select theme_img,theme_images from theme where theme_id=${theme_id};`;
			db.select(sql,function(data){
				
				res.send(data);
			})
		});
		app.get('/getthemelist',function(req,res){
			var theme_id = req.query.theme_id;
			var sql = `select * from product where theme=${theme_id};`;
			db.select(sql,function(data){
				
				res.send(data);
			})
		});
	}
}
