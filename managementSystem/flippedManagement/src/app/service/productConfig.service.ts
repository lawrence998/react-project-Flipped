import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HttpService} from "./http.service"


@Injectable()
export class ProductService{
	lanType: string = 'cn';
	publicDic:Object = {};
	//获取公共字典库
	constructor(private http:HttpService){
		this.http.get('productDicConfig.txt').then((dicRes)=>{
			console.log(dicRes)
//			this.publicDic = dicRes.json();
		})
	}
}
