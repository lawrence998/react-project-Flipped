import {DESIGINSTRO_REQUESTERROR,DESIGINSTRO_REQUESTING,DESIGINSTRO_REQUESTED} from './desiginstroConstants'



export default function pageProduct(state = {},action){
    
    var newState = JSON.parse(JSON.stringify(state));
    
    switch(action.types ||action.type){
        case DESIGINSTRO_REQUESTING:
        newState.loading = 2;
        break;
        case DESIGINSTRO_REQUESTED:
        newState.data = action.response;
        break;
        case DESIGINSTRO_REQUESTERROR:
        newState.loding = 0;
        break;
    }
    return newState;
}