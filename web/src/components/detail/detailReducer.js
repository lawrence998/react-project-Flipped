import {REQUEST_ERROR,REQUESTING,REQUEST_END} from '../../constants/AJAXconstants'
import {ADDCART_RQUESTING,ADDCART_RQUESTED,ADDCART_RQUESTERROR} from '../../constants/CARTconstants'
import {GETCART_RQUESTING,GETCART_RQUESTED,GETCART_RQUESTERROR} from '../../constants/getCartConstants'

export default function detailProduct(state = {},action){

	var newState = JSON.parse(JSON.stringify(state));
	switch(action.types ||action.type){
		case (REQUESTING || ADDCART_RQUESTING):
			newState.status = 0;
			break;
		case REQUEST_END:
			newState.status = 1;
			newState.data = action.response.data.results[0];
			break;
		case (REQUEST_ERROR || ADDCART_RQUESTERROR):
			newState.status = -1;
			break;
		case ADDCART_RQUESTED:
			newState.status = 1;
			break;
		case GETCART_RQUESTED:
			newState.status = 1;
			break;
	}
	
	return newState;
}