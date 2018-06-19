
import {x_REQUEST_ERROR,x_REQUESTING,x_REQUEST_END} from './designerConstants'


export function desiger(parmas){
	
	return{
		types:[x_REQUEST_ERROR,x_REQUESTING,x_REQUEST_END],
		url:'hot',
		params:{page:parmas}
	}
}