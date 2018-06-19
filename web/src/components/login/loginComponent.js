import React from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';


import '../../../public/assets/fonts/iconfont.css'
import * as action from './loginAction'

import Spinner from '../spinner/spinner'
import './login.scss'


const alert = Modal.alert;

class Login extends React.Component{
	state = {
		usernae:'',
		password:'',
		show:true,
		style:'block',
		filterRouter:["setting","productOrder"]
	}

	goback(){
		if(localStorage.getItem("token")){
			history.gblack(-1);
		} else {
			hashHistory.push("ismine");
		}
	}

	noid(){
		hashHistory.push('register')
	}

	componentWillMount=()=>{
		var token = localStorage.getItem('token');
		if(token){
			this.props.LoginIn(JSON.parse(token)).then(res => {
				 if(res.data.status == true){
					this.setState({style:'none'});
					this.setState({show:false});
					var token = res.data.token;
					localStorage.setItem("token",JSON.stringify(token));
					this.showAlert(res.data.data);
					setTimeout(()=>{
						 hashHistory.push("ismine");
						 return false;
					},1600)

			    }else{
			    	this.setState({show:false});
			    	this.showAlert(res.data.data);
			    }
			})
		}
	}

	componentDidMount(){
		this.setState({show:false});
	}

	loginIn = () => {
		this.setState({show:true});
		setTimeout(item =>{
			this.props.LoginIn({username:this.state.username,password:this.state.password}).then( res =>{
				    if(res.data.status == true){
						this.setState({style:'none'});
						this.setState({show:false});
						var token = res.data.token;
						localStorage.setItem("token",JSON.stringify(token));
						this.showAlert(res.data.data);
						setTimeout(()=>{
							 history.go(-1);
						},1600)

				    }else{
				    	this.setState({show:false});
				    	this.showAlert(res.data.data);
				    }
			});
			
		},3000)
	}

	verify=()=>{
		var token = localStorage.getItem('token');
		console.log(token);
		this.props.verify({token:token});
	}

	showAlert = (params) => {
	  const alertInstance = alert("",params,[]);
		  setTimeout(() => {
		    // 可以调用close方法以在外部close
		    alertInstance.close();
		   
		  }, 1500);
	};

	getUsername = (event) =>{
		this.setState({username:event.target.value});
	}

	getPasswod = (event) =>{
		this.setState({password:event.target.value});
	}


	render(){
		var params = this.state.style;
		var style = {display:params};
		return(
			<div className="loginBg">
				<i className="iconfont icon-fanhui fl" onClick={this.goback.bind(this)}></i>
				<div id="login">
					<div className = 'Login' style={style}>
						<div className = "username">
							<span>
								<svg className="icon login_icon" aria-hidden="true">
									<use xlinkHref="#icon-yonghu"></use>
								</svg>
							</span>
							<input type="text" onBlur = {this.getUsername}/>
						</div>
						<div className = "password">
							<span>
								<svg className="icon login_icon" aria-hidden="true">
									<use xlinkHref="#icon-mima"></use>
								</svg>
							</span>
							<input type="password" onBlur = {this.getPasswod}/>
						</div>
						<button onClick = {this.loginIn}>立即登陆</button>
						<div className="noid" onClick={this.noid.bind(this)}>没有账号？点我立刻注册</div>
					</div>
					<Spinner show ={this.state.show}/>
					 <WingBlank size="lg">
					    <WhiteSpace size="lg" />
					 </WingBlank>
				</div>
			</div>
		)
	}
}


const getState = (state) =>{

	return {
		login:state.Loign,
	}
}

export default connect(getState,action)(Login);



