
import {zl_REQUEST_ERROR,zl_REQUESTING,zl_REQUEST_END} from './desiglistConstants'


export function des(parmas,zd){
    
    return{
        types:[zl_REQUEST_ERROR,zl_REQUESTING,zl_REQUEST_END],
        url:'getdesigner',
        params:{page:parmas,zd:zd}
    }
}