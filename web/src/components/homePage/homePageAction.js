
import {REQUEST_ERRORS,REQUESTINGS,REQUEST_ENDS} from './homeConstants/homeConstants'


export function homePge(_parmas){
	return{
		types:[REQUEST_ERRORS,REQUESTINGS,REQUEST_ENDS],
		url:'getSeries/',
		params:_parmas
	}
}

export function searchData(_params){
	return{
		types:[REQUEST_ERRORS,REQUEST_ENDS,'LZ_END'],
		url:'serachMsg/',
		params:_params
	}
}