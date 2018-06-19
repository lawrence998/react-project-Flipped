import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router';
import * as detailAction from './detailAction'
import { Icon } from 'antd';
import './detailComponent.scss'
import LazyLoad from 'react-lazy-load';
import Spinner from '../spinner/spinner';


class detailComponent extends Component{
	state = {
		text:'',
		cart_qty:0,
		show:true
	}
	componentWillMount(){
		var self = this;
		var product_id = this.props.params.id || this.props.location.query.id;
		console.log(product_id,this.state);
		this.props.detail({id:product_id}).then((res)=>{
			//console.log(res.data.data.results[0]);
			this.setState({show:false});
		});

	}

	goCart(){
		var brand = this.state.brand;
		hashHistory.push({pathname:'/cart'})
	}

	componentDidMount(){
		// this.props.homePge({id:this.state.id});
		if(localStorage.token){
			var token = localStorage.getItem('token');
			token = JSON.parse(token);
			var user_id = token.user_id;
			this.props.getCart({user_id:user_id}).then((res)=>{
				if(res.data){
					var cart_qty = res.data.data.results.length || 0;
				}else{
					var cart_qty = 0;
				}
				this.setState({cart_qty:cart_qty})
			});
		}
		
	}

	goback(){
		history.go(-1);
	}

	gohome(){
		hashHistory.push({pathname:'/'})
	}
	tabChange(event){
		var detail_tab = document.querySelector('.detail-tab');
		var J_detail_comment = document.querySelector('.J_detail_comment');
		var J_comment = document.querySelector('.J_comment');
		var J_description = document.querySelector('.J_description');
		if(event.target.classList.contains('J_comment')){
			detail_tab.style.display = 'none';
			J_detail_comment.style.display = 'block';
			if(!J_comment.classList.contains('on')){
				J_description.classList.toggle('on');
				J_comment.classList.toggle('on');
			}
		}else if(event.target.classList.contains('J_description')){
			detail_tab.style.display = 'block';
			J_detail_comment.style.display = 'none';
			if(!J_description.classList.contains('on')){
				J_description.classList.toggle('on');
				J_comment.classList.toggle('on');
			}
		}else if(event.target.classList.contains('comment-num')){
			detail_tab.style.display = 'none';
			J_detail_comment.style.display = 'block';
			if(!J_comment.classList.contains('on')){
				J_description.classList.toggle('on');
				J_comment.classList.toggle('on');
			}
		}
		
	}

	addCart(event){
		if(localStorage.token){
			var addBtn = document.querySelector('.detail-btn-addcart');
			var confirmBuy = document.querySelector('.J_skuBox');
			confirmBuy.style.display = 'block';
		}else{
			hashHistory.push({pathname:'/login'})
		}
		
	}

	buy(event){
		if(localStorage.token){
			//hashHistory.push({pathname:'/order'})
			var confirmBuy = document.querySelector('.J_skuBox');
			confirmBuy.style.display = 'block';
		}else{
			hashHistory.push({pathname:'/login'})
		}
	}

	closeConfirm(event){
		var confirmBuy = document.querySelector('.J_skuBox');
		confirmBuy.style.display = 'none';
	}

	likeBtn(event){
		var i = 1;
		var like = document.querySelector('.J_detailLike');
		var like_qty = document.querySelector('.J_likeNum');
		if(!event.target.classList.contains('has-faver-true')){
			like.classList.toggle('has-faver-true');
			var current = like_qty.innerText;
			like_qty.innerText = current*1 + 1;
		}else{
			like.classList.toggle('has-faver-true');
			var current = like_qty.innerText;
			like_qty.innerText = current*1 - 1;
		}
	}

	select(event){
		var target = event.target;
		var lis = document.querySelectorAll('.proskuitem');

		for(var i=0;i<lis.length;i++){
			lis[i].className = 'proskuitem';
		}
		target.parentElement.classList.toggle('sku-selected');

		var selected = document.querySelectorAll('.sku-selected');
		var J_skunum = document.querySelector('.J_skunum');
		var J_skuItem = document.querySelector('.J_skuItem');
		if(selected.length >= 2){
			for(var i=0;i<selected.length;i++){
				size.push(selected[i].children[0].innerText) 
			}
			J_skunum.innerText = '库存99件';
			J_skuItem.innerText = `已选：${size[0]},${size[1]}`;
		}else{
			J_skunum.innerText = '请选择规格类型';
			J_skuItem.innerText = '';
		}
	}

