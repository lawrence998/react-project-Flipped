import React from 'react'
import {hashHistory} from 'react-router'

import './place.scss'
import http from '../../../http/httpClient'

class Place extends React.Component{
	state = {
		place:'你还没有地址呢...',
		data:[],
	}

	componentWillMount(){
		var data = JSON.parse(localStorage.getItem("token"));
		var user_id = data.user_id;
		http.post("getPlace",{user_id:user_id,place_id:''}).then( res => {
			this.setState({data:res.data.data.results,place:'您的地址列表'});
		})
	}

	goMine =()=> {
		hashHistory.push('ismine');
	}

	writePlace =()=> {
		hashHistory.push('addPlace');
	}


	getPlaceUserid =(e)=> {
		var place_id = e.target.getAttribute('data-id')
		var data = JSON.parse(localStorage.getItem("token"));
		var user_id = data.user_id;

		if(e.target.checked){
			http.post("getPlace",{user_id:'',place_id:place_id,select_id:1,user_id:user_id}).then( res => {
				console.log(res);
				this.setState({data:res.data.result.data.results,place:'您的地址列表'});

			})

		}else{
			http.post("getPlace",{user_id:'',place_id:place_id,select_id:0,user_id:user_id}).then( res => {
				this.setState({data:res.data.result.data.results,place:'您的地址列表'});
			})
		}
	}

	goOrder=()=> {
		console.log(666666);
		hashHistory.push('order');
	}



	render(){
	console.log(this.state.data);
		var data = this.state.data ? this.state.data : []
		return(
			<div id="place">
				<p>
					<svg className="icon goMine" aria-hidden="true" onClick={this.goMine}>
						<use xlinkHref="#icon-arrow-left"></use>
					</svg>
					管理地址
					<span className="selectPlace" onClick={this.goOrder}>确定</span>
				</p>
				<div className="oldPlace">{this.state.place}</div>
				<ul className="placeList">
					{
						data.map((item,index) =>{
							console.log(item.select_status);
							var status = item.select_status;
							if(status==1){
								status = 'checked';
							}
							return(
									<li key={index}>
										<input type="checkbox" onChange={this.getPlaceUserid} data-id={item.place_id} checked={status}/>
										<span>{item.username} {item.phone} {item.place} {item.detailPlace}</span>
									</li>
								)
						})
					}
				</ul>
				<button onClick={this.writePlace} className="addNewPlace">新增地址</button>
			</div>
		)
	}
}


export default Place;