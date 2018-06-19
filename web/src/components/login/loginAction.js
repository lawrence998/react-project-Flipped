
import {LOGIN_ING,LOGIN_ED,LOGIN_ERROR} from './loginConstant'
//ismin的action与login，register合并在一起


export function LoginIn(parmas){
	return{
		types:[LOGIN_ERROR,LOGIN_ING,LOGIN_ED],
		url:'login',
		method:'post',
		params:parmas
	}
}

export function verify(_parmas){
	return{
		types:['verifyError','verifyIng','verify'],
		url:'verfiy',
		method:'post',
		params:_parmas
	}
}

export function loginFilter(_params){
	return{
		types:["LOGINFILTER_ERROR",'LOGINfILTER_ING','LOGINFILTERED'],
		url:'loginfilter',
		method:"post",
		params:_params
	}
}


export function addPlace(params){
	
	return{
		types:["adderr",'adding','added'],
		url:'addPlace',
		method:'post',
		params:params
	}
}