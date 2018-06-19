module.exports = {
	designerManager(app,db){
		app.get('/designerSearch',function(req,res){

			var qty = req.query.qty;
			var pageNum = req.query.pageNum;
			var total1 = qty*(pageNum-1);
			if(qty && pageNum){
				db.select(`select * from designer limit ${total1},${qty};SELECT count(*) AS count from designer`,function(result){
					if(result.status == true){
						res.send(result.data);
					}
				})
			}else{
				db.select(`select * from designer limit 0,10;SELECT count(*) AS count from designer`,function(result){
					if(result.status == true){
						res.send(result.data);
					}
				})
			}
		});


		app.get('/searchDesigner',function(req,res){
			var type = req.query.type;
			var seMsg = req.query.seMsg;
  			if(type){
				db.select(`select * from designer where ${type} = "${seMsg}"`,function(result){
					if(result.status == true){
						res.send(result.data);
					} else {
						res.send({error:"没有你查询的信息"});
					}
				})
  			} else {
  				res.send({error:"请选择条件查询"});
  			}
		});



		app.get("/updateDesigner",function(req,res){

			var data = req.query;
			var key = Object.keys(data);
			var sqlArr = [];
			var sql = updateDesigner(key,data,sqlArr);
			db.update(sql,sqlArr,function(result){
				if(result.status == true){
					res.send(result.data.results);
				}
			})
		});


		

		app.get("/deleDesigner",function(req,res){
			console.log(req.query);
			var index = req.query.designerId;
			db.delete1(`delete from  designer where designer_id = "${index}"`,{desigher_id:index},function(result){
				console.log(result);
				if(result.status == true){
					res.send(result.data.results);
				}
			})
		});


		app.get("/delMultiDesigner",function(req,res){
			var qty = req.query.qty;
			var pageNum = req.query.pageNum;
			var total1 = qty*(pageNum-1);
			var arr = req.query.delMuti;
			var mutil = "";
			if(arr instanceof Array){
				arr.forEach((item)=>{
	                mutil += item + ',';
	            });
	            mutil = mutil.slice(0,-1);
				var sql = `DELETE FROM designer WHERE designer_id IN (${mutil})`;
				db.deleteCart(sql,function(result){
					if(result.status == true){
						db.select(`select * from designer limit ${total1},${qty}`,function(data){
							if(data.status == true){
								res.send(data.data);
							}else{
								res.send([{err:'error'}]);
							}
						})
					}
				})

			} else {
				mutil = arr;
				db.delete1(`delete from  designer where designer_id = "${mutil}"`,{desigher_id:mutil},function(result){
					if(result.status == true){
						db.select(`select * from designer limit ${total1},${qty}`,function(data){
							if(data.status == true){
								res.send(data.data);
							}else{
								res.send([{err:'error'}]);
							}
						})
					}	
				})
			}
		})
	}
}




//更新多个类别数据
  function updateDesigner(key,data,sqlArr){
  	let str = "";
 
  	key.forEach(function(item){
  		if(item == "designer_minitype"){
  			str += `designer_minitype = "${data["designer_minitype"]}", `;
  			sqlArr.push(data["designer_minitype"]);
  		}

  		if(item == "brand"){
  			str += `brand = "${data["brand"]}", `;
  			sqlArr.push(data["brand"]);
  		}

  		if(item == "founder"){
  			str += `founder = "${data["founder"]}", `;
  			sqlArr.push(data["founder"]);
  		}

  		if(item == "brand_style"){
  			str += `brand_style = "${data["brand_style"]}", `;
  			sqlArr.push(data["brand_style"]);
  		}

  		if(item == "subject"){
  			str += `subject = "${data["subject"]}", `;
  			sqlArr.push(data["subject"]);
  		}

  		if(item == "subject_descrition"){
  			str += `subject_descrition = "${data["subject_descrition"]}", `;
  			sqlArr.push(data["subject_descrition"]);
  		}

  		if(item == "brand_introduce3"){
  			str += `brand_introduce3 = "${data["brand_introduce3"]}", `;
  			sqlArr.push(data["brand_introduce3"]);
  		}

  		if(item == "brand_introduce4"){
  			str += `brand_introduce4 = "${data["brand_introduce4"]}" `;
  			sqlArr.push(data["brand_introduce4"]);
  		}

  	})

  	sqlArr = sqlArr.reverse();
  	return  `UPDATE designer SET  ${str}  where designer_id = "${data.designer_id}"`;
  }
