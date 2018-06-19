import {ORDER_REQUEST_ERROR,ORDER_REQUESTING,ORDER_REQUESTED} from '../../constants/orderAjaxConstants'
import {GETORDER_RQUESTING,GETORDER_RQUESTED,GETORDER_RQUESTERROR} from '../../constants/getOrderConstants'

export default function orderProduct(state = {},action){
    
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.types ||action.type){
        case ORDER_REQUESTING:
            newState.status = 0;
            break;
        case ORDER_REQUESTED:
            newState.status = 1;
            newState.data = action.response.data.results;
            break;
        case ORDER_REQUEST_ERROR:
            newState.status = -1;
            break;
        case GETORDER_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}