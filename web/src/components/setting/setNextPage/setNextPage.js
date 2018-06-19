import React,{Component} from "react"
import http from "../../../http/httpClient"

import "./setNextPage.scss"





class NextPage extends Component{
	state = {
		pageName:"",
		name:"",
		saveMsg:"",
		des:'',
		filterSave:["password","phone"]
	}


	componentWillMount(){
		var routerParams = this.props.location.query;
		console.log(routerParams);
		var key = routerParams.pams;
		var navName = routerParams.name;
		var des = routerParams.des;

		if(this.state.filterSave.indexOf(key) >-1){
			this.setState({pageName:key,name:navName,des:des});
		} else {
			this.setState({pageName:key,name:navName,saveMsg:"保存",des:des});
		}

	}



	saveMsgChange =(params)=> {

		//修改的值存在,才请求后台
		if(params.value){
			http.post("nextpagesearch",params).then(res => {
				if(res.data.affectedRows == 1){
					history.go(-1);
				}
			})
			
		} else{
			history.go(-1);
		}

	}



	clickSaveButton =()=> {

		var token = JSON.parse(localStorage.getItem("token"));
		var username = token.username;
		var changeType = this.state.pageName;
		var el = document.querySelector('.'+changeType);
		var value = el.value;

		let obj = {username:username,value:value,changeType:changeType};
		//修改后台数据请求函数调用
		this.saveMsgChange(obj);
	}



	showPage =(showName)=> {
		if(showName == "jianjie"){
			return(
				<textarea className ={showName} placeholder = "请输入您的简介"></textarea>
				)
		}

		if(showName == "nicheng"){
			return(
				<input type="text" placeholder={this.state.des} className ={showName}/>
				)
		}

		if(showName == "sex"){
			return(
				<ul>
					<li>sex</li>
				</ul>
				)
		}

		if(showName == "phone"){
			return(
				<ul>
					<li>phone</li>
				</ul>
				)
		}

		if(showName == "mark"){
			return(
				<ul>
					<li>mark</li>
				</ul>
				)
		}

		if(showName == "password"){
			return(
				<ul>
					<li>paw</li>
				</ul>
				)
		}
	}


	render(){
		return(
			<div className="setNextPage">
				<div className="setNextPageNav">
					<span></span>
					<span>{this.state.name}</span>
					<span onClick = {this.clickSaveButton}>{this.state.saveMsg}</span>
				</div>
				<div className="setNextPageMain">
					{this.showPage(this.state.pageName)}
				</div>
			</div>

			)
	}
}

export default NextPage;