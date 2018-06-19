import {TOPIC_REQUEST_ERROR,TOPIC_REQUESTING,TOPIC_REQUEST_END} from './topicConstants'

export function getTheme(data){
	return{
		types:[TOPIC_REQUEST_ERROR,TOPIC_REQUESTING,TOPIC_REQUEST_END],
		url:'gettheme',
		params:{theme_hot:data.theme_hot}
	}
}