import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Link,hashHistory } from 'react-router'
import * as actions from './topicAction'
import './topic.scss'
import { Carousel, WingBlank } from 'antd-mobile';
import Navigation from '../navigation/navigationComponent'
import Spinner from '../spinner/spinner'


class Topic extends React.Component{
	  state = {
	  	idx: this.props.params.idx || 1,
	    imgHeight: 176,
	    slideIndex: 0,
	    current: 'current',
	    show:true
	  }

	componentWillMount(){
		this.props.getTheme({theme_hot:'1'}).then(res=>{
			this.setState({show:false})
		});
	}


	  componentDidMount() {
		   this.props.router.setRouteLeaveHook(
			    this.props.route, 
			    this.routerWillLeave
			  )
  	}
	  routerWillLeave(nextLocation) {
		  // 返回 false 会继续停留当前页面，
		  // 否则，返回一个字符串，会显示给用户，让其自己决定
		  	
//			  	alert(this.refs) ;
 
		}
	  large(from,to){
	  	if(from == to){
	  		var img = this.refs[`theme${(from + 1)}.png`];
	  		var width = getComputedStyle(img).width;
	  		var height = getComputedStyle(img).height;
	  		var copyImg = img.cloneNode(true);
	  		copyImg.className = "copy-img";
	  		copyImg.style.width = width;
	  		copyImg.style.height = height;
	  		this.refs.topicCarousel.appendChild(copyImg);
				
				hashHistory.push(`/topicItem/${from+1}`) 
	  	}
	  }
	  render() {
	    return (
	    <div className="topic-container">
	    	<Spinner show={this.state.show}></Spinner>
	    	<div className="topic-top">
						<p className="title">------专题------</p>
				</div>
				<div className="topic-carousel" ref="topicCarousel">
						<WingBlank>
			 				<Carousel className="space-carousel"
			          frameOverflow="visible"
			          cellSpacing={30}
			          slideWidth={0.8}
			          autoplay={false}
			          selectedIndex={(this.state.idx - 1)}
			          beforeChange={(from,to)=>{this.large(from,to)}}
          			afterChange={index => console.log('slide to', index)}
			        >
			          {this.props.ajaxResult.map((item, index) => (
			            <Link
			              key={'theme'+item.theme_id}
			              style={{
			                display: 'block',
			                position: 'relative',
			                top: this.state.slideIndex === index ? -10 : 0,
			                height: this.state.imgHeight
			              }}
			            >
			              <img
			                src={`../../public/theme/${item.theme_img}`}
			                style={{width: '100%', verticalAlign: 'top'}}  
			                ref={item.theme_img}
			                onLoad={() => {
			                  // fire window resize event to change height
			                  window.dispatchEvent(new Event('resize'));
			                  this.setState({ imgHeight: 'auto' });
			                }}
			              />
			            </Link>
			          ))}
			        </Carousel>
			      </WingBlank>
				</div>
	    	<Navigation></Navigation>
	    </div>  
	    );
	  }
}

let mapStateToProps = (state)=>{
	return {
			ajaxState: state.topic.status,
			ajaxResult: state.topic.result || []
	}
}

export default connect(mapStateToProps,actions)(Topic);
