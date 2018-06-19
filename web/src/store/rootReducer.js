import {combineReducers} from 'redux'
import {pageProduct,searchMsg}from '../components/homePage/homePageReducer'
import topic from '../components/topic/topicReducer'
import topicItem from '../components/topic/topicItem/topicItemReducer'
import topicList from '../components/topic/topicList/topicListReducer'
import productList from '../components/productList/productListReducer'
import detailProduct from '../components/detail/detailReducer'

import orderProduct from '../components/order/orderReducer'
import cartProduct from '../components/cart/cartReducer'


import {Loign,verify,loginFilter,addPlace} from '../components/login/loginReducer'

import desiglist from '../components/designer/desiglist/desiglistReducer'
import desigins from '../components/designer/desiginstro/desiginstroReducer'
import designerproduct from '../components/designer/desigerproduct/designerproductReducer'
import desiger from '../components/designer/designerReducer'
import {register,regProduct} from '../components/register/regReducer'

export default combineReducers({
	pageProduct,
	searchMsg,
    detailProduct,
    topic,
    orderProduct,
    topicItem,
    topicList,
	productList,
    Loign,
    verify,
    desiglist,
    desigins,
    designerproduct,
    desiger,
    cartProduct,
    register,
    loginFilter,
    addPlace,
    regProduct
})


