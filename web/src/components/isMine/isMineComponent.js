
import React,{Component} from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import * as actions from '../login/loginAction'
import FooterBer from "../navigation/navigationComponent"
import './isMine.scss'


class IsMine extends Component{
	state = {
		loginmsg:""
	}

	componentWillMount(){
		if(localStorage.hasOwnProperty('token')){
           var username = JSON.parse(localStorage.getItem('token')).username;
           this.setState({loginmsg:username});
        }else{
        	var username = '登录';
        	this.setState({loginmsg:username});
        }
	}

	quit(){

		localStorage.removeItem('token');
		hashHistory.push('login')
	}

	goLogin =()=> {
		if(this.state.loginmsg == "登录"){
			hashHistory.push('login');
		}
	}

	goPlace =()=> {
		var token = JSON.parse(localStorage.getItem('token'));
		this.props.loginFilter(token).then(res =>{
			if(res.data.status==true){
				hashHistory.push('place');
			}else{
				hashHistory.push('login');
			}
		});
	}

	isMyOrder =()=> {
		hashHistory.push('orderList');
	}

	goSetting =()=> {
		hashHistory.push('setting');
	}

	render(){
		
		return(
			<div id = "IsMine">
				<div className="IsMine_top">
					我的账户<span className="quit" onClick={this.quit.bind(this)}>退出</span>
					<svg className="icon icon-settings" aria-hidden="true" onClick = {this.goSetting}>
						<use xlinkHref="#icon-settings__eas"></use>
					</svg>

				</div>
				<div className="IsMine_body">
					<div className='headImg'>
						<div className="isMineImg"><img src="http://xquser.xiangqu.com/Fji3yyN3B5KbzkZ78Oc7j1bsfHfw?imageView2/2/w/120/q/90/format/jpg/140x140/" className="img"/></div>
					</div>
					<div className='isMineName'>
						<div className = "name" onClick={this.goLogin}>
							{this.state.loginmsg}
						</div>
					</div>
					<div className='isMineOrder'>
						<div>
							<span onClick={this.isMyOrder}>
								<svg className="icon ismineorder" aria-hidden="true">
									<use xlinkHref="#icon-tubiaolunkuo-"></use>
								</svg>
							我的订单
							</span>
						</div>
						<div>
							<span>
								<svg className="icon isminemoney" aria-hidden="true">
									<use xlinkHref="#icon-wodehongbao"></use>
								</svg>
								我的红包
							</span>
						</div>
					</div>
				</div>
				<div className="IsMine_bt">
					<div className="fourPath">
						<div className="bt_one">
							<div className="whishOrder">
								<span>
									<svg className="icon ismineIcon" aria-hidden="true">
										<use xlinkHref="#icon-02"></use>
									</svg>
								</span>
								<span>我的心愿单</span> 
							</div>
							<div className="minMsg">
								<span>
									<svg className="icon ismineIcon" aria-hidden="true">
										<use xlinkHref="#icon-xiaoxi"></use>
									</svg>
								</span>
								<span>我的消息</span> 
							</div>
						</div>
						<div className="bt_two">
							<div className="place" onClick={this.goPlace}>
								<span>
									<svg className="icon ismineIcon" aria-hidden="true">
										<use xlinkHref="#icon-dizhi"></use>
									</svg>
								</span>
								<span>地址管理</span> 
							</div>
							<div className="listener">
								<span>
									<svg className="icon ismineIcon" aria-hidden="true">
										<use xlinkHref="#icon-serve"></use>
									</svg>
								</span>
								<span>Flipped客服</span> 
							</div>
						</div>
						
					</div>
				</div>
				<FooterBer />
			</div>
		)
	}
}

let getState =(state)=>{
	return{
		loginFilter:state.loginFilter
	}
}



export default connect(getState,actions)(IsMine);