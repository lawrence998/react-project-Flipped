
import {ORDER_REQUEST_ERROR,ORDER_REQUESTING,ORDER_REQUESTED} from '../../constants/orderAjaxConstants'


export function homePge(parmas){
    
    return{
        types:[ORDER_REQUEST_ERROR,ORDER_REQUESTING,ORDER_REQUESTED],
        url:'product/',
        params:{page:parmas.page,qty:parmas.qty}
    }
}