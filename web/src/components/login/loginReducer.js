
import {LOGIN_ING,LOGIN_ED,LOGIN_ERROR} from './loginConstant'


export function Loign(state = {},action){


	var newState = JSON.parse(JSON.stringify(state));
	switch(action.types || action.type){
		case LOGIN_ED:
		newState.LoginIn = '1';
		break;
		case LOGIN_ING:
		newState.LoginIn = "2";
		break;
		case LOGIN_ERROR:
		newState.LoginIn = "3";
		break;
	}
	return newState;
}


export function verify(state = {},action){
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.type || action.types){
		case 'verify':
		newState.data = 'this is ok';
		break;
		case 'verifyError':
		newState.data = "this is error"
		break;
	}

   return newState;
}




export function loginFilter(state = {},action){
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.type || action.types){
		case 'LOGINfILTER_ING':
		newState.data = '1';
		break;
		case 'LOGINFILTERED':
		newState.data = action.response;
		break;
		case 'LOGINFILTER_ERROR':
		newState.data = "0"
		break;
	}
	return newState;
}




export function addPlace(state = {},action){
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.type || action.types){
		case 'adding':
		newState.data = 'this is ok';
		break;
		case 'added':
		newState.data = action.response;
		break;
		case 'verifyError':
		newState.data = "this is error"
		break;
	}
	return newState;
}