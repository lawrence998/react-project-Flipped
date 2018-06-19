import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link,hashHistory} from 'react-router'
import {Icon} from 'antd-mobile'



// import * as actions from './productListAction'
import '../../../../public/icomoon/style.css'
import './productList.scss'
import http from '../../../http/httpClient'


class ProlistComponent extends Component{
	state = {
		type:'',
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
				priceSection:['0-49','50-99','100-199','200-299','300-399','400-499']
			}
		],
		show: false,
		idx: 0,
		data:[],
		fliterType:[]
	}

	componentDidMount(){
		document.body.addEventListener('click',e=>{
		// 通过e.target判断阻止冒泡
	    	if(e.target.className == 'prolist-nav-mini-item'){
	    		console.log(333)
				return;
	        }
			console.log('body');
		})
		
	}



	showHide(e,idx){
		e.preventDefault();
		var target = e.target;
		this.setState({
		    show: !this.state.show,
		    idx: idx
		});
		
	}



	onMaskClick(e){
		
		if(target.className == 'prolist-nav-mini-item' || target.tagName.toLocaleLowerCase() == 'lable' || target.tagName.toLocaleLowerCase() == 'i'){
			for(var value in this.refs){
				if(this.refs[value].classList.contains('active')){
					this.refs[value].classList.remove('active')
				}
			}
			
			var radio = target.querySelector('input');
			radio.checked = true;
			if(radio.checked){
				target.classList.add('active');
			}else{
				target.classList.remove('active');
			}
		}
		e.stopPropagation();
	}

	priceButton(e){
		for(var value in this.refs){
			if(this.refs[value].classList.contains('active')){
				this.refs[value].classList.remove('active')
			}
		}
		if(e.terget.tagName.toLowerCase() == 'input'){
			e.target.classList.add('live');
		}
	}
	onSure(){
		this.setState({
	      show: false,
	    });
	}

	back(){
		history.go(-1);
	}


	searchProduct =(params)=> {
		http.get('searchProduct/',params).then(res => {
			if(res.data.status == true){
				this.setState({data:res.data.data.results});

			}else{
				this.setState({data:[{product_title:"您搜索的商品暂时还没有"}]});
			}
		})
	}








	render(){
		if(this.props.hideList=='none'){
			return false;
		}

		return(
		<div className="product-list">
				
				<ul className="prolist-nav">
					{
						this.state.nav.map((item,index)=>{
							return (
								<li className="prolist-nav-item" key={'item'+item.index} onClick={(e)=>{this.showHide(e,item.index)}}>
									<span>{item.title}</span>
									<i className={item.index ==2?"icon-shaixuan":"icon-jiantouarrow483"}></i>
									{
										(function(show,idx,self){
											if(show == true && index == idx && index != 2){
												return (
													<ul className="prolist-nav-item2" >
														
													</ul>
												)
												
											}else if(show == true && index == idx && index == 2){
												return (
													<div className="prolist-nav-item3" onClick={(e)=>{self.onMaskClick(e)}}>
														<div className="prolist-nav-item3-cover"></div>
														<div className="prolist-nav-item3-right">
															<div className="prolist-nav-item3-top">
																<input type="button" value="重置"/>
																<span>{item.title}</span>
																<input type="button" value="确定" onClick={self.onSure.bind(self)}/>
															</div> 
															<div className="prolist-nav-item3-service">
																<p>折扣和服务</p>
																{
																	item.sevice.map(item3=>{
																		return (
																			<input type="button" value={item3} key={item3} ref={item3}/>
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
			<ul className="prolist-container">
				{	
					this.state.data.map(item=>{
						try{
							return (
								<li className="prolist-proitem" key={item.product_id}>
									<Link to={`detail/${item.product_id}`}>
										<img src={item.product_img.split(',')[0]}/>
										<p className="price">${item.price}</p>
										<p className="designer">{item.brand.slice(3)}</p>
										<p className="pro-title" title={item.product_title}>{item.product_title}</p>
										<p className="like-qty"><i className="icon-aixin1"></i>{item.like_qty}</p>
									</Link>
								</li>
							)
						}catch(err){
							
						}	
					})
				}
			</ul>
		</div>
		)
	}
}



export default ProlistComponent;