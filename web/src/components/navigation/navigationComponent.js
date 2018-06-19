import React,{Component} from 'react'
import { Link } from 'react-router'
import '../../../public/icomoon/style.css'
import './navigation.scss'

export default class Navigation extends Component {
		state = {
	      index: 0,
	      msg:[
	            {
	                'icon':'icon-aixin2',
	                'name':'想去',
	                'index': 0,
	                'route':'/'
	            },
	            {
	                'icon':'icon-shejishi2',
	                'name':'设计师',
	                'index': 1,
	                'route':'/designer'
	            },
	            {
	                'icon':'icon-iconfontchakan',
	                'name':'逛',
	                'index': 2,
	                'route':'/homepage'
	            },
	            {
	                'icon':'icon-wode2',
	                'name':'我的',
	                'index': 3,
	                'route':'/ismine'
	            }  
	        ]
    }
    handleClick(i) {
       /* this.setState({
            index: i
        });*/
    }
    render() {
        return (
        	<div>
	        	<div>{this.props.children}</div>
	        	<div className="navigation-bottom">
	                {
	                	this.state.msg.map(item=>{
	                		if(item.index == 0){
	                			return (
	                				<Link  className="nav-item" key={item.index} to={item.route} activeClassName="active" onlyActiveOnIndex={true}>
				                		<i className={item.icon}></i>
				            			<span>{item.name}</span>
				                    </Link >
	                			)
	                		}else{
	                			return (
	                				<Link className="nav-item" key={item.index} to={item.route} activeStyle={{color:'#d8a33e'}} activeClassName="active">
				                		<i className={item.icon}></i>
				            			<span>{item.name}</span>
				                    </Link>
		                		)
	                		}
	                	})
	                }
	            </div>
        	</div>
        	
        )
    }
}
