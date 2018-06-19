import {REQUEST_ERRORS,REQUESTINGS,REQUEST_ENDS} from './homeConstants/homeConstants'


export function pageProduct(state = {},action){
	
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.types ||action.type){
		case REQUESTINGS:
		newState.loading = 2;
		break;
		case REQUEST_ENDS:
		newState.data = action.response;
		break;
		case REQUEST_ERRORS:
		newState.loding = 0;
		break;
	}
	return newState;
}



export function searchMsg(state = {},action){
	
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.types ||action.type){
		case REQUESTINGS:
		newState.loading = 2;
		break;
		case 'LZ_END':
		newState.data = action.response;
		break;
		case REQUEST_ERRORS:
		newState.loding = 0;
		break;
	}
	return newState;
}