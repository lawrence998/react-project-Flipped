import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import {Carousel, WingBlank,Icon} from 'antd-mobile';
import * as actions from './topicItemAction'
import '../../../../public/icomoon/style.css'
import './topicItem.scss'

class TopicItem extends React.Component {
  state = {
  	theme_id:this.props.params.theme_id,
    imgHeight: 176,
    slideIndex: 0
  }
  componentWillMount(){
		this.props.getThemeItem({theme_id:this.state.theme_id});
	}
  componentDidMount() {
   this.props.router.setRouteLeaveHook(
	    this.props.route, 
	    this.routerWillLeave
	  )
  }
  routerWillLeave(nextLocation) {
			
	}
  list(index){
  	if(index >= 2){
  		console.log(11)
  	}
  }
  render() {
    return (
    	<div className="topic-item-container">
    		<Link className="topic-item-top" to={`/`}>
					<i className="icon-xiangzuo"></i>
				</Link>
				<Link className="topic-item-top-right" to={`/topicList/${this.state.theme_id}`}>
					<i className="icon-chanpinhuoke"></i>
				</Link>
      {
      	(function(status,res,self){
      		if(status == 1){
      			try{
      				var images = res[0]['theme_images'].split(',');
      				
      				return (
      				<WingBlank>
      					<Carousel
				          autoplay={false}
				          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
				          afterChange={index =>(self.list(index))}
				        >
				        {
				        	images.map((item,index)=>{
				        		return (
			    						<a
					              key={item}
					              style={{
					                display: 'block',
					                position: 'relative',
					                top: self.state.slideIndex === index ? 0 : 0,
					                height: self.state.imgHeight,
					                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
					              }}
					            >
					              <img
					                src={`../../../public/theme/${item}`}
					                style={{ width: '10rem',height:'17.8rem',verticalAlign: 'top' }}
					                key={`img${item}`}
					                onLoad={() => {
					                  // fire window resize event to change height
					                  window.dispatchEvent(new Event('resize'));
					                  self.setState({ imgHeight: 'auto' });
					                }}
					              />
					            </a>
			    					)
				        	})
				        }
				        </Carousel>
				      </WingBlank>
      				)
      			}catch(err){
      				
      			}
      				
      		}else if(status != 1){
      			return (
							<div className="prolist-cover">
								<Icon type="loading" size="lg" color="#d8a33e"/>
							</div>
						)
      		}
      	})(this.props.ajaxState,this.props.ajaxResult,this)
      }
  		<Link className="topic-item-bottom" to="/">
				<i className="icon-zhuye"></i>
			</Link>
      </div>
    );
  }
}


let mapStateToProps = (state)=>{
	return {
		ajaxState: state.topicItem.status,
		ajaxResult: state.topicItem.result || []
	}
}

export default connect(mapStateToProps,actions)(TopicItem);