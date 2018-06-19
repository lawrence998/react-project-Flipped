import {REG_ERROR,REG_ING,REG_ED} from './regConstant'


export function register(state = {},action){
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.types ||action.type){
		case REG_ING:
		newState.loading = 2;
		break;
		case REG_ED:
		newState.data = action.response;
		break;
		case REG_ERROR:
		newState.loding = 0;
		break;
	}
	return newState;
}




export function regProduct(state = {},action){
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.types ||action.type){
		case REG_ING:
		newState.loading = 2;
		break;
		case REG_ED:
		newState.data = action.response;
		break;
		case REG_ERROR:
		newState.loding = 0;
		break;
	}
	return newState;
}