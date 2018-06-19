import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as desiginstroAction from './desiginstroAction'
import {hashHistory} from 'react-router'
import './desiginstro.scss'
import '../../../../public/assets/fonts/iconfont.css'
import Spinner from '../../spinner/spinner.js'


class Desiginstro extends Component{
    state = {
       show:true
    }

    goproducts=(value)=>{
        hashHistory.push({pathname:'/designerproduct',query:{type:value}});
    }

    componentWillMount(){
        var ins = this.props.location.query.type;
        this.props.desig(ins).then(res=>{
              setTimeout(()=>{
                this.setState({show:false})
            },1000)
        })
    }
    goback(){
        history.go(-1);
    }
  

    goDetail=(value)=>{

        hashHistory.push({pathname:'/detail',query:{id:value}})
    
    }

    render(){
         var gp = this.props.location.query.type;
        var data = this.props.pageProduct;
        if(data.length == 1){
            var style = {display:'none'};
            data.push({results:[]});
        }
        return(
            <div>
             <Spinner show={this.state.show}></Spinner>
                 {data[0].results.map((item,index)=>{

                    return(
                        <div key={index}>
                        <div className="header">
                            <i className="iconfont icon-fanhui fl" onClick={this.goback.bind(this)}>
                           </i>
                           <img src={item.brand_img} />
                        </div>
                        <div className="designerMain">
                        <div className="icon">
                            <img src= {item.via} />
                        </div>
                        <div className="mainHeader">
                        <h2 className="names">{item.designer_name}</h2>
                        <div className="empty"></div>
                        <div className="header">
                        {item.brand_introduce}
                        </div>
                        </div>
                        <div className="mainText">
                        <h2 className="pp">品牌介绍</h2>
                        <div className="main1"><br/>{item.subject}<br/><br/>
                        </div>
                        <img src={item.designer_head} />
                        <div className="main1">
                        <br/>{item.subject_descrition}<br/><br/>
                        </div>
                        <img src={item.subject_imgs} />
                         <div className="main1">
                         <br/><br/>{item.brand_introduce3}<br/><br/>
                        </div>
                        <img src={item.brand_introduce2} />
                         <div className="main1">
                         <br/>{item.brand_introduce4}
                         <br/><br/>
                        </div>
                        <img src={item.subject_img} />
                    </div>
                    </div>
                </div>
                    )
                 })
                }
                         <div className="aboutTa" style = {style}>
                                    <h2 className="ta">TA的作品</h2>
                             <ul className="ul">
                            {
                                data[1].results.slice(0,4).map((item,index) =>{
                                    var desiger = item.brand
                                     var obj = {'desiger':desiger}
                                        localStorage.setItem('desiger',JSON.stringify(obj)); 
                                    return (
                                            <li className="li" key={index} onClick={this.goDetail.bind(this,item.product_id)}>
                                                <img src={item.product_img} />
                                             </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="gd">
                            <span className="more" onClick={this.goproducts.bind(this,gp)}>更多作品</span>
                                <span className="iconfont icon-fanhui">
                                </span>
                        </div>
                    </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    console.log(state.desigins.data)
    return {
        pageProduct: state.desigins.data ? state.desigins.data : [{results:[]},{results:[]}]

    }
}

export default connect(mapStateToProps,desiginstroAction)(Desiginstro);