	selectColor(event){
		var size = [];
		var target = event.target;
		if(target.tagName.toLowerCase() == 'span'){
			target.parentElement.classList.toggle('sku-selected');
		}
		var selected = document.querySelectorAll('.sku-selected');
		var J_skunum = document.querySelector('.J_skunum');
		var J_skuItem = document.querySelector('.J_skuItem');
		if(selected.length >= 2){
			for(var i=0;i<selected.length;i++){
				size.push(selected[i].children[0].innerText) 
			}
			J_skunum.innerText = '库存99件';
			J_skuItem.innerText = `已选：${size[0]},${size[1]}`;
		}else{
			J_skunum.innerText = '请选择规格类型';
			J_skuItem.innerText = '';
		}
		
	}

	buyQty(event){
		var target = event.target;
		if(target.classList.contains('J_mimusNum')){
			var qty = target.nextElementSibling;
			var current = qty.value;
			qty.value = current*1 - 1;
			if(qty.value < 1){
				qty.value = 1;
				alert('亲，所选数量不能小于1件哦~');
			}
		}else if(target.classList.contains('J_plusNum')){
			var qty = target.previousElementSibling;
			var current = qty.value;
			qty.value = current*1 + 1;
		}
	}

	addCartlist(event){
		var J_detailNum = document.querySelector('.J_detailNum');
		var selected = document.querySelectorAll('.sku-selected');
		var J_skunum = document.querySelector('.J_skunum');
		var J_skuItem = document.querySelector('.J_skuItem');
		var allSize = [];
		if(selected.length >= 2){
			for(var i=0;i<selected.length;i++){
				allSize.push(selected[i].children[0].innerText) 
			}
			var size = allSize[0];
			var color = allSize[1];
			var product_qty = J_detailNum.value*1;
			var product_id = this.props.params.id || this.props.location.query.id;console.log(product_id)
			var token = localStorage.getItem('token');
			token = JSON.parse(token);
			var user_id = token.user_id;
			this.props.addCart({size:size,color:color,product_id:product_id,product_qty:product_qty,user_id:user_id}).then((res)=>{
				console.log(res);

				if(localStorage.token){
					var token = localStorage.getItem('token');
					token = JSON.parse(token);
					var user_id = token.user_id;
					this.props.getCart({user_id:user_id}).then((res)=>{
						var cart_qty = res.data.data.results.length;
						this.setState({cart_qty:cart_qty})
						console.log(res.data.data.results.length)
					});
				}
				
				var J_addCartSuccess = document.querySelector('.J_addCartSuccess');
				var confirmBuy = document.querySelector('.J_skuBox');
				var J_carNum = document.querySelector('.J_carNum');
				J_addCartSuccess.style.display = 'block';
				confirmBuy.style.display = 'none';
				setTimeout((item)=>{
					J_addCartSuccess.style.display = 'none';
				},2000)
				
			});
		}else{
			alert('请选择规格类型');
		}
		
	}



