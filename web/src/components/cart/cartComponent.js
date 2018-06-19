import React,{Component} from 'react'
import {connect} from 'react-redux'
import './cartComponent.scss'
import * as cartAction from './cartAction'
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router';
import Spinner from '../spinner/spinner'

var cart_ID = '';
var cartItem;

var id_set = [];
var arr_item = [];
// var token = localStorage.getItem('token');
// token = JSON.parse(token);

import * as HomePageAction from './cartAction'


class cart extends Component{

	state = {
		text:'',
		brand:'',
		show:true,
		user_id:''
	}

	componentWillMount(){
		if(localStorage.token){
			var token = localStorage.getItem('token');
			token = JSON.parse(token);
			var user_id = token.user_id;
			this.setState({user_id:user_id});
			this.props.getCart({user_id:user_id}).then((res)=>{
				//console.log(res)
				this.setState({show:false});
			});
		}
		
		// var brand = this.props.location.query.brand;
		// this.setState({brand:brand})
        //this.props.des(style,zds)
	}

	componentDidMount(){
		//this.props.homePge({page:1,qty:10});
		// <div className="salerInfo clearfix">
		// 	<div className="shop-info fl-l">
		// 		<i className="J_checkProAll shop-share-icon"></i>
		// 		<Link className="shop-owner">{this.state.brand}</Link>
		// 	</div>
		// </div>

	}

	goback(){
		history.go(-1);
	}

