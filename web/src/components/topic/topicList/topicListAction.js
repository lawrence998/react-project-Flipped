import {TOPIC_LIST_REQUEST_ERROR,TOPIC_LIST_REQUESTING,TOPIC_LIST_REQUEST_END} from './topicListConstants'

export function getThemeList(data){
	return{
		types:[TOPIC_LIST_REQUEST_ERROR,TOPIC_LIST_REQUESTING,TOPIC_LIST_REQUEST_END],
		url:'getthemelist',
		params:{theme_id:data.theme_id}
	}
}