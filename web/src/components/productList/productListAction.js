import {TYPE_REQUESTING,TYPE_REQUESTED,TYPE_REQUESTERROR,PRO_LIST_REQUESTING,PRO_LIST_REQUESTED,PRO_LIST_REQUESTERROR} from './productListConstants'

export function getGoods(parmas){
	return{
		types:[PRO_LIST_REQUESTERROR,PRO_LIST_REQUESTING,PRO_LIST_REQUESTED],
		url:'productlist',
		params:{
			type:parmas.type,
			page:parmas.page,
			series: parmas.series,
			limit:parmas.limit,
			datatime: parmas.datatime,
			popurlar: parmas.popurlar,
			product_type: parmas.product_type,
			return_goods: parmas.return_goods,
			discount: parmas.discount,
			delivery: parmas.delivery,
			price_section: parmas.price_section,
		}
	}
}

export function getType(parmas){
	return {
		types: [TYPE_REQUESTERROR,TYPE_REQUESTING,TYPE_REQUESTED],
		url:'gettype',
		params: {type:parmas.type}
	}
}




