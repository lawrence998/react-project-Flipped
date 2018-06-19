
import {REG_ERROR,REG_ING,REG_ED} from './regConstant'


export function reg(parmas){
	return{
		types:[REG_ERROR,REG_ING,REG_ED],
		url:'getusername',
        method:'post',
        params:parmas
	}
}

export function regin(params){
    return{
        types:[REG_ERROR,REG_ING,REG_ED],
        url:'regin',
        method:'post',
        params:params
    }
}