import {TOPIC_ITEM_REQUEST_ERROR,TOPIC_ITEM_REQUESTING,TOPIC_ITEM_REQUEST_END} from './topicItemConstants'

export function getThemeItem(data){
	return{
		types:[TOPIC_ITEM_REQUEST_ERROR,TOPIC_ITEM_REQUESTING,TOPIC_ITEM_REQUEST_END],
		url:'getthemeitem',
		params:{theme_id:data.theme_id}
	}
}