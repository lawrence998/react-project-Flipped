
import React from 'react'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
// import LazyLoad from 'react-lazyload'
import {Icon} from 'antd';
// import LazyLoad from 'react-lazy-load';
 


//action
import * as HomePageAction from './homePageAction'
//component
import SearchBar from './searchBar/searchBar'
import SeriesComponent from'./seriesComponent'
import FooterBer from "../navigation/navigationComponent"
import Spinner from '../spinner/spinner'
//scss
import './homePageComponent.scss'


class HomePageComponent extends React.Component{
	static defaultProps = {
		homeDataSet1:[{'#icon-nv':'女人'},{'#icon-nanshi':'男人'},{'#icon-shoubiao':'配饰'},{'#icon-009':'箱包'}],
		homeDataSet2:[{'#icon-shoubiao':'配件'},{'#icon-taideng':'生活家居'},{'#icon-xuegao':'美食'},{'#icon-liwu':'礼物'}],
		seriesDataSet:['相亲','福到','佛系','仙女味','梳妆']
	}
	state = {
		goblack:'none',
		login_in:'block',
		search:'none',
		show:true,
		homepage:"homepage"
	}
	componentWillMount(){
		var params = this.props.seriesDataSet;
		console.log(3333333);
		this.props.homePge({series:params}).then(res =>{
			console.log(2);
			if(res){
				this.setState({show:false});
			}
		});
	}

	componentDidMount(){
		// this.setState({show:false});
	}
	
	goSearchPage =()=>{
		//searchBar获取焦点，跳转searchPage
		hashHistory.push('searchPage');
	}

	goSearchProduct =(value)=> {
		//跳转列表页，传递参数{type:value}
		hashHistory.push({pathname:'/productList',query:{type:value}});
	}



	render(){
		return (
			<div className = "homePage">
				<div className = 'homePageTop'>
					<SearchBar ref="searchBar" changePage = {this.goSearchPage.bind(this)} initState = {this.state}/>
				</div>
				<div className = 'mainHome'>
					<div className = "data_list">


						<ul className = "data_ul_list">
							{this.props.homeDataSet1.map((item,index) =>{
								return (<li key = {index} onClick = {this.goSearchProduct.bind(this,item[Object.keys(item)])}>
										<div className = "confont">
											<svg className="icon lz_icon" aria-hidden="true">
												<use xlinkHref={Object.keys(item)}></use>
											</svg>
										</div>
										 <span className = 'product_type'>{item[Object.keys(item)]}</span>
									   </li>)
							})}
						</ul>


						<ul className = "data_ul_list">
							{this.props.homeDataSet2.map((item,index) =>{
								return (<li key = {index} onClick = {this.goSearchProduct.bind(this,item[Object.keys(item)])}>
										<div className = "confont">
											<svg className="icon lz_icon" aria-hidden="true">
												<use xlinkHref={Object.keys(item)}></use>
											</svg>
										</div>
										 <span>{item[Object.keys(item)]}</span>
									   </li>)
							})}
						</ul>


					</div>
					<div className = 'siteBar'></div>
					<div className = "seriesList">
						{
							this.props.series.map((item,index) => {
								if(!item){return false;};
								return (
										<div key={index}>
											<SeriesComponent series = {item}/>
										</div>

									)
							})
						}
					</div>
					
				</div>
				<FooterBer />
				<Spinner show={this.state.show} />
			</div>

		)
	}
}


let mapStateToProps = (state) => {
    return {
        series: state.pageProduct.data? state.pageProduct.data: []
    }
}


export default connect(mapStateToProps,HomePageAction)(HomePageComponent);