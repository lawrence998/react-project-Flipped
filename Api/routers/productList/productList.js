module.exports = {
	getProduct(app,db){
		app.get('/productlist',function(req,res){
			/*var type = req.query.type;
			var page = (req.query.page || 1)*1;
			var limit = (req.query.limit || 10)*1;*/
	/*		var datatime = req.query.datatime;
			var popurlar = req.query.popurlar;
			var product_type = req.query.product_type || '';
			var return_goods = req.query.return_goods;
			var discount = req.query.discount;
			var delivery = req.query.delivery;
			var price_section = String(req.query.price_section);*/
			var obj = req.query;
			var sql = 'select * from product where';
			var datatime = req.query.datatime;
			for(var attr in obj){
				if(attr == 'type'){
					sql += ` type='${obj[attr]}'`
				}else if(attr == 'series'){
					sql += ` series='${obj[attr]}' `;
				}
			
				if(attr == 'product_type'  && obj[attr].length > 0){
					sql += ` and product_type='${obj[attr]}' `;
				}
				
				if(attr == 'popurlar' && obj[attr] == '1'){
					
					sql += ` and popurlar=1`;
				}
				if(attr == 'return_goods' && obj[attr] == '2'){
					
					sql += ` and return_goods=2`;
				}
				if(attr == 'discount' && obj[attr] == '3'){
					
					sql += ` and discount=3`;
				}
				if( attr == 'delivery' && obj[attr] == '4'){
				
					sql += ` and delivery=4`;
				}
				if( attr == 'price_section' && obj[attr] != '0'){
					
					switch(obj[attr]){
						case '0-99':
						 sql += ` and price between 0 and 99`
						break;
						case '100-199':
						 sql += ` and price between 100 and 199`
						break;
						case '200-299':
						 sql += ` and price between 200 and 299`
						break;
						case '300-399':
						 sql += ` and price between 300 and 399`
						break;
						case '400-499':
						 sql += ` and price between 400 and 499`
						break;
						case '500-599':
						 sql += ` and price between 500 and 599`
						break;
						case '600-699':
						 sql += ` and price between 600 and 699`
						break;
						case '700-799':
						 sql += ` and price between 700 and 799`
						break;
						case '800-899':
						 sql += ` and price between 800 and 899`
						break;
						case '900-999':
						 sql += ` and price between 900 and 999`
						break;
						case '1000':
						 sql += ` and price between 1000 and 10000`
						break;
					}
				}
				if(attr == 'limit' && attr == 'page'){
					sql += ` limit ${(page - 1)*limit},${limit}`;
				}
			}
			
			if(datatime == '1'){
				sql += ` ORDER BY datatime DESC`;
			}
			
			db.select(sql,function(data){
				res.send(data);
			})
		});
		app.get('/gettype',function(req,res){
			
			var type = req.query.type;
			var sql = `select DISTINCT product_type from product where type='${type}'`;
			db.select(sql,function(data){
				res.send(data);
			})
		});
	}
}

		
