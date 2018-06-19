
module.exports = {
	searchProduct(app,db){
		app.get('/searchList',function(req,res){
			//console.log('11111',req.query)
			var type = req.query.type;
			var page = (req.query.page || 1)*1;
			var limit = (req.query.limit || 10)*1;
			var datatime = req.query.datatime;
			var popurlar = req.query.popurlar;
			var product_type = req.query.product_type || '';
			var return_goods = req.query.return_goods;
			var discount = req.query.discount;
			var delivery = req.query.delivery;
			var price_section = req.query.price_section;
			var sql = `select * from product where type='${type}' limit ${(page - 1)*limit},${limit};`;
			db.select(sql,function(data){
				res.send(data);
			})
		});



		app.get('/searchProduct',function(req,res){
			var type = req.query.product_type;
			var sql = `select * from product where product_type='${type}'`;
			db.select(sql,function(data){
				
				res.send(data);
			})
		});
	}
}

		
