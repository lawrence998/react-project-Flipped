import {zl_REQUEST_ERROR,zl_REQUESTING,zl_REQUEST_END} from './desiglistConstants'


export default function pageProduct(state = {data:{data:{results:[]}}},action){
    
    var newState = JSON.parse(JSON.stringify(state));
    
    switch(action.types ||action.type){
        case zl_REQUESTING:
        newState.loading = 2;
        break;
        case zl_REQUEST_END:
        
        newState.data = action.response;
        newState.loading = 1;
      
        break;
        case zl_REQUEST_ERROR:
        newState.loding = 0;
        break;
    }
    return newState;
}