	render(){
		this.props.detailProduct.product_img ? this.props.detailProduct.product_img : this.props.detailProduct.product_img = '';
		this.props.detailProduct.detail_img ? this.props.detailProduct.detail_img : this.props.detailProduct.detail_img = '';
		console.log('22222222222222',this.props.detailProduct);

		return(
			<div className="box">
			<Spinner show={this.state.show}></Spinner>
				<header className="wap-site-shop">
					<section className="site-header">
						<Link className="J_back wap-back" onClick={this.goback.bind(this)}></Link>
						<div className="wap-cart-share">
							<Link className="shop-cart" onClick={this.goCart.bind(this)}>
								<span className="J_carNum">{this.state.cart_qty}</span>
							</Link>
						</div>
					</section>
				</header>
				<article className="detail-pages">
					<section className="detail-pics">
						<div className="kslider ks_wt_2">
							<div className="ks_dbox">
								{

									this.props.detailProduct.product_img.split(',').map((item,idx)=>{
										return <div className="ks_warp" key={idx}><img src={item} /></div>
									})
								}
							</div>
						</div>
						<section className="detail-info">
							<div className="title">
								{this.props.detailProduct.product_title}
							</div>
							<div className="detail-price-like">
								<div className="detail-price-box">
									<dl className="J_detailPriceBox">
										<dd className="Price J_Price">￥<span>{this.props.detailProduct.price}</span>
										</dd>
										<dd className="postage">
											{this.props.detailProduct.postage}
										</dd>
									</dl>
								</div>
								<div className="detail-like">
									<a className="J_detailLike detail-btn-like" onClick={this.likeBtn.bind(this)}></a>
									<span className="J_likeNum like-num">{this.props.detailProduct.like_qty}</span>
								</div>
							</div>
						</section>
						<section className="detail-guarantee">
							<div className="guarantee">
								<img className="detail-guarantee-icon" src="../../../public/detail_img/icn_service2@2x.png" alt="7天无理由退货"/>
								<a className="detail-guarantee-title" href="http://www.xiangqu.com/agreement/guarantee#A1" target="_blank">7天无理由退货</a>
								<img className="detail-guarantee-icon" src="../../../public/detail_img/icn_service2@2x.png" alt="48小时发货"/>
								<a className="detail-guarantee-title" href="http://www.xiangqu.com/agreement/guarantee#A2" target="_blank">48小时发货</a>
								<img className="detail-guarantee-icon" src="../../../public/detail_img/icn_service2@2x.png" alt="担保交易"/>
								<a className="detail-guarantee-title" href="http://www.xiangqu.com/agreement/guarantee#A3" target="_blank">担保交易</a>
							</div>
						</section>
						<div className="detail-jianju44"></div>
						<section className="detail-brandStory">
							<div>
								<div className="detail-brand-icon"><img src={this.props.detailProduct.brand_img} alt="品牌" /></div>
								<div className="detail-brand-name">
									<h2>{this.props.detailProduct.brand}</h2>

								</div>
							</div>
						</section>
						<div className="detail-zlr-box">
							<div className="detail-zlr">
								<p className="J_detail_brand_desc detail-brand-desc ">
									{this.props.detailProduct.brand_des}
								</p>
							</div>
						</div>
						<div className="detail-jianju jianju_1"></div>
						<div className="desc-comment-tab">
							<div className="detail-description-title J_description nav-item on" onClick={this.tabChange.bind(this)}>商品描述</div>
							<div className="detail-comment-title J_comment nav-item" onClick={this.tabChange.bind(this)}>评论<span className="comment-num">{this.props.detailProduct.comment_qty}</span></div>
						</div>
						<section className="detail-description J_detail_description">
							<div>
								<div className="detail-tab">
									<div className="detail-tab-nav-tips"></div>
									<div className="detail-tab-cont">
										<div className="tab-item">
											<section className="J_detailDescription tab-content">
												<div className="J_detailPicBox detail-pic-box">
													{
														this.props.detailProduct.detail_img.split(',').map((item,idx)=>{
															if(item!='undefined'){
																return <LazyLoad style={{width:'100%',height:'100%'}} key={idx}><img src={item}  /></LazyLoad>
															}
															
														})
													}
												</div>
											</section>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section className="detail-comment J_detail_comment" >
							<section className="J_userComment tab-content">
								<ul className="user-comment-box">
									<li>
										<div className="user-icon">
											<img src="http://xquser.xiangqu.com/FuT0XiPjCGd5YSwqAQvotBi8Latl?imageView2/2/w/64/q/90/format/jpg/400x490/" />
										</div>
										<dl className="user-comment">
											<dt><h3>电波少女</h3></dt>
										</dl>
										<span>01月03日 05:45</span>
										<div className="comment_text">
											很喜欢！好看！
										</div>
									</li>
									<li>
										<div className="user-icon">
											<img src="http://xquser.xiangqu.com/FlOCvZWItHx_XYBiv_eFWV64TSm4?imageView2/2/w/64/q/90/format/jpg/317x316/" />
										</div>
										<dl className="user-comment">
											<dt><h3>暖锅先生</h3></dt>
										</dl>
										<span>2017年12月17日</span>
										<div className="comment_text">
											剪裁不错
										</div>
									</li>
									<li>
										<div className="user-icon">
											<img src="http://xquser.xiangqu.com/FjPQL6DUW9Uo3ealUrAOcY96PdfG?imageView2/2/w/64/q/90/format/jpg/200x200/" />
										</div>
										<dl className="user-comment">
											<dt><h3>天使张子</h3></dt>
										</dl>
										<span>2017年12月10日</span>
										<div className="comment_text">
											很合适，性价比挺高的。
										</div>
									</li>
								</ul>
								<div className="user-comment-num J_commentBtn">
									<span className="detail-noComment J_noComment">现在人真懒,都不爱写评论了~</span>
					                <span className="detail-allComment J_allComment">已加载全部3条评论了哦~</span>
					                <span className="detail-moreComment J_moreComment">查看更多评论</span>
								</div>
							</section>
						</section>
						<section className="J_buyCart detail-buy-cart">
							<div className="backHomePage">
								<Link className="home-page" onClick={this.gohome.bind(this)}></Link>
							</div>
							<div className="backShopPage">
								<Link className="shop-page"></Link>
							</div>
							<div className="buy-cart-box">
								<span className="J_btnAddCart detail-btn-addcart hasapp" onClick={this.addCart.bind(this)}>加入购物车</span>
								<span className="J_btnBuy detail-btn-buy hasapp" onClick={this.buy.bind(this)}>立即购买</span>
							</div>
						</section>
					</section>
				</article>
				<footer className="wap-footer">
					<p className="wap-footer-p">
						<Link>关于我们</Link>
						<ins className="ins">|</ins>
						<Link>联系我们</Link>
					</p>
					<div className="copyright">
						Copyright 2017 版权所有 m.xiangqu.com
					</div>
					<div id="J_t1"></div>
				</footer>
				<section className="J_skuBox sku-warp">
					<div className=" sku-box animation">
						<header className="J_skuHeader sku-header">
							<div className="sku-pic">
								<div className="img-wrap">
									<div className="img-wrap-po">
										<img src={this.props.detailProduct.product_img.split(',')[0]} alt={this.props.detailProduct.product_title} />
									</div>
								</div>
							</div>
							<dl className="J_skuPrice sku-price">
								<dt>￥{this.props.detailProduct.price}</dt>
								<dd>
									<span className="J_skunum">请选择规格类型</span>
									<span className="J_skuItem"></span>
								</dd>
							</dl>
							<span className="J_closeSku close-sku" onClick={this.closeConfirm.bind(this)}></span>
						</header>
						<article className="sku-body">
							<div className="J_prosku prosku">
								<dl className="proskuinfor">
									<dt className="proskutitle">尺码</dt>
									<dd>
										<ul className="proskulist clearfix" onClick={this.select.bind(this)}>
											<li className="proskuitem"><span>M</span></li>
											<li className="proskuitem"><span>L</span></li>
											<li className="proskuitem"><span>XL</span></li>
											<li className="proskuitem"><span>2XL</span></li>
										</ul>
									</dd>
								</dl>
								<dl className="proskuinfor">
									<dt className="proskutitle">颜色</dt>
									<dd>
										<ul className="proskulist clearfix" onClick={this.selectColor.bind(this)}>
											<li className="proskuitem"><span>图片色</span></li>
										</ul>
									</dd>
								</dl>
							</div>
							<div className="sku-buy-Num">
								<span className="num-title">购买数量</span>
								<div className="mums" onClick={this.buyQty.bind(this)}>
									<span className="mimus J_mimusNum">-</span>
									<input type="text" defaultValue="1" className="J_detailNum input-nums"/>
									<span className="plus J_plusNum isclick">+</span>
								</div>
							</div>
						</article>
						<div className="sku-submit-box">
							<button className="J_btnSubmitSku" onClick={this.addCartlist.bind(this)}>确定</button>
						</div>
					</div>
				</section>
				<div className="J_returnTop return-top-box"></div>
				<div className="addCartSuccess J_addCartSuccess">加入购物车成功</div>
			</div>
			
		)
	}
}


let mapStateToProps = (state) => {
    return {
    	ajaxStateus: state.detailProduct.status,
        detailProduct: state.detailProduct.data ? state.detailProduct.data : []
    }
}

export default connect(mapStateToProps,detailAction)(detailComponent);