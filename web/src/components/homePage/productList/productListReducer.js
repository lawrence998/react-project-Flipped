import * as ajaxConstants from '../../../constants/AJAXconstants'
import * as prolistConstants from '../../components/productList/productListConstants'

export default function prolistReducer(state={},action){
	let newState = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case (ajaxConstants.REQUESTING || prolistConstants.TYPE_REQUESTINGX):
			newState.status = 0;
			break;
		case (ajaxConstants.REQUEST_END):
			newState.status = 1;
			newState.result = action.response.data['results'];
			break;
		case (prolistConstants.TYPE_REQUESTEDX ):
			newState.status = 1;
			newState.minitype = action.response.data['results'];
			break;
		case (ajaxConstants.REQUEST_ERROR || prolistConstants.TYPE_REQUESTERRORX):
			newState.status = -1;
			newState.result = action.response.data;
			break;
		case prolistConstants.TYPE_REQUESTEDX:
			newState.status = 1;
			break;
	}
	return newState;
}
