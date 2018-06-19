
import http from '../http/httpClient'
import {REQUEST_ERROR,REQUESTING,REQUEST_END} from '../constants/AJAXconstants'
import {ADDCART_RQUESTING,ADDCART_RQUESTERROR,AFTER_REQUEST} from '../constants/CARTconstants'
import {TYPE_REQUESTING,TYPE_REQUESTED,TYPE_REQUESTERROR} from '../components/productList/productListConstants'

export default function ajaxMiddleware(api){
	return function(dispatch){
		return function(action){
			const {type,types,url,params,method = 'get'} = action;
			if(!url){
				return dispatch(action);
			}

 			let defaultConstants = [REQUEST_ERROR,REQUESTING,REQUEST_END]
 			let [requesterror,requesting,requested] = types ? types : defaultConstants;
			api.dispatch({type:requesting});
			
			if(url){
				return new Promise((resolve,reject) => {
					console.log(method,url,params)
					http[method](url,params).then(res => {
						console.log(1);
						api.dispatch({type:requested,response:res.data});
						resolve(res);

					}).catch(error => {
						api.dispatch({type:requesterror,err:error});
						reject(error);
					})
					
				})
			}
		}
	}
}

