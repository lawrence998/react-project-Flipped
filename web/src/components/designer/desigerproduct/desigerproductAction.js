import {l_REQUEST_ERROR,l_REQUESTING,l_REQUEST_END} from './designerproductConstants'

export function getproducts(parmas){
    
    return{
        types:[l_REQUEST_ERROR,l_REQUESTING,l_REQUEST_END],
        url:'getproducts/',
        params:{page:parmas}
    }
}