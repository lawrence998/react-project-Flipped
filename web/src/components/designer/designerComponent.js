import React,{Component} from 'react'
import {connect} from 'react-redux'
import './designer.scss'
import * as designerAction from './designerAction'
import {hashHistory} from 'react-router'
import Navi from '../navigation/navigationComponent'

class Designer extends Component{
	state = {
		
	}

	static defaultProps = {
    	
    	imgs:[{src:"../../../public/assets/designer/xiangbao.png",title:"箱包"},
    		{src:"../../../public/assets/designer/shenghuo.png",title:"生活家居"},
    		{src:"../../../public/assets/designer/nvzhuang.png",title:"女装"},
    		{src:"../../../public/assets/designer/nanzhuang.png",title:"男装"},
    		{src:"../../../public/assets/designer/meishi.png",title:"美食"},
    		{src:"../../../public/assets/designer/peishi.png",title:"配饰"}
    	],
    	img2:[{src:"../../../public/assets/designer/chaopai.jpg",title:"潮派"},
    		{src:"../../../public/assets/designer/tianmei.jpg",title:"甜美"},
    		{src:"../../../public/assets/designer/jianyue.jpg",title:"简约"},
    		{src:"../../../public/assets/designer/zhongguofeng.jpg",title:"中国风"},
    		{src:"../../../public/assets/designer/rishi.jpg",title:"日式"},
    		{src:"../../../public/assets/designer/fugu.jpg",title:"复古风"}
    		]
	}

    componentWillMount(){
        this.props.desiger(1)
    }

    goinstro=(value)=>{

        hashHistory.push({pathname:'/desiginstro',query:{type:value}})
    }

	Handler(){
		
		document.getElementsByClassName('dsing2')[0].style.display="none"
		document.getElementsByClassName('dsing1')[0].style.display="block"
		document.getElementsByClassName('hy')[0].style.color = "orange";
		document.getElementsByClassName('fg')[0].style.color = "#000";

	}
	pick(){
		
		document.getElementsByClassName('dsing1')[0].style.display="none"
		document.getElementsByClassName('dsing2')[0].style.display="block"
		document.getElementsByClassName('hy')[0].style.color = "#000";
		document.getElementsByClassName('fg')[0].style.color = "orange";

	}
	goSearch=(value,zd)=>{

		hashHistory.push({pathname:'/desiglist',query:{type:value,zd:zd}})
	}
	

	render(){
		return(
			<div className="box">
                {this.props.pageProduct.map((item,index)=>{

                return(
                    <div className="flex-item1" key={index} onClick={this.goinstro.bind(this,item.designer_id)}>
                    <img src={item.brand_img} />
                    <div className="position">
                        <div className="designame">{item.designer_name}</div>
                        <div className="founder">{item.founder}</div>
                        <div className="ministyle">{item.designer_minitype}&nbsp;&nbsp;<span>{item.brand_style}</span></div>
                    </div>
                    </div>
                )
                })

                }

				<div className="flex-item2"><span className="hy" onClick={this.Handler.bind(this)}>行业</span><span className="fg" onClick={this.pick.bind(this)}>风格</span></div>
				<div className='dsing1'>
					 <div className="flex-item3">
					 	{this.props.imgs.map((item,index) =>{
					 		return <div key={index} className="flex-item4" onClick={this.goSearch.bind(this,item.title,'designer_minitype')}><img src={item.src} title={item.title}/>
					 		</div>
					 	})}
					 }
					 </div>
				</div>
				<div className='dsing2'>
					  <div className="flex-item5">
						 {this.props.img2.map((item,index) =>{
					 		return <div key={index} className="flex-item4" onClick={this.goSearch.bind(this,item.title,'brand_style')}><img src={item.src} title={item.title}/>
					 		</div>
					 	})}
					 }
					 </div>
				</div>
                <Navi></Navi>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        pageProduct: state.desiger.data.data.results
    }
}

export default connect(mapStateToProps,designerAction)(Designer);