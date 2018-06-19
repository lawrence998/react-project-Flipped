import React from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'

import './addPlace.scss'
import * as actions from '../../login/loginAction'



class AddPlace extends React.Component{

	goMine =()=> {
		hashHistory.push('place');
	}

	goPlace =()=>{
		hashHistory.push('place');
	}

	addPlace =()=> {
		var username = document.querySelector('.username').value;
		var phone = document.querySelector('.phone').value;
		var place = document.querySelector('.place').value;
		var detailPlace = document.querySelector('.detailPlace').value;
		var user_id = JSON.parse(localStorage.getItem('token')).user_id;
		var addPlace = {place:place,phone:phone,username:username,detailPlace:detailPlace,user_id:user_id};
		console.log(addPlace);
		this.props.addPlace(addPlace).then((res,err)=> {
			console.log(res);
			if(res.data.status == true){
				alert('添加地址成功');
			}else{
				alert('添加地址失败');
			}
		})

	}

	render(){
		return(
			<div id="place">
				<p>
					<svg className="icon goMine" aria-hidden="true" onClick={this.goMine}>
						<use xlinkHref="#icon-arrow-left"></use>
					</svg>
					新增地址
				</p>
				<div className="newPlace">
					<div><span>收货人:</span><input type="text" className="username"/></div>
					<div><span>手机号:</span><input type="text" className="phone"/></div>
					<div><span>收货地址:</span><input type="text" className="place"/></div>
					<div><span>详细地址:</span><input type="text" className="detailPlace"/></div>
				</div>
				<button onClick={this.addPlace} className="saveInPlace">保存</button>
			</div>
		)
	}
}

let getState =(state)=> {
	return {
		addPlace:state.addPlace
	}
}

export default connect(getState,actions)(AddPlace);