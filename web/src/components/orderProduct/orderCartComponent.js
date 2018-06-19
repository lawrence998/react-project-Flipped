
import React from 'react'
import {hashHistory} from 'react-router'
import './order.scss'
import http from '../../http/httpClient'

class OrderComponent extends React.Component{

	state = {
		data:[],
		datas:['全部','未付款','待发货','待收货','待评价']
	}

	componentWillMount(){
		var data = JSON.parse(localStorage.getItem("token"));
		if(data){

			var user_id = data.user_id;
			http.post("Orders",{user_id:user_id}).then( res => {
				console.log(res);
				if(res.data.data){
					this.setState({data:res.data.data.results});
				}
				
			})
		}else{
			hashHistory.push({pathname:'/login'})
		}
		
	}

	goback(){
		hashHistory.push({pathname:'/ismine'})
	}

	getOrder =(item)=>{
		var data = JSON.parse(localStorage.getItem("token"));
		var user_id = data.user_id;
		http.post("Orders",{user_id:user_id}).then( res => {
				var dataFilter = res.data.data.results;
				var dataEnd = [];
				if(item == '未付款'){
					dataFilter.map(item=>{
						if(item.order_status == 0){
							dataEnd.push(item);
						}
					})
				}

				if(item == '全部'){
					dataFilter.map(item=>{
						dataEnd.push(item);
					})
				}

			this.setState({data:dataEnd});

		})
	}
	
	render(){
		return (
			<div className = "order">
				<p className="order_top">
					<span className="order-icon" onClick={this.goback.bind(this)}>
						<svg className="icon orderPage" aria-hidden="true" onClick={this.goMine}>
							<use xlinkHref="#icon-arrow-left"></use>
						</svg>
					</span>
					订单
					<span className="tuikuan" onClick={this.goOrder}>退货退款</span>
				</p>
				<ul className="order_title">
					{
						this.state.datas.map((item,index)=>{
							return(
									<li key={index} onClick={this.getOrder.bind(this,item)}>
									{item}
									</li>
								)
						})
					}
				</ul>
				<div className="orderList">
					<ul>
						{
							this.state.data.map((item,index)=>{
								var imgSrc = item.product_img.split(',') ? item.product_img.split(',')[0] :item.product_img;
								var payStatus = '';
								
								if(item.order_status == 0){
									payStatus = "未付款";
								}else{
									payStatus = "已付款";
								}

								return (
										<li key={index}>
										<p className="brand">{item.brand}</p>
										<div className="orderProduct">
											<div className="productImg">
												<img src={imgSrc}/>
											</div>
											<div className="productList">
												<p className="Product_title">{item.product_title}</p>
												<p className="productsize">
													<span>尺寸：{item.size_type}</span>
													<span>颜色：{item.color}</span>
												</p>
												<p className="p_price">
													<span>￥：{item.price}</span>
													<span>X {item.product_qty}</span>
													<span>{payStatus}</span>
												</p>
											</div>
										</div>
										</li>
									)
							})
						}
					</ul>
				</div>
			</div>

		)
	}
}

export default OrderComponent;