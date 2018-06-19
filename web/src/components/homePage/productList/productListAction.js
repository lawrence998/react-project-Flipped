import {REQUEST_ERROR,REQUESTING,REQUEST_END} from '../../../constants/AJAXconstants'
import {TYPE_REQUESTINGX,TYPE_REQUESTEDX,TYPE_REQUESTERRORX} from './productListConstants'


export function getGoods(parmas){
	console.log(parmas);
	return{
		types:[REQUEST_ERROR,REQUESTING,REQUEST_END],
		url:'productlist',
		params:{type:parmas.type,page:parmas.page,limit:parmas.limit}
	}
}

export function getType(parmas){
	console.log(parmas);
	return {
		types: [TYPE_REQUESTERRORX,TYPE_REQUESTINGX,TYPE_REQUESTEDX],
		url:'gettype',
		params: {type:parmas.type}
	}
}



