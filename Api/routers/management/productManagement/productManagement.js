module.exports={
	getProduct:function(app,db){

		app.get('/productManagement',function(req,res){
			let page = req.query.page;
			let pageItems = req.query.pageitems;
			let keyWords = req.query.keyWords || '';
			var sql = `select SQL_CALC_FOUND_ROWS * from product WHERE CONCAT(product_title,type,descrition,brand) LIKE '%${keyWords}%'`;
			if(page && pageItems){
				sql += ` limit ${(page - 1)*pageItems},${pageItems}`
			}
			sql += `; select FOUND_ROWS() as rowsCount;`
			//获取所有商品
			db.select(sql,function(result){

				res.send(result);

			})
		})
		app.get('/product_id',function(req,res){
			let product_id = req.query.product_id;
			var sql = `select * from product where product_id = ${product_id}`;
			//获取所有商品
			db.select(sql,function(result){
				res.send(result);
			})
		})
		app.get('/producttype',function(req,res){
			let type = req.query.type;
			console.log(type);
			var sql = `select DISTINCT product_type from product where type='${type}'`;
			//获取所有商品
			db.select(sql,function(result){
				res.send(result);
			})
		})
		app.get('/productpostage',function(req,res){
			var sql = `select postage from product`;
			//获取所有商品
			db.select(sql,function(result){
				res.send(result);
			})
		})
		app.get('/productbrand',function(req,res){
			var sql = `select brand from product`;
			//获取所有商品
			db.select(sql,function(result){
				res.send(result);
			})
		})
		
		app.post('/deleteproduct',function(req,res){
			let product_id = req.body.product_id;
			console.log(req.body,req.body.product_id)
			var sql = `delete from product where product_id = ${product_id}`;
			//获取所有商品
			db.delete(sql,function(result){
				res.send(result);
			})
		})
		app.post('/deleteproduct_some',function(req,res){
			let product_id = req.body.product_id;
			console.log(product_id)
			var sql = `delete from product where`;
			
			if(product_id.length == 1){
				sql += ` product_id = '${product_id[0]}'`;
			}else if(product_id.length > 1){
				sql += ` product_id = '${product_id[0]}'`;
				for(let i = 1; i< product_id.length; i++){
					sql += ` or product_id = '${product_id[i]}'`;
				}
			}

			sql += `;`;
			//获取所有商品
			db.delete(sql,function(result){
				res.send(result);
			})
		})
		app.post('/addproduct',function(req,res){	
			let descrition = req.body.descrition;
            let postage = req.body.postage;
            let price = Number(req.body.price);
//          let product_img = req.body.product_img;
            let product_title = req.body.product_title;
            let repertory = Number(req.body.repertory);
            let type = req.body.type;
            let brand = req.body.brand;
            
            let popurlar = req.body.popurlar;
            let return_goods = req.body.return_goods;
            let discount = req.body.discount;
            let delivery = req.body.delivery;
            let product_id = parseInt(Math.random()*10000000);
			if(popurlar != ''){
				popurlar = '1';
			}
			if(return_goods != ''){
				return_goods = '2';
			}
			if(discount != ''){
				discount = '3';
			}
			if(delivery != ''){
				delivery = '4';
			}
			var sql =`INSERT INTO product(product_id,product_title,price,postage,product_img,descrition,designer_id,brand,comment,comment_qty,like_qty,repertory,type,product_type,theme,datatime,brand_des,brand_img,detail_img,series,series_img,popurlar,return_goods,discount,delivery) VALUES(${product_id},"${product_title}", ${price},'${postage}','','${descrition}',0,'${brand}','','',0,${repertory},'${type}','','',NOW(),'','','','','','${popurlar}','${return_goods}','${discount}','${delivery}')`;
//			var sql =`INSERT INTO product(product_id,product_title,price,postage,product_img,descrition,designer_id,brand,comment,comment_qty,like_qty,repertory,type,product_type,theme,datatime,brand_des,brand_img,detail_img,series,series_img,popurlar,return_goods,discount,delivery) VALUES(${product_id},"${product_title}", ${price},'${postage}','${product_img}','${descrition}',0,'${brand}','','',0,${repertory},'${type}','','',NOW(),'','','','','','${popurlar}','${return_goods}','${discount}','${delivery}')`;
			//获取所有商品
			db.insertProduct(sql,function(result){
				res.send(result);
			})
		})
		app.get('/searchproduct_some',function(req,res){
			var keyWords = req.query.keyWords;
			var sql = `SELECT * FROM product WHERE CONCAT(product_title,type,descrition,brand) LIKE '%${keyWords}%';select FOUND_ROWS() as rowsCount;`;
			//获取所有商品
			db.select(sql,function(result){
				console.log(result)
				res.send(result);
			})
		})
		app.post('/updateproduct_pro',function(req,res){
			let product_id = req.body.product_id;
			var sql = `UPDATE product SET`;
			var obj = req.body;
			for(var attr in obj){
				if(attr == 'product_title' && obj[attr] != ''){
					sql += ` product_title ='${obj[attr]}',`
				}
				if(attr == 'price' && obj[attr] != ''){
					sql += ` price ='${obj[attr]}',`
				}
				if(attr == 'postage' && obj[attr] != ''){
					sql += ` postage ='${obj[attr]}',`
				}
				/*if(attr == 'product_img' && obj[attr] != ''){
					sql += ` product_img ='${obj[attr]}',`
				}*/
				if(attr == 'descrition' && obj[attr] != ''){
					sql += ` descrition ='${obj[attr]}',`
				}
				if(attr == 'repertory' && obj[attr] != ''){
					sql += ` repertory ='${obj[attr]}',`
				}
				if(attr == 'type' && obj[attr] != ''){
					sql += ` type ='${obj[attr]}',`
				}
				if(attr == 'product_type' && obj[attr] != ''){
					sql += ` product_type ='${obj[attr]}',`
				}
				if(attr == 'theme' && obj[attr] != ''){
					sql += ` theme ='${obj[attr]}',`
				}
				if(attr == 'popurlar' && obj[attr] != ''){
					sql += ` popurlar ='1',`
				}
				if(attr == 'return_goods' && obj[attr] != ''){
					sql += ` return_goods ='2',`
				}
				if(attr == 'discount' && obj[attr] != ''){
					sql += ` discount ='3',`
				}
				if(attr == 'delivery' && obj[attr] != ''){
					sql += ` delivery ='4',`
				}
			}
			if(sql.indexOf(',')>-1){
				sql = sql.substring(0,sql.length-1);
			}
			sql += ` WHERE product_id = '${product_id}';`;
			//获取所有商品
			db.updateProduct(sql,function(result){
				res.send(result);
			})
		})
		app.get('/productConfig.txt',function(request,response){
		    response.sendFile(__dirname + '/' + 'productConfig.txt');
		})

		app.get('/productSearch.txt',function(request,response){
		    response.sendFile(__dirname + '/' + 'productSearch.txt');
		})
		app.get('/productDicConfig.txt',function(request,response){
		    response.sendFile(__dirname + '/' + 'productSearch.txt');
		})
		app.get('/productForm.txt',function(request,response){
		    response.sendFile(__dirname + '/' + 'productForm.txt');
		})
	}
}
