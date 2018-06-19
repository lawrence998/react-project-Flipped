import * as topicListConstants from './topicListConstants'

export default function topicListReducer(state={},action){
	let newState = JSON.parse(JSON.stringify(state));
	
	switch(action.type){
		case (topicListConstants.TOPIC_LIST_REQUESTING):
			newState.status = 0;
			break;
		case (topicListConstants.TOPIC_LIST_REQUEST_END):
			newState.status = 1;
			
			newState.result = action.response.data['results'];
			break;
		case (topicListConstants.TOPIC_LIST_REQUEST_ERROR):
			newState.status = -1;
			newState.result = action.response.data;
			break;
	}
	return newState;
}