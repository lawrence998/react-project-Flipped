import {x_REQUEST_ERROR,x_REQUESTING,x_REQUEST_END} from './designerConstants'


export default function pageProduct(state = {data:{data:{results:[]}}},action){
	
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.types ||action.type){
		case x_REQUESTING:
		newState.loading = 2;
		break;
		case x_REQUEST_END:
		newState.data = action.response;
		newState.loading = 1;
		break;
		case x_REQUEST_ERROR:
		newState.loding = 0;
		break;
	}
	return newState;
}