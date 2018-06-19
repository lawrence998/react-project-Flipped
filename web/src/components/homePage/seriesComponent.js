// import { lazyload } from 'react-lazyload';
import {hashHistory} from 'react-router'
import React,{Component} from 'react'
import Swiper from 'swiper'
import LazyLoad from 'react-lazy-load';



class SeriesComponent extends Component {
	state = {
		imgHeight:"6.2rem",
	}

	componentDidMount(){
		this.touchSlide();
		//系列大图高度,相对图片宽度比例
		window.addEventListener('resize', this.onWindowResize);
	}

	onWindowResize =()=> {
		//监听屏幕的宽度变化,修改图片的伸缩比
		var width = window.innerWidth*0.58;
		if(width>680 && this.state.imgHeight=="420px"){
			this.setState({imgHeight:width+"px"});
		}

		this.setState({imgHeight:width+"px"});

	}

	componentWillUnmount() {
    	window.removeEventListener('resize', this.onWindowResize)
	}

	touchSlide(){
		//滑动组件
	    var swiper = new Swiper('.swiper-container', {
	      observer:true,//修改swiper自己或子元素时，自动初始化swiper,观察者模式
		  observeParents:true,//观察者模式
	      slidesPerView: 3,
	      centeredSlides: false,
	      spaceBetween: 24,
	    });
	}

	goProductList =(e)=> {
		hashHistory.push({pathname:"productList",query:{series:e.target.id}});
	}

	goDetail =(productId)=> {
		hashHistory.push({pathname:"detail",query:{id:productId}});
	}


	render() {
  	//懒加载。。。模块
  	var imgHeight = this.state.imgHeight;
 	var style = {height:imgHeight};
	var imgItem = this.props.series[5];
	var seriesName = this.props.series ? this.props.series[5].series : 1;
    return (
	    	<div>
	    		<div className = 'xiangqin'>
					<img src = {imgItem ? imgItem.series_img : ''} className = "seriesImg" style = {style} id={seriesName} onClick={this.goProductList}/>
					<div className="swiper-container">
					    <div className="swiper-wrapper" style={{width:'5000px',height:'233px',paddingLeft:'24px'}}>
					    	{
					    		this.props.series.map((item,index) =>{
									return (
												<div className="swiper-slide" key = {index} onClick = {this.goDetail.bind(this,item.product_id)} style={{width:'233px',height:'233px'}}>
													<LazyLoad height={233} offsetTop={200}>
														<img src = {item.product_img.split(',')[0]} className="slideImg"/>
														
													</LazyLoad>
													<p className="series_title">{item.product_title.slice(0,14)}</p>
													<p>￥{item.price}</p>
											   </div>)
										   
								})
					    	}
					      
					    </div>
					</div>
				</div>
			</div>
    	)
    }
  
}

export default SeriesComponent;