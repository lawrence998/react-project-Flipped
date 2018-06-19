import React,{Component} from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import * as designerproduct from './desigerproductAction'
import './designerproduct.scss'
import '../../../../public/assets/fonts/iconfont.css'
import Spinner from '../../spinner/spinner.js'

class Designerproduct extends Component{
    state = {
        show:true
    }

     componentWillMount(){
        var proid = this.props.location.query.type;
       this.props.getproducts(proid).then(res=>{
              setTimeout(()=>{
                this.setState({show:false})
            },1000)
        })
    }

    goback(){
        history.go(-1);
    }

     godetail=(value)=>{

        hashHistory.push({pathname:'/detail',query:{id:value}})
    
    }

    render(){
       var desiger = JSON.parse(localStorage.getItem("desiger")).desiger;
        console.log(desiger)
        return(
                <div>
                <Spinner show={this.state.show}></Spinner>
                    <div className="topb"><i className="iconfont icon-fanhui fl" onClick={this.goback.bind(this)}></i>{desiger.slice(3)}
                    </div>
                    <div className="tiaowen"></div>
                    <div className="content">
                    {
                        this.props.pageProduct.map((item,index)=>{

                        return(
                            <div className="feedcell" key={index} onClick={this.godetail.bind(this,item.product_id)}>
                                <div className="imageblock">
                                <img src={item.product_img} />
                                </div>
                                <div className="priceblock">￥{item.price}</div>
                                <div className="commentblock">{item.product_title}</div>
                            </div>
                            )
                       })
                    }
                    </div>
                </div>
        )
    }
}


let mapStateToProps = (state) => {
    console.log(state.designerproduct.data.data.results)
    return {
        pageProduct: state.designerproduct.data.data.results
    }
}

export default connect(mapStateToProps,designerproduct)(Designerproduct);