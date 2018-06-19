import React,{Component} from 'react'
import {connect} from 'react-redux'
import {hasHistory} from 'react-dom'
import Spinner from '../spinner/spinner'
import {hashHistory} from 'react-router'
import './reg.scss'
import '../../../public/assets/fonts/iconfont.css'

import * as regAction from './regAction'
import { Modal, List, Button, WhiteSpace, WingBlank ,Toast} from 'antd-mobile';

class RegPage extends Component{
	state = {
		username:'',
		password:'',
		show:true,
		status:0
	}

    goback(){
        history.go(-1)
    }

	successToast(message) {
        Toast.success(message, 2);
    }
    offline(message) {
        Toast.offline(message,2);
    }


	regIn=(psw,users,phones)=>{
		if(this.state.status==1){
		var psw = document.getElementsByClassName('psw')[0].value;
		var users = document.getElementsByClassName('user')[0].value;
		var phones = document.getElementsByClassName('phone')[0].value;

		if(users == '' || psw == '' || phones==''){
           this.offline('输入不能为空')
           return;  
         }

        var reg = /^\S{6,20}$/
            if(!reg.test(psw)){
               this.offline('密码格式不正确')         
               return;
         }
		this.props.regin({users:users,phones:phones,psw:psw}).then(res => {
				if(res.data.status==true){
					hashHistory.push('login');
				}
			});
		}
	}

	getUsername=(value)=>{
		var phone = document.getElementsByClassName('phone')[0].value;
		var reg = /^1[34578]\d{9}$/i
           if(!reg.test(phone)){
           this.offline('手机号码不合法')
              return;   
         }else{
         	
			this.props.reg({phone:phone}).then(res => {
				if(res.data.statu==true){
					this.setState({status:1})
					this.regIn;
				}else{
					 this.offline('您已注册过了哦'); 
				}
			});
		}

	}
	
	render(){
		return(
			<div className="regBg">
                <i className="iconfont icon-fanhui fl" onClick={this.goback.bind(this)}></i>
				<div id="login">
					<div className = 'Login'>
					<div className = "username">
							<span>
								<svg className="icon login_icon" aria-hidden="true">
									<use xlinkHref="#icon-yonghu"></use>
								</svg>
							</span>
							<input type="text" className="user" placeholder="请输入用户名"/>
						</div>
						<div className = "sphone">
							<span>
								<svg className="icon login_icon" aria-hidden="true">
									<use xlinkHref="#icon-yonghu"></use>
								</svg>
							</span>
							<input type="text" placeholder="请输入手机号码" className="phone" onBlur = {this.getUsername.bind(this)} />
						</div>
						<div className = "password">
							<span>
								<svg className="icon login_icon" aria-hidden="true">
									<use xlinkHref="#icon-mima"></use>
								</svg>
							</span>
							<input type="password" className="psw" placeholder="请输入密码"/>
						</div>
						<input type="button" onClick = {this.regIn} value="立刻注册" className="button"/>

					</div>
				</div>
			</div>
		)
	}
}


let mapStateToProps = (state) => {
    return {
        pageProduct: state.pageProduct.data
    }
}

export default connect(mapStateToProps,regAction)(RegPage);