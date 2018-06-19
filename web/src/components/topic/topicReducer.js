import * as topicConstants from './topicConstants'

export default function topicReducer(state={},action){
	let newState = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case (topicConstants.TOPIC_REQUESTING):
			newState.status = 0;
			break;
		case (topicConstants.TOPIC_REQUEST_END):
			newState.status = 1;
			newState.result = action.response.data['results'];
			break;
		case (topicConstants.TOPIC_REQUEST_ERROR):
			newState.status = -1;
			newState.result = action.response.data;
			break;
	}
	return newState;
}
