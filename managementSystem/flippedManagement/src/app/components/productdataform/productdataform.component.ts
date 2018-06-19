import {Component, OnInit,Input} from '@angular/core';
import { HttpService } from "../../service/http.service";
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-productdataform',
  templateUrl: './productdataform.component.html',
  styleUrls: ['./productdataform.component.css']
})
export class ProductdataformComponent implements OnInit {
	@Input() api:string;
	privateDic:Object = {};
	colsConfig: Array<string> = [];
	colsAttributes:Object = {};
	selecApiDataSet:Object = {};
  constructor(private http:HttpService,private common:CommonService) {}

  ngOnInit() {
  	this.http.get(this.api).then((configRes)=>{
  		this.colsConfig = configRes['cols'].split(',');
  		this.colsAttributes = configRes['colsAttributes'] || {};
  	
  		/*for(let item in this.colsAttributes){
  			if(this.colsAttributes[item]['type'] == 'select-api'){
  				let _api = this.colsAttributes[item]['api'];
  				this.http.get(_api).then((res)=>{
  					console.log(res['data']['results'][0])
  					this.selecApiDataSet[item] = res['data']['results'][0];
  				})
  			}
  		}*/
  	})
  }

}
