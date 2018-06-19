
import {HttpService} from "./http.service"
import {Injectable} from '@angular/core';


@Injectable()

export class DesignerService{


	constructor(private http:HttpService){

	}

	getDesignerConfig(){
		//配置config文件
		// this.http.get("routers/management/designer/designerConfig.txt",{}).then(configData => {
		// 	console.log("configData",configData);

		// 	this.configData = configData;
		// 	let Api  = configData.api;

		// 	this.http.get(Api,{}).then( designerData => {
		//       this.dataSet = designerData || [];
		// 	  		console.log(designerData);
		//   	});
		// });
	}

}