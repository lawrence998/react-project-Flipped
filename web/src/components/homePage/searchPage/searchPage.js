import React from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'

//component
import SearchBar from '../searchBar/searchBar'
import ProductListComponent from '../productList/productListComponent'
//scss
import './searchPage.scss'
// action
//action
import * as homePageAction from '../homePageAction'




class HomePage extends React.Component{

	static defaultProps = {
		searchDateSet:[
						'毛衣','双肩包','大衣','卫衣','打底裤','围巾','手套','钱包','衬衫',
						'伞','口罩','唇膏','护肤','毛衣链'
					  ]
	}

	state = {
		showSearchPage:'block',
		hideListPage:'none',
		type:'',
		goblack:'block',
		login_in:'none',
		search:'block',
		searchHistory:[],
	}

	componentWillMount(){

		if(!localStorage.getItem("searchHistory")){
			var arrs = [];
			localStorage.setItem("searchHistory",JSON.stringify(arrs));
		}else{
			//更新搜索历史状态数据
			var arrFilter = [];
			var arr = JSON.parse(localStorage.getItem("searchHistory"));
			for(var i=0;i<arr.length;i++){
				if(arrFilter.indexOf(arr[i]) == -1){
					arrFilter.push(arr[i]);
				}
			}
			this.setState({searchHistory:arrFilter});
		}

		if(this.props.location.query.type){
			//其他页面跳转进来,带type参数,隐藏热搜索，和历史搜索
			this.setState({showSearchPage:'none',type:this.props.location.query.type});
		}
	}

	shouldComponentUpdate(a1){
		return this.props.location.query.type ? false : true;
	}

	searchBarParmas =(params)=> {
		console.log(params)
		var arrs = JSON.parse(localStorage.getItem("searchHistory"));
		this.setState({showSearchPage:'none',hideListPage:'block',searchHistory:arrs});

		var searchInput = document.querySelector('#searchInput');
		var value = searchInput.value;
		this.props.searchData({type:value});
		this.refs.changeData.searchProduct({product_type:value});
	}

	hotSearch =(item) =>{
		//将搜索词汇写入本地存储，用作历史搜索
		
		var arrs = JSON.parse(localStorage.getItem("searchHistory"));
		arrs.push(item);
		localStorage.setItem("searchHistory",JSON.stringify(arrs));

		//搜索时隐藏mainhome,路由跳转子页面,列表页，传递type参数
		this.setState({showSearchPage:'none',type:item});
		this.setState({hideListPage:"block",showSearchPage:'none'});
		this.refs.changeData.searchProduct({product_type:item});
	}


	onChange =(params)=>{
		var arrs = JSON.parse(localStorage.getItem("searchHistory"));
		this.setState({showSearchPage:'block',hideListPage:'none',searchHistory:arrs});
		var searchInput = document.querySelector('#searchInput');
		var value = searchInput.value;
		this.props.searchData({type:value});
	}


	render(){
		var hideListPage = this.state.hideListPage;
		return (
			<div id = 'searchPage'>
				<div className = 'homePageTop'>
					<SearchBar change = {this.searchBarParmas.bind(this)} initState = {this.state}  initFunction={this.onChange.bind(this)}/>
				</div>
				<div className = 'mainHome' style = {{display:this.state.showSearchPage}}>
					<div className = 'hotSearch'>
						<p className = "hot_title">热门搜索</p>
						<ul className ="hotSearchList">
							{this.props.searchDateSet.map((item,index) => {
								return <li key = {index} onClick = {this.hotSearch.bind(this,item)}>{item}</li>
							})}
						</ul>
						<p className = "near_title">最近搜索</p>
						<ul className ="nearSearchList">
							{this.state.searchHistory.map((item,index) => {
								return <li key = {index} onClick = {this.hotSearch.bind(this,item)}>
									<svg className="icon history_icon" aria-hidden="true">
										<use xlinkHref="#icon-lishijilu"></use>
									</svg>
									{item}
								</li>
							})}
						</ul>
					</div>
				</div>
				<div className = 'TestList'>
					<ProductListComponent type = {this.state.type} hideList={this.state.hideListPage} ref = "changeData"/>
				</div>
			</div>
		)
	}
}

let getState = (state) =>{
	return{
	
	}
}


export default connect(getState,homePageAction)(HomePage);