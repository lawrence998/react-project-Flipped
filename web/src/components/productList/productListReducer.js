import * as prolistConstants from './productListConstants'

export default function prolistReducer(state={},action){
	let newState = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case (prolistConstants.PRO_LIST_REQUESTING || prolistConstants.TYPE_REQUESTING):
			newState.status = 0;
			break;
		case (prolistConstants.PRO_LIST_REQUESTED):
		console.log('1111111111',action.response)
			newState.status = 1;
			newState.result = action.response;
			break;
		case (prolistConstants.TYPE_REQUESTED ):
			newState.status = 1;
			newState.minitype = action.response.data['results'];
			break;
		case (prolistConstants.PRO_LIST_REQUESTERROR || prolistConstants.TYPE_REQUESTERROR):
			newState.status = -1;
			newState.result = action.response;
			break;
		case prolistConstants.TYPE_REQUESTED:
			newState.status = 1;
			break;
	}
	return newState;
}
