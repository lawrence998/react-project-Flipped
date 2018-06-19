import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router,hashHistory} from 'react-router'

import 'antd/dist/antd.css';

import registerServiceWorker from './registerServiceWorker';

import route from './router/index'
import store from './store/store'



import "../public/swiper-4.1.0.min.css"
import '../node_modules/antd-mobile/dist/antd-mobile.css';
import "../node_modules/antd/dist/antd.css"
import "../public/font/iconfont.css"
import "../public/base.css"






 ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={route}/>
    </Provider>
    ,
document.getElementById('root'));
registerServiceWorker();

