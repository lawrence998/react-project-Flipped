import React from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'


//scss
import './searchBar.scss'
//component

//action
import * as homePageAction from '../homePageAction'



class SearchBar extends React.Component{
	state = {
		goblack:'block',
		login_in:'block',
		search:'block'
	}
	static defaultProps = {
		text:''
	}

	componentWillMount(){
		var _state = this.props.initState;
		this.setState({
			goblack:{display:_state.goblack},
			login_in:{display:_state.login_in},
			search:{display:_state.search}
		})
		
	}

	changePage =(event)=>{
		this.props.change('foucs');
	}

	showChange =()=> {
		// console.log(this.props);
		// hashHistory.push('searchPage');
		// this.props.initFunction('foucs');
		// this.props.changePage();
		console.log(this.props.initState);
		if(this.props.initState.homepage){
			hashHistory.push('searchPage');
		}else{
			this.props.initFunction('foucs');
		}
	}

	goBlack =()=> {
		hashHistory.push('homePage');
	}

	searchMsg =()=> {
		var value = document.querySelector('#searchInput').value;
		// this.props.searchData({type:value});
		this.props.change({page:'pageNone',value:value});

	}

	render(){
		var login_in = this.state.login_in;
		var goblack = this.state.goblack;
		var search = this.state.search;

		return(
			<div>
				<div className = 'SearchBar'>
					<span className = "goBlack" onClick={this.goBlack}>
						<svg className="icon goBlack_icon" aria-hidden="true" style={goblack}>
							<use xlinkHref="#icon-zuojiantou"></use>
						</svg>
					</span>
					<div className = 'searchIn'>
						<span>
							<svg className="icon search_icon" aria-hidden="true">
								<use xlinkHref="#icon-sousuo"></use>
							</svg>
							<input type = "text" onFocus = {this.showChange} id="searchInput" placeholder = '搜索好设计' className="searchInput"/>
							<svg className="icon search_icon" aria-hidden="true">
								<use xlinkHref="#icon-saomiaoerweima"></use>
							</svg>
						</span>
					</div>
					<div className = "searchLogin">
						<span className = 'sealogin'>
							<button style={search} onClick = {this.searchMsg}>搜索</button>
							<svg className="icon login_icon" aria-hidden="true" style={login_in}>
								<use xlinkHref="#icon-et-message"></use>
							</svg>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

let getState = (state) =>{
	return{
		searchDate:state.searchMsg
	}
}



export default connect(getState,homePageAction)(SearchBar);