	cartCheck(product_id,cart_id,size,color,event){
		
		var target = event.target;
		var checkAll = document.querySelector('.check-all');
		var totalPrice = document.querySelector('.cart-red em');
		event.target.classList.toggle('active');
		var active = document.querySelectorAll('.cart-product-l .active');
		var section = target.parentElement.parentElement.parentElement.parentElement;
		var J_cartItems = document.querySelectorAll('.J_cartItems');
		
		if(target.classList.contains('active')){

			var product_item = {};
			var data_id = parseInt(target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'))
			var cartPriceNum = target.parentElement.nextElementSibling.children[1].firstChild;
			var J_current = target.parentElement.nextElementSibling.lastChild.firstChild.children[1];
			var currentPrice = (cartPriceNum.innerText*J_current.innerText).toFixed(2);

			totalPrice.innerText = currentPrice;
			product_item.currentPrice = currentPrice;
			product_item.cart_id = cart_id;
			product_item.data_id = data_id;
			product_item.user_id = this.state.user_id;
			product_item.product_qty = J_current.innerText;
			product_item.product_id = product_id;
			product_item.size = size;
			product_item.color = color;
			arr_item.push(product_item);console.log(arr_item)
			if(active.length>1){
				totalPrice.innerText = 0.00;
				for(var i=0;i<active.length;i++){
					totalPrice.innerText = (parseInt(totalPrice.innerText) + arr_item[i].currentPrice*1).toFixed(2); 
				}
				if(active.length == J_cartItems.length){
					if(!checkAll.classList.contains('active')){
						checkAll.classList.add('active');
					}
				}
			}
			if(active.length == J_cartItems.length){
					checkAll.classList.add('active');
			}
		}else{
			var cartPriceNum = target.parentElement.nextElementSibling.children[1].firstChild;
			var J_current = target.parentElement.nextElementSibling.lastChild.firstChild.children[1];
			var currentPrice = (cartPriceNum.innerText*J_current.innerText).toFixed(2);
			var data_id1 = parseInt(target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'))
			totalPrice.innerText = (parseInt(totalPrice.innerText) - currentPrice).toFixed(2);
			arr_item.map((item,idx)=>{
				if(item.data_id == data_id1){
					arr_item.splice(idx,1)
				}
			});console.log(arr_item)
			if(active.length != J_cartItems.length){
				checkAll.classList.remove('active');
			}
		}

		data_id++;
		// arr_item = [];
	}

	cartCheckAll(){
		arr_item = [];
		var checkAll = document.querySelector('.check-all');
		checkAll.classList.toggle('active');
		var totalPrice = document.querySelector('.cart-red em');
		var J_cratProCheck = document.querySelectorAll('.J_cratProCheck');
		totalPrice.innerText = 0.00;

		var J_cartItems = document.querySelectorAll('.J_cartItems');
		for(var i=0;i<J_cartItems.length;i++){
			var id = J_cartItems[i].getAttribute('data-id');
			id_set.push(id);
		}
		//console.log(id_set)
		if(localStorage.token){
			var token = localStorage.getItem('token');
			token = JSON.parse(token);
			var user_id = token.user_id;
		}
		this.props.getCart({user_id:user_id}).then((res)=>{

			var results = res.data.data.results;
			console.log(res.data.data.results);
			if(checkAll.classList.contains('active')){

				for(var i=0;i<J_cratProCheck.length;i++){
					J_cratProCheck[i].classList.add('active');
				}
				arr_item = [];
				results.map((item,idx)=>{
					var product_item = {};
					var currentPrice = item.price*item.product_qty;
					product_item.currentPrice = currentPrice;
					product_item.cart_id = item.cart_id;
					product_item.data_id = id_set[idx];
					product_item.user_id = user_id;
					product_item.product_id = item.product_id;
					product_item.product_qty = item.product_qty;
					product_item.size = item.size;
					product_item.color = item.color;
					arr_item.push(product_item);
				});
				console.log(arr_item)

				for(var i=0;i<results.length;i++){
					totalPrice.innerText = (parseInt(totalPrice.innerText) + arr_item[i].currentPrice*1).toFixed(2);
					
				}
			}else{
				for(var i=0;i<J_cratProCheck.length;i++){
					J_cratProCheck[i].classList.remove('active');
				}
				arr_item = [];
				totalPrice.innerText = '0.00';
			}
		})
		

	}

	updateQty(cart_id,event){
		var target = event.target;
		var totalPrice = document.querySelector('.cart-red em');
		if(target.classList.contains('J_jianNum')){
			var p_qty1 = target.nextElementSibling.innerText;
			this.props.sub({cart_id:cart_id,p_qty:p_qty1}).then((res)=>{
				var changeQty = res.data.data.results[0].product_qty;
				target.nextElementSibling.innerText = changeQty;
				
				var J_cratProCheck = target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild;
				if(J_cratProCheck.classList.contains('active')){
					var cartPriceNum = target.parentElement.parentElement.parentElement.children[1].firstChild;
					var J_current = target.nextElementSibling;
					var currentPrice = (cartPriceNum.innerText*J_current.innerText).toFixed(2);
					var data_id = parseInt(target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
					
					arr_item.map((item,idx)=>{
						if(item.data_id == data_id){
							item.currentPrice = currentPrice;
						}
					});
					totalPrice.innerText = currentPrice;
					var active = document.querySelectorAll('.cart-product-l .active');
					if(active.length > 1){
						totalPrice.innerText = 0.00;
						for(var i=0;i<active.length;i++){
							totalPrice.innerText = (parseInt(totalPrice.innerText) + arr_item[i].currentPrice*1).toFixed(2);
						}
					}
					
				}
				
			})
		}
		else if(target.classList.contains('J_addNum')){
			var p_qty2 = target.previousElementSibling.innerText;
			this.props.add({cart_id:cart_id,p_qty:p_qty2}).then((res)=>{
				var changeQty = res.data.data.results[0].product_qty;
				target.previousElementSibling.innerText = changeQty;

				var J_cratProCheck = target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild;
				if(J_cratProCheck.classList.contains('active')){
					var cartPriceNum = target.parentElement.parentElement.parentElement.children[1].firstChild;
					var J_current = target.previousElementSibling;
					var currentPrice = (cartPriceNum.innerText*J_current.innerText).toFixed(2);
					var data_id = parseInt(target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));

					arr_item.map((item,idx)=>{
						if(item.data_id == data_id){
							item.currentPrice = currentPrice;
						}
					});
					totalPrice.innerText = currentPrice;
					var active = document.querySelectorAll('.cart-product-l .active');
					if(active.length > 1){
						totalPrice.innerText = 0.00;
						for(var i=0;i<active.length;i++){
							totalPrice.innerText = (parseInt(totalPrice.innerText) + arr_item[i].currentPrice*1).toFixed(2);
						}
					}
				}
				
			})
		}
	}

	delCart(cart_id,event){
		var target = event.target;
		var J_tc = document.querySelector('.J_tc');
		var J_tips = document.querySelector('.J_tips');
		if(target.classList.contains('J_delProduct')){
			cartItem = target.parentElement.parentElement.parentElement.parentElement.parentElement;
			cart_ID = cart_id;
			J_tc.style.display = 'block';
			J_tips.style.display = 'block';
		}
	}

	delConfirm(event){
		var J_tc = document.querySelector('.J_tc');
		var J_tips = document.querySelector('.J_tips');
		var target = event.target;
		if(target.classList.contains('J_cancel')){
			J_tc.style.display = 'none';
			J_tips.style.display = 'none';
			console.log(cartItem);
		}
		else if(target.classList.contains('J_sure')){
			this.props.del({cart_id:cart_ID}).then((res)=>{
				cartItem.parentNode.removeChild(cartItem);
				J_tc.style.display = 'none';
				J_tips.style.display = 'none';
			})
		}
	}

	account(event){
		var active = document.querySelectorAll('.cart-product-l .active');
		if(active.length >= 1){
			var item = JSON.stringify(arr_item);console.log(item)
			this.props.addOrder({arr_item:item}).then((res)=>{
				arr_item = [];
				hashHistory.push({pathname:'/order'})
			})
		}else{
			alert('请选择商品进行结算');
		}
	}

	render(){
		return(
			<div className="shopCart">
				<Spinner show={this.state.show}></Spinner>
				<section className="J_hd cart-header">
					<i className="J_cartBack cart-back" onClick={this.goback.bind(this)}></i>
					<h1>购物车</h1>
				</section>
				{
					this.props.cartProduct.map((item,idx)=>{
						
						return  <section className="J_cartItems J_hd cartPannel cartItem" key={idx} data-id={idx}>
									<div className="cartProduct clearfix" >
										<section className="cart-product-item">
											<div className="cart-product-l">
												<div className="J_cratProCheck cart-pro-check" onClick={this.cartCheck.bind(this,item.product_id,item.cart_id,item.size,item.color)}></div>
												<div className="cartImg">
													<Link className="J_js_hrefs js-hrefs">
														<img src={item.product_img.split(',')[0]} />
													</Link>
												</div>
											</div>
											<div className="cart-product-info">
												<h2 className="productName">
													<Link className="J_js_hrefs js-hrefs">{item.product_title}</Link>
												</h2>
												<div className="cartPriceNum">
													<span>{item.price.toFixed(2)}</span>
												</div>
												<div className="cart-sku-info">
													<div className="productSku">
														规格尺寸:<span>尺码:{item.size} 颜色:{item.color}</span>
													</div>
												</div>
												<div className="cart-product-shop clearfix">
													<div className="cart-product-num-fun" onClick={this.updateQty.bind(this,item.cart_id)}>
														<span className="J_jianNum jian-sku-num"></span>
														<span className="J_current current-sku">{item.product_qty}</span>
														<span className="J_addNum add-sku-num"></span>
													</div>
													<div className="J_delProduct del-product-item" onClick={this.delCart.bind(this,item.cart_id)}></div> 
												</div>
											</div>
										</section>
									</div>	
								</section>
						
					})
				}
				<div className="J_hd last-bottom"></div>
				<section className="J_cartTotal J_hd cart-total ">
					<div className="cart-total-shop">
						<div className="J_checkAll check-all-box">
							<i className="check-all" onClick={this.cartCheckAll.bind(this)}></i>
							<span>全选</span>
						</div>
						<div className="total-info">
							<div className="total-cont">
								合计：<span className="cart-red">¥<em>0.00</em></span>
							</div>
							<span className="J_totalTip total-tip">不含邮费</span>
						</div>
						<div className="J_cartPay cartPay" onClick={this.account.bind(this)}>结算</div>
					</div>
				</section>
				<section className="J_tc tc-layout">
					<div className="J_tcOpacity tc-opacity"></div>
					<div className="J_tips tc-tips">
						<div className="tc-tips-body">
							<div className="tc-tips-text">确定要删除该条吗？</div>
							<div className="J_tcTipsBtn tc-tips-btn" onClick={this.delConfirm.bind(this)}>
								<span className="J_cancel cancel">取消</span>
								<span className="J_sure sure" >确定</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}


let mapStateToProps = (state) => {
    return {
        cartProduct: state.cartProduct.data || []
    }
}

export default connect(mapStateToProps,cartAction)(cart);