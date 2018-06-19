
import {ORDER_REQUEST_ERROR,ORDER_REQUESTING,ORDER_REQUESTED} from '../../constants/orderAjaxConstants'
import {GETORDER_RQUESTING,GETORDER_RQUESTED,GETORDER_RQUESTERROR} from '../../constants/getOrderConstants'

export function getOrder(params){
    
    return{
        types:[ORDER_REQUEST_ERROR,ORDER_REQUESTING,ORDER_REQUESTED],
        url:'getOrder',
        params:{user_id:params.user_id}
    }
}

export function change(parmas){
    return{
        types:[GETORDER_RQUESTERROR,GETORDER_RQUESTING,GETORDER_RQUESTED],
        url:'changeOrder/',
        method:'post',
        params:{user_id:parmas.user_id}
    }
}
// export function getOrder(parmas){
    
//     return{
//         types:[ORDER_REQUEST_ERROR,ORDER_REQUESTING,ORDER_REQUESTED],
//         url:'product/',
//         params:{page:parmas.page,qty:parmas.qty}
//     }
// }