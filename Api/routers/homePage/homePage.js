

module.exports={
	homePage:function(app,db){
		//这里已经可以用来查询数据了
		app.get('/getSeries',function(req,res){
			
			var series = req.query.series;
			var str = '';
			for(var i=0;i<series.length;i++){
				str+=`'${series[i]}',`;
			}
			
			//获取首页系列商品
			db.select(`select * from product where series in(${str.slice(0,-1)}) order by series asc`,function(result){
				// select * from product where series in("相亲","福到","佛系","仙女味","梳妆")
				if(result.status == true){
					// console.log(result.data);
					var data = result.data.results.reverse();
					var series = [];
//						console.log(data.length/10);
					var min = 0;
					var max = 0;
					for(var i=0;i<data.length/10;i++){

						if(i==0){
							min =  i*10;
						} else if(i>0){
							min = i*10+1;
						}

						var m = i+1;
						max = m*10;
						if(min == 0){
							max = max;
						}else{
							max = max+1;
						}

						series.push(data.slice(min,max));
					}

					res.send(series);
				}
			})
		});

		app.get('/serachMsg',function(req,res){
			var confident = req.query.type;
			db.select(`select * from product where type like "${confident}" or product_type like "${confident}"  or product_title like "${confident}"`,function(result){
					res.send(result);
				// if(result.status == true){
				// }else{
					
				// }
			})
		});


	}
}