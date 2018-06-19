import React,{Component} from 'react'
import {hashHistory} from "react-router"



import http from "../../http/httpClient"
import {Icon} from "antd"
import "./setting.scss"


class Setting extends Component{
	state = {
		dataSet:{
			headImgs:{name:"头像",router:"heade"},
			nichengs:{name:"昵称",router:"nicheng"},
			sexs:{name:"性别",router:"sex"},
			births:{name:"生日",router:"birth"},
			jianjies:{name:"简介",router:"jianjie"},
			phones:{name:"手机号",router:"phone"},
			passswords:{name:"密码",router:"password"},
			marks:{name:"个性标签",router:"mark"}
		},
		routerFilter:["头像","生日"],
		datas:[],
		touxiangData:{}
	}

	componentWillMount(){
		var token = localStorage.getItem("token");
		if(token){
			var config = this.state.dataSet;
			var filterData = [];
			var touxiang = {};
			http.post("setPresonMsg",{username:"tom",password:111111}).then(res => {
				let userData = res.data;
				userData.map(item =>{
					if(item.headImg){
						touxiang = Object.assign(config.headImgs,{head_img:item.headImg});
					} else if(!item.headImg){
						touxiang = Object.assign(config.headImgs,{head_img:""});
					}

					if(item.nicheng){
						filterData.push(Object.assign(config.nichengs,{des:item.nicheng}));
					} else if(!item.nicheng){
						filterData.push(Object.assign(config.nichengs,{des:""}));
					}


					if(item.sex){
						filterData.push(Object.assign(config.sexs,{des:item.sex}));
					} else if(!item.sex){
						filterData.push(Object.assign(config.sexs,{des:"未设置"}));
					}


					if(item.birth){
						filterData.push(Object.assign(config.births,{des:item.birth}));
					} else if(!item.birth){
						filterData.push(Object.assign(config.births,{des:""}));
					}


					if(item.jianjie){
						filterData.push(Object.assign(config.jianjies,{des:item.jianjie}));
					} else if(!item.headImg){
						filterData.push(Object.assign(config.jianjies,{des:""}));
					}

					if(item.phone){
						filterData.push(Object.assign(config.phones,{des:item.phone}));
					} else if(!item.phone){
						filterData.push(Object.assign(config.phones,{des:"未设置"}));
					}

					if(item.passsword){
						filterData.push(Object.assign(config.passswords,{des:item.passsword}));
					} else if(!item.passsword){
						filterData.push(Object.assign(config.passswords,{des:"未设置"}));
					}

					if(item.mark){
						filterData.push(Object.assign(config.marks,{des:item.mark}));
					} else if(!item.mark){
						filterData.push(Object.assign(config.marks,{des:"修改"}));
					}
				})

				var dataMsg = JSON.parse(JSON.stringify(filterData));
				this.setState({datas:dataMsg});
				//头像
				this.setState({touxiangData:touxiang});
			})
			
		} else {
			hashHistory.push("login");
		}
	}

	goNextPage(params,e){
		var className = params.router;
		var el = document.querySelector("."+className);
		el.style.background = "#ccc";
		setTimeout(() => {
			el.style.background = "#fff";

			// 传递参数，通过参数，判断要渲染的html
			let msg = params.router;

			//过滤路由,过滤不用跳转的路由
			if(this.state.routerFilter.indexOf(params.name) == -1){
				hashHistory.push({pathname:"setnextpage",query:{pams:msg,name:params.name,des:params.des}});
			}else{
				console.log(44444);
			}
		},100)
	}

	render(){
		console.log(20202020,this.state.datas)
		return(
				<div className="setting">
					<div className = "settingNav">
						<span></span>
						<span>个人信息</span>
					</div >
					<div className="settingMain">
						<div className="setMain1">
							<ul>
								<li onClick={this.goNextPage.bind(this,this.state.touxiangData)} className = {this.state.touxiangData.router}>
									<span>{this.state.touxiangData.name}</span>
									<span><img src={this.state.touxiangData.head_img} className ="ismineImg"/></span>
								</li>
								{
									this.state.datas.map((item,index) =>{
										return(
											<li key={index} onClick={this.goNextPage.bind(this,item)} className = {item.router}>
												<span>{item.name}</span>
												<span>{item.des}<Icon type="right" className="setIcon" /></span>
											</li>
										)
									})
								}
							</ul>
							<div className = "leave">
								<button>退出登录</button>
							</div>
						</div>
					</div>
				</div>
			)
	}
}

export default Setting;