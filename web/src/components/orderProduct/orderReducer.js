import {ORDER_REQUEST_ERROR,ORDER_REQUESTING,ORDER_REQUESTED} from '../../constants/orderAjaxConstants'


export default function orderProduct(state = {},action){
    
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.types ||action.type){
        case ORDER_REQUESTING:
        newState.loading = 2;
        break;
        case ORDER_REQUESTED:
        newState.data = action.response;
        break;
        case ORDER_REQUEST_ERROR:
        newState.loding = 0;
        break;
    }
    return newState;
}