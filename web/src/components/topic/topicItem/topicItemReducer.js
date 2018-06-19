import * as topicItemConstants from './topicItemConstants'

export default function topicItemReducer(state={},action){
	let newState = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case (topicItemConstants.TOPIC_ITEM_REQUESTING):
			newState.status = 0;
			break;
		case (topicItemConstants.TOPIC_ITEM_REQUEST_END):
			newState.status = 1;
			newState.result = action.response.data['results'];
			break;
		case (topicItemConstants.TOPIC_ITEM_REQUEST_ERROR):
			newState.status = -1;
			newState.result = action.response.data;
			break;
	}
	return newState;
}