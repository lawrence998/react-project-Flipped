import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import {Icon} from 'antd-mobile'
import * as actions from './topicListAction'
import './topicList.scss'

class TopicList extends Component{
	state = {
	  	theme_id:this.props.params.theme_id
	}
	componentWillMount(){
		this.props.getThemeList({theme_id:this.state.theme_id});
	}
	back(){
		history.go(-1);
	}
	render(){
		return(
			<div className="topic-list">
				<header>
					<div className="topic-top">
						<i className="icon-xiangzuo" onClick={this.back}></i>
						<p className="title">专题精选</p>
					</div>
				</header>
				<ul className="topic-container">
					{	
						this.props.ajaxResult.map(item=>{
							try{
								return (
										<li className="topic-proitem" key={item.product_id}>
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
								
							}
						})
					}
				</ul>
			</div>
		)
	}
}

let mapStateToProps = (state)=>{
	return {
		ajaxState: state.topicList.status,
		ajaxResult: state.topicList.result || []
	}
}

export default connect(mapStateToProps,actions)(TopicList);