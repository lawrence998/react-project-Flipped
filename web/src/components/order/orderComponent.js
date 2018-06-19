import React,{Component} from 'react'
import {connect} from 'react-redux'

import * as orderAction from './orderAction'
import './orderComponent.scss'
import { Icon } from 'antd';
import {Router, Route, hashHistory, browserHistory, Link, IndexRoute} from 'react-router';
import http from '../../http/httpClient'

var Product_qty = 0;
var Totalprice = 0;
class order extends Component{
    state = {
        text:'',
        postage: '',
        product_qty:'',
        totalprice: '',
        brand:'',
        adress:'请添加收货地址'
    }

    componentWillMount(){
        var data = JSON.parse(localStorage.getItem("token"));
        // if(data){
        //     var user_id = data.user_id;
        //     http.post("getPlace",{user_id:user_id,place_id:''}).then( res => {
        //         console.log('orderres:',res.data.data.results[0]);
        //         var results = res.data.data.results[0];
        //         var address = `收货地址:  姓名：${results.username},电话：${results.phone},地址：${results.place + results.detailPlace}`
        //         this.setState({address:address})
        //     })
        // }
        
    }

    componentDidMount(){
        if(localStorage.token){
            var token = localStorage.getItem('token');
            token = JSON.parse(token);
            var user_id = token.user_id;
            var status = 0;
            this.props.getOrder({user_id}).then((res)=>{
                Product_qty = 0;
                Totalprice = 0;
                var results = res.data.data.results;
                console.log(res.data.data.results);
                results.map((item,idx)=>{
                    Product_qty = parseInt(Product_qty) + item.product_qty*1;
                    Totalprice = (parseInt(Totalprice) + (item.product_qty*item.price)).toFixed(2)
                })
                this.setState({postage:results[0].postage});
                this.setState({product_qty:Product_qty});
                this.setState({totalprice:Totalprice});
                this.setState({brand:results.brand});
            });
        }
        

    }

    address(){
        hashHistory.push({pathname:'/place'})
    }

    payCheck(event){
        var target = event.target;
        var checkbox = document.querySelector('.checkbox')
        var checkbox1 = document.querySelector('.checkbox1')
        if(target.classList.contains('checkbox')){
            target.classList.toggle('checked');
            if(checkbox1.classList.contains('checked')){
                checkbox1.classList.remove('checked')
            }
        }
        else if(target.classList.contains('checkbox1')){
            target.classList.toggle('checked');
            if(checkbox.classList.contains('checked')){
                checkbox.classList.remove('checked')
            }
        }
    }

    changeStatus(){
        if(localStorage.token){
            var token = localStorage.getItem('token');
            token = JSON.parse(token);
            var user_id = token.user_id;
            this.props.change({user_id:user_id}).then((res)=>{
                Product_qty = 0;
                Totalprice = 0;
                hashHistory.push({pathname:'/orderList'})
            })
        }
    }

    goback(){
        history.go(-1);

    }

    render(){
        console.log('333333333',this.props.orderProduct);
        return(
            <div className="J_wapOrder">
                <div className="state-show">
                    <div className="order_submit_form">
                        <section className="J_myAddressLists J_home my-address-lists clearfix">
                            <div className="J_noAddress no-address clearfix">
                                <div className="address-tip" onClick={this.address.bind(this)}>
                                    <Icon type="left" onClick={this.goback.bind(this)}/>
                                    <span>{this.state.address}</span>
                                    <Icon type="right-circle" className="new-address-btn"/>
                                </div>
                            </div>
                        </section>
                        <section className="J_productLists J_home product-lists-box">
                            <div className="saler-info clearfix">
                                <i></i>
                                <a>{this.state.brand}</a>
                            </div>
                            <div className="J_productItems product-items">
                                <ul>
                                    <li className="product-item clearfix">
                                        {
                                            this.props.orderProduct.map((item,idx)=>{
                                                return <div className="product-item-body clearfix" key={idx}>
                                                            <div className="item-img">
                                                                <a><img src={item.product_img.split(',')[0]}/></a>
                                                            </div>
                                                            <div className="item-info clearfix">
                                                                <h2 className="product-name">
                                                                    <a className="js-hrefs J_proHref">{item.product_title}</a>
                                                                </h2>
                                                                <p className="product-sku"><span>尺寸:{item.size_type};颜色:{item.color}</span></p>
                                                                <p className="product-price">
                                                                    <span className="price">{item.price}</span>
                                                                    <span className="num">x {item.product_qty}</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                            })
                                            
                                        }
                                        
                                        <div className="item-shop-youfei clearfix">
                                            <span className="fl-l">运费</span>
                                            <div className="fl-r">
                                                <span className="J_youfei">{
                                                    this.state.postage
                                                }</span>
                                            </div>
                                            <div className="fl-r tips">运费问题请直接联系卖家</div>
                                        </div>
                                        <div className="message-box ">
                                            <div className="message-input">
                                                <input className="J_msg msg-input" placeholder="请填写您的留言信息(选填)" type="text"/>
                                            </div>
                                        </div>
                                        <div className="J_amountPrice amount-total-price">
                                            <span className="J_price price">￥{this.state.totalprice}</span>
                                            <span>合计：</span>
                                            <span className="product-num">共<em>{this.state.product_qty}</em>件商品</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="J_couponCheckBox J_home coupon-check-box clearfix">
                            <div className="J_couponBtnBox coupon-title">
                                <span className="text fl-l">优惠券</span>
                                <Icon type="right-circle" className="right-act fl-r"/>
                                <div className="coupon-num fl-r">
                                    <span className="tatalNum">无可用</span>
                                </div>
                            </div>
                        </section>
                        <section className="J_payStyle J_home pay-style-box clearfix">
                            <h2 className="cart-titles">选择支付方式</h2>
                            <div className="paymentMethod payment-method">
                                <ul className="pay-check-body" onClick={this.payCheck.bind(this)}>
                                    <li className="payment-method-item clearfix">
                                        <div className="payment-method-item-img ">
                                            <span>
                                                <img src="http://www.xiangqu.com/build/wap/order/160606/images/pay/icn_zhifubao.png" />
                                            </span>
                                        </div>
                                        <div className="payment-method-item-info">
                                            <div className="font-dark-bold">支付宝</div>
                                            <div className="font-light">推荐支付宝用户使用</div>
                                            <p className="check-status J_img_check checkbox" ></p>
                                        </div>
                                    </li>
                                    <li className="payment-method-item clearfix">
                                        <div className="payment-method-item-img ">
                                            <span>
                                                <img src="http://www.xiangqu.com/build/wap/order/160606/images/pay/icn_creidtcard.png" />
                                            </span>
                                        </div>
                                        <div className="payment-method-item-info">
                                            <div className="font-dark-bold">银行卡支付</div>
                                            <div className="font-light">支持信用卡，储蓄卡支付</div>
                                            <p className="check-status J_img_check checkbox1"></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="J_home cart-total">
                            <div className="sub-box">
                                <div className="price-total">
                                     合计：
                                     <span className="cart-red">
                                        <b id="payFee" className="js-totalFee">
                                            <em>￥{this.state.totalprice}</em>
                                        </b>
                                     </span>
                                     <span className="postage">（含邮费:<b>{this.state.postage}</b>）</span>
                                </div>
                                <div className="cartPay pay-btn" id="payBtn">
                                    <span onClick={this.changeStatus.bind(this)}>确认订单</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div> 
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        orderProduct: state.orderProduct.data || []
    }
}

export default connect(mapStateToProps,orderAction)(order);