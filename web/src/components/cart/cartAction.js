import {REQUEST_ERROR,REQUESTING,REQUEST_END} from '../../constants/AJAXconstants'
import {GETCART_RQUESTING,GETCART_RQUESTED,GETCART_RQUESTERROR} from '../../constants/getCartConstants'
import {SUB_REQUESTING,SUB_REQUESTED,SUB_ERROR} from '../../constants/subCart'
import {ADD_REQUESTING,ADD_REQUESTED,ADD_ERROR} from '../../constants/addCart'
import {DEL_REQUESTING,DEL_REQUESTED,DEL_ERROR} from '../../constants/delCart'
import {ADDORDER_REQUESTING,ADDORDER_REQUESTED,ADDORDER_ERROR} from '../../constants/addOrder'



export function homePge(parmas){
	
	return{
		types:[REQUEST_ERROR,REQUESTING,REQUEST_END],
		url:'product/',
		params:{page:parmas.page,qty:parmas.qty}
	}
}

export function getCart(parmas){
    return{
        types:[GETCART_RQUESTERROR,GETCART_RQUESTING,GETCART_RQUESTED],
        url:'getCart/',
        params:{user_id:parmas.user_id}
    }
}

export function sub(parmas){
    return{
        types:[SUB_ERROR,SUB_REQUESTING,SUB_REQUESTED],
        url:'subCart/',
        method:'post',
        params:{cart_id:parmas.cart_id,p_qty:parmas.p_qty}
    }
}

export function add(parmas){
    return{
        types:[ADD_ERROR,ADD_REQUESTING,ADD_REQUESTED],
        url:'plusCart/',
        method:'post',
        params:{cart_id:parmas.cart_id,p_qty:parmas.p_qty}
    }
}

export function del(parmas){
    return{
        types:[DEL_ERROR,DEL_REQUESTING,DEL_REQUESTED],
        url:'delCart/',
        method:'post',
        params:{cart_id:parmas.cart_id}
    }
}

export function addOrder(parmas){
    return{
        types:[ADDORDER_ERROR,ADDORDER_REQUESTING,ADDORDER_REQUESTED],
        url:'addOrder/',
        method:'post',
        params:{arr_item:parmas.arr_item}
    }
}

