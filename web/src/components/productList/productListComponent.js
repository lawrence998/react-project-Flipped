import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link,hashHistory} from 'react-router'
import {Icon} from 'antd-mobile'
import * as actions from './productListAction'
import '../../../public/icomoon/style.css'
import './productList.scss'



class ProlistComponent extends Component{
	state = {
		type:this.props.location.query.type,
		series: this.props.location.query.series,
		datatime: 0,
		popurlar: 0,
		product_type: '',
		return_goods: 0,
		discount: 0,
		delivery: 0,
		price_section: 0,
		page: 1,
		nav:[
			{	
				index: 0,
				title: '推荐',
				titleItem: ['最新','最热'],
				
			},
			{	
				index: 1,
				title: '选择分类',
				titleItem: ['最新','最热'],

			},
			{	
				index: 2,
				title: '筛选',
				sevice:['7天无理由退货','折扣','快速发货'],
				priceSection:['0-99','100-199','200-299','300-399','400-499','500-599','600-699','700-799','800-899','900-999','1000+']
			}
		],
		show: false,
		idx: 0
	}
	componentWillMount(){
		this.props.getGoods({
			type:this.state.type,
			series: this.state.series,
			page:this.state.page,
			limit:100,
			datatime: this.state.datatime,
			popurlar: this.state.popurlar,
			product_type: this.state.product_type,
			return_goods: this.state.return_goods,
			discount: this.state.discount,
			delivery: this.state.delivery,
			price_section: this.state.price_section,
		});
	}
	componentDidMount(){
		document.body.addEventListener('click',e=>{
		// 通过e.target判断阻止冒泡
	    	if(e.target.className == 'prolist-nav-mini-item'){	
				return;
	       }
		})
	}
	productAjax(){
		this.props.getGoods({
			type:this.state.type,
			page:this.state.page,
			series: this.state.series,
			limit:100,
			datatime: this.state.datatime,
			popurlar: this.state.popurlar,
			product_type: this.state.product_type,
			return_goods: this.state.return_goods,
			discount: this.state.discount,
			delivery: this.state.delivery,
			price_section: this.state.price_section,
		}).then(function(res){
			if(res.data.status == false){
				this.setState({
					type:this.props.location.query.type,
					datatime: 0,
					popurlar: 0,
					product_type: '',
					return_goods: 0,
					discount: 0,
					delivery: 0,
					price_section: 0,
					page: 1
				})
			}
		}.bind(this));
	}
	type(idx,self){
		this.props.getType({type:this.state.type});
	}
	showHide(e,idx){
		e.preventDefault();
		var target = e.target;
		this.setState({
		    show: !this.state.show,
		    idx: idx
		});
		
	   if(idx == 1){
	   	this.type(idx);
	   }
	}
	onMaskClick(e){
		var target = e.target;
		if(target.className == 'prolist-nav-mini-item'){
			for(var value in this.refs){
				if(this.refs[value].classList.contains('active')){
					this.refs[value].classList.remove('active')
				}
			}
			var txt = target.querySelector('lable').innerHTML;
			var radio = target.querySelector('input');
			var title = target.parentElement.parentElement.firstElementChild;
			
			radio.checked = true;
			if(radio.checked){
				target.classList.add('active');
				title.innerText = txt;
				if(txt == '最新'){
					this.setState({datatime: 1},()=>{
						this.productAjax();
					});
				}else if(txt == '最热'){
					this.setState({popurlar: 1},()=>{
						this.productAjax();
					});
				}else{
					this.setState({product_type: txt},()=>{
						this.productAjax();
					});
				}
			}
		}
		e.stopPropagation();
	}
	serviceButton(e){
		var target = e.target;
		if(target.tagName.toLowerCase() == 'input'){
			target.classList.add('living');
			if(target.value == '7天无理由退货'){
				this.setState({return_goods: 2},()=>{
					this.productAjax();
				});
			}else if(target.value == '折扣'){
				this.setState({discount: 3},()=>{
					this.productAjax();
				});
			}else if(target.value == '快速发货'){
				this.setState({delivery: 4},()=>{
					this.productAjax();
				});
			}
		}
	}
	priceButton(e){
		var target = e.target;
		for(var value in this.refs){
			if(this.refs[value].classList.contains('live')){
				this.refs[value].classList.remove('live')
			}
		}
		if(target.tagName.toLowerCase() == 'input'){
			target.classList.add('live');
			this.setState({price_section: target.value},()=>{
				this.productAjax();
			});
		}
	}
	onSure(){
		this.setState({
	      show: false,
	    });
	}
	resetButton(){
		
		for(var value in this.refs){
			if(this.refs[value].classList.contains('live')){
				this.refs[value].classList.remove('live')
			}else if(this.refs[value].classList.contains('living')){
				this.refs[value].classList.remove('living')
			}
		}
		this.refs['title0'].innerText = '推荐';
		this.refs['title1'].innerText = '全部分类';
		this.setState({
			type:this.props.location.query.type,
			datatime: 0,
			popurlar: 0,
			product_type: '',
			return_goods: 0,
			discount: 0,
			delivery: 0,
			price_section: 0,
			page: 1
		},()=>{
			this.productAjax();
		});
	}
	back(){
		history.go(-1);
	}
	render(){
		return(
		<div className="product-list">
			<header>
				<div className="prolist-top">
					<i className="icon-xiangzuo" onClick={this.back}></i>
					<p className="title">{this.state.type}</p>
					<i></i>
				</div>
				<ul className="prolist-nav">
					{
						this.state.nav.map((item,index)=>{
							return (
								<li className="prolist-nav-item" key={'item'+item.index} onClick={(e)=>{this.showHide(e,item.index)}}>
									<span ref={`title${item.index}`}>{item.title}</span>
									<i className={item.index ==2?"icon-shaixuan":"icon-jiantouarrow483"}></i>
									{
										(function(show,idx,self){
											if(show == true && index == idx && index != 2){
												return (
													<ul className="prolist-nav-item2" >
														{	
															index== 0? item.titleItem.map((item2,index2)=>{
											                            return (
											                                <li className="prolist-nav-mini-item" ref={item2} key={'mini-type'+index2} onClick={(e)=>{self.onMaskClick(e)}}>
											                                    <lable htmlFor={index2}>{item2}</lable>
											                                    <input type="radio" name="radio" id={index2}/>
											                                  	<i className="icon-gou"></i>
											                                </li>
											                            )
											                        }) : self.props.ajaxType.map((item5,index3)=>{
											                            return (
											                                <li className="prolist-nav-mini-item" ref={item5.product_type} key={'mini-type'+index3} onClick={(e)=>{self.onMaskClick(e)}}>
											                                    <lable htmlFor={index3}>{item5.product_type}</lable>
											                                    <input type="radio" name="radio" id={index3}/>
											                                    <i className="icon-gou"></i>
											                                </li>
											                            )
											                        }) 
														}
													</ul>
												)
												
											}else if(show == true && index == idx && index == 2){
												return (
													<div className="prolist-nav-item3" onClick={(e)=>{self.onMaskClick(e)}}>
														<div className="prolist-nav-item3-cover"></div>
														<div className="prolist-nav-item3-right">
															<div className="prolist-nav-item3-top">
																<input type="button" value="重置" onClick={self.resetButton.bind(self)}/>
																<span>{item.title}</span>
																<input type="button" value="确定" onClick={self.onSure.bind(self)}/>
															</div> 
															<div className="prolist-nav-item3-service">
																<p>折扣和服务</p>
																{
																	item.sevice.map(item3=>{
																		return (
																			<input type="button" value={item3} key={item3} ref={item3} onClick={(e)=>{self.serviceButton(e)}}/>
																		)
																	})
																}
															</div>
															<div className="prolist-nav-item3-price-section">
																<p>价格区间</p>
																{
																	item.priceSection.map(item4=>{
																		return (
																			<input type="button" value={item4} key={item4} ref={item4} onClick={(e)=>{self.priceButton(e)}}/>
																		)
																	})
																}
															</div>
														</div> 
													</div>	
												)
											}
										})(this.state.show,this.state.idx,this)
									}
								</li>
							)
						})
					}
				</ul>
			</header>
			{
				(function(status){
					if(status != 1){
						return (
							<div className="prolist-cover">
								<Icon type="loading" size="lg" color="#d8a33e"/>
							</div>
						)
					}	
				})(this.props.ajaxState)
			}
			<ul className="prolist-container">
				{	
					this.props.ajaxResult == null? this.props.ajaxResult : this.props.ajaxResult.map(item=>{
						try{
							return (
								<li className="prolist-proitem" key={item.product_id}>
									<Link to={`detail/${item.product_id}`}>
										<img src={item.product_img.split(',')[0]}/>
										<p className="price">￥{item.price}</p>
										<p className="designer">{item.brand.slice(3)}</p>
										<p className="pro-title" title={item.product_title}>{item.product_title}</p>
										<p className="like-qty"><i className="icon-aixin1"></i>{item.like_qty}</p>
									</Link>
								</li>
							)
						}catch(err){
							console.log(err)
						}	
					})
				}
			</ul>
		</div>
		)
	}
}

//state.组件名字，才可以找到对应的组件结果
let mapStateToProps = (state)=>{
	return {
		ajaxState: state.productList.status,
		ajaxResult: state.productList.result ? (state.productList.result.data ? state.productList.result.data.results : state.productList.result.error) : [],
		ajaxType: state.productList.minitype || []
	}
}

export default connect(mapStateToProps,actions)(ProlistComponent);
