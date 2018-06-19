import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as designerAction from './desiglistAction'
import {hashHistory} from 'react-router'
import './desiglist.scss'
import '../../../../public/assets/fonts/iconfont.css'
import Spinner from '../../spinner/spinner.js'


class Desiglist extends Component{
    state = {
       show:true
    }

    goback(){
        history.go(-1);
    }

    ins=(value)=>{

        hashHistory.push({pathname:'/desiginstro',query:{type:value}})
    }
     componentWillMount(){
         var style = this.props.location.query.type;
         var zds = this.props.location.query.zd;
        this.props.des(style,zds).then(res=>{
              setTimeout(()=>{
                this.setState({show:false})
            },1000)
        })
    }
   

    render(){
        return(
            <div>
            <div className="topb"><i className="iconfont icon-fanhui fl" onClick={this.goback.bind(this)}></i>{this.props.location.query.type}</div>
            <ul>
            {this.props.pageProduct.map((item,index)=>{
           
                return(
                    <li className="allli" key={index} onClick={this.ins.bind(this,item.designer_id)}><span className="tx"><img src={item.via} className="fl"/></span>
                    <span className="mz">
                        <span className="zuo">
                            <p className="chan">{item.designer_name}</p>
                            <p className="csr">{item.founder}</p>
                            <p className="sjfg">{item.brand_style}</p>
                        </span>
                    <p className="fr zp"></p>
                    </span>
                    </li>
                )

            })
            }
            </ul>
            <Spinner show={this.state.show}></Spinner>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
   console.log(state.desiglist.loading)
    return {
        pageProduct: state.desiglist.data.data.results,
        loading:state.desiglist.loading
        
    }
}

export default connect(mapStateToProps,designerAction)(Desiglist);