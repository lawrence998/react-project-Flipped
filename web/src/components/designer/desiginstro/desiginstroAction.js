
import {DESIGINSTRO_REQUESTERROR,DESIGINSTRO_REQUESTING,DESIGINSTRO_REQUESTED} from './desiginstroConstants'


export function desig(parmas){
    
    return{
        types:[DESIGINSTRO_REQUESTERROR,DESIGINSTRO_REQUESTING,DESIGINSTRO_REQUESTED],
        url:'getins',
        params:{page:parmas}
    }
}