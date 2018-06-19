import {REQUEST_ERROR,REQUESTING,REQUEST_END} from '../../constants/AJAXconstants'
import {GETCART_RQUESTING,GETCART_RQUESTED,GETCART_RQUESTERROR} from '../../constants/getCartConstants'
import {SUB_REQUESTING,SUB_REQUESTED,SUB_ERROR} from '../../constants/subCart'
import {ADD_REQUESTING,ADD_REQUESTED,ADD_ERROR} from '../../constants/addCart'
import {DEL_REQUESTING,DEL_REQUESTED,DEL_ERROR} from '../../constants/delCart'
import {ADDORDER_REQUESTING,ADDORDER_REQUESTED,ADDORDER_ERROR} from '../../constants/addOrder'

export default function cartProduct(state = {},action){
	
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.types ||action.type){
		case (REQUESTING || GETCART_RQUESTING):
			newState.status = 0;
			break;
		case REQUEST_END:
			newState.status = 1;
			newState.data = action.response.data.results;
			break;
		case (REQUEST_ERROR || GETCART_RQUESTERROR):
			newState.status = -1;
			break;
		case GETCART_RQUESTED:
			newState.status = 1;
			newState.data = action.response.data ? action.response.data.results : '';
			break;
		case SUB_REQUESTED:
			newState.status = 1;
			break;
		case ADD_REQUESTED:
			newState.status = 1;
			break;
		case DEL_REQUESTED:
			newState.status = 1;
			break;
		case ADDORDER_REQUESTED:
			newState.status = 1;
			break;
	}
	return newState;
}