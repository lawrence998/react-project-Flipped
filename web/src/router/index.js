import React from 'react'
import {Route,IndexRoute} from 'react-router'

import App from '../components/App/App'
import HomePage from '../components/homePage/homePageComponent'

import TopicItem from '../components/topic/topicItem/topicItemComponent'
import TopicList from '../components/topic/topicList/topicListComponent'

import SearchPage from '../components/homePage/searchPage/searchPage'
import ProductListX from '../components/homePage/productList/productListComponent'
import Topic from '../components/Topic/topicComponent'
import Designer from '../components/designer/designerComponent'
import Detail from '../components/detail/detailComponent'
import Cart from '../components/cart/cartComponent'
import Login from '../components/login/loginComponent'


import OrderComponent from '../components/order/orderComponent'

import Register from '../components/register/regComponent'
import Place from '../components/isMine/place/place'
import AddPlace from '../components/isMine/place/addPlace'

import IsMine from '../components/isMine/isMineComponent'

import ProductList from '../components/productList/productListComponent'
import Desiglist from '../components/designer/desiglist/desiglistComponent'
import Desiginstro from '../components/designer/desiginstro/desiginstroComponent'

import Order from '../components/orderProduct/orderCartComponent'
import Setting from '../components/setting/settingComponent'
import SetNextPage from '../components/setting/setNextPage/setNextPage'



import navigation from '../components/navigation/navigationComponent'
import Designerproduct from '../components/designer/desigerproduct/desigerproductComponent'

 const route = (
			<Route path="/" component = {App}>
				<IndexRoute component = {Topic}/>
				<Route path = "navigation" component = {navigation}/>
				<Route path = "homepage" component = {HomePage}/>
				<Route path = "searchPage(/:params)" component = {SearchPage}>
					<Route path = "productListx(/:type)" component = {ProductListX}/>
				</Route>

				<Route path = "topic(/:idx)" component = {Topic}/>
				<Route path = "topicItem(/:theme_id)" component = {TopicItem}/>
				<Route path = "topicList(/:theme_id)" component = {TopicList}/>
				<Route path = "designer" component = {Designer}/>
				<Route path="desiglist" component = {Desiglist}/>
				<Route path="desiginstro" component = {Desiginstro}/>
				<Route path="designerproduct" component = {Designerproduct} />
				<Route path = "detail(/:id)" component = {Detail}/>
				<Route path = "cart" component = {Cart}/>
				<Route path = "login" component = {Login}/>
				<Route path = "register" component = {Register}/>

				<Route path = "orderList" component = {Order}/>
				<Route path = "productList(/:product_id)" component = {ProductList}/>
				<Route path = "ismine" component = {IsMine}/>
				<Route path = "place" component = {Place}/>
				<Route path = "addplace" component = {AddPlace}/>
				<Route path = "order" component = {OrderComponent}/>
				<Route path = "setting(/:usrname)" component = {Setting}/>
				<Route path = "setnextpage(/:routername)" component = {SetNextPage}/>
				<Route path = "productList(/:type)" component = {ProductList}/>
			</Route>
			)

export default route;