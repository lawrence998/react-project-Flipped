import {l_REQUEST_ERROR,l_REQUESTING,l_REQUEST_END} from './designerproductConstants'


export default function pageProduct(state = {data:{data:{results:[]}}},action){
    
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.types ||action.type){
        case l_REQUESTING:
        newState.loading = 2;
        break;
        case l_REQUEST_END:
        newState.data = action.response;
        break;
        case l_REQUEST_ERROR:
        newState.loding = 0;
        break;
    }
    return newState;
}