import React from 'react'
import middleWare from './ajaxMiddleware'
import rootReducer from './rootReducer'
import {createStore,applyMiddleware} from 'redux'

const store = createStore(rootReducer, applyMiddleware(middleWare));

export default store;
