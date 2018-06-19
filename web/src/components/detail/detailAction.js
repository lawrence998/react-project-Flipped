
import {REQUEST_ERROR,REQUESTING,REQUEST_END} from '../../constants/AJAXconstants'
import {ADDCART_RQUESTING,ADDCART_RQUESTED,ADDCART_RQUESTERROR} from '../../constants/CARTconstants'
import {GETCART_RQUESTING,GETCART_RQUESTED,GETCART_RQUESTERROR} from '../../constants/getCartConstants'

export function homePge(params){
	
	return{
		types:[REQUEST_ERROR,REQUESTING,REQUEST_END],
		url:'product/',
		params:{page:params.page,qty:params.qty}
	}
}

export function detail(params){
    
    return{
        types:[REQUEST_ERROR,REQUESTING,REQUEST_END],
        url:'detail/',
        params:{id:params.id}
    }
}

export function addCart(params){
    
    return{
        types:[ADDCART_RQUESTING,ADDCART_RQUESTED,ADDCART_RQUESTERROR],
        method:'post',
        url:'addCart/',
        params:{size:params.size,color:params.color,product_id:params.product_id,product_qty:params.product_qty,user_id:params.user_id}
    }
}

export function getCart(parmas){
    return{
        types:[GETCART_RQUESTERROR,GETCART_RQUESTING,GETCART_RQUESTED],
        url:'getCart/',
        params:{user_id:parmas.user_id}
    }
}