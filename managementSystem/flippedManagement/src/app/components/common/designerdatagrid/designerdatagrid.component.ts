import { Component, OnInit ,Input,TemplateRef} from '@angular/core';
import {HttpService} from "../../../service/http.service"
import {CommonService} from "../../../service/common.service"

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
 


@Component({
  selector: 'designerdatagrid',
  templateUrl: './designerdatagrid.component.html',
  styleUrls: ['./designerdatagrid.component.css']
})


export class DesignerdatagridComponent implements OnInit {
	dictionaryPrivate:object = {};
	designerSelect:Array<any> = [];
	setWord:string = "选择";
	setKey:string = "";
	searchWd:string;
	modalRef: BsModalRef;
	configData:Object = {};
	dataSet:Array<any> = [];
	dataSetFilter:Array<String> = [];
	dataSetConfigs:Array<String> = [];
	pageNum:number = 0;
	trQty:number = 0;
	currlentNum:number;
	Api:string = "";
	showBoxFilter:Array<any> = [];
	showBoxObj:object = null;
	showBoxPrivate:Array<string>;
	delMultiDesigner:Array<any> = [];
	@Input() txtConfigApi:string;


  	constructor(private http:HttpService,private modalService: BsModalService, private common:CommonService) { }

  	ngOnInit() {

		this.http.get("routers/management/designer/"+this.txtConfigApi+".txt",{}).then(configData => {
			this.configData = configData;

			//从配置文件获取请求后台数据库的api,通过api获取对应的数据
			let Api  = configData["api"];
			this.Api = Api;

			//获取配置文件需要过滤的data数据
			this.dataSetFilter = configData["dataSetFilter"] ? configData["dataSetFilter"] : [];

			//获取配置文件，默认的配置数据
			let dataSetConfig = configData["dataSetConfig"];
			this.dataSetConfigs = dataSetConfig == "*" || !dataSetConfig ? [] : configData["dataSetConfig"];

			//配置文件，每一页显示的数量,用于请求后台数据
			let tableTrNum = configData["tableTrNum"];
			this.trQty = tableTrNum;

			//showBoxFilter
			this.showBoxFilter = configData["showBoxFilter"] ? configData["showBoxFilter"] : [];

			//configData["showBoxPrivate"]
			this.showBoxPrivate = configData["showBoxPrivate"] ? configData["showBoxPrivate"] :[];

			//私有字典
			this.dictionaryPrivate = configData["dictionaryPrivate"] ? configData["dictionaryPrivate"] :[];

			//下拉选择
			this.designerSelect = configData["designerSelect"] ? configData["designerSelect"] : [];
			if(Api){
				this.http.get(Api,{}).then( designerData => {
			      this.dataSet = designerData["results"] ? designerData["results"][0] : [];
			      let total = designerData["results"][1];
			      let count = designerData["results"] ? total[0].count : [];
			      this.pageNum = Math.ceil(count/this.trQty);
			     
			  	});
			}
		});
  	}

  	 selectWord(key){
  		//下拉菜单选择
  		this.setKey = key;
  		this.setWord = this.dictionaryPrivate[this.common["lanType"]][key];
  	 }

  	 searchMsg(params){
  	 	let type = this.setKey;
  	 	let seMsg = this.searchWd;
  	 	this.http.get(this.configData["searchDesignerApi"],{type:type,seMsg:seMsg}).then(searchDatas => {
  	 		if(searchDatas["results"]){
  	 			this.dataSet = searchDatas["results"];
  	 		} else {
  	 			alert(searchDatas["error"]);
  	 		}
	 	})

  	 }

	 openModal(template: TemplateRef<any>) {
	  	// 弹窗
	    this.modalRef = this.modalService.show(template);
	 }

	 showBox(item){
	 	//获取当前tr的数据,用于弹窗数据的展示
		this.showBoxObj = item;

	 }

	 selectTrTotal(){
	 	//多选-----
	 	if(this.delMultiDesigner.length !== this.dataSet.length){
	 		this.delMultiDesigner = [];
	 		for(var i= 0 ;i<this.dataSet.length;i++){
	 			this.delMultiDesigner.push(this.dataSet[i]["designer_id"]);
	 		}
	 	} else {
	 		this.delMultiDesigner = [];
	 	}
	 }

	 getDelObjectId(colTr){
	 	// 批量删除数组添加id
	 	if(this.delMultiDesigner.indexOf(colTr.designer_id) == -1){
		 	this.delMultiDesigner.push(colTr.designer_id);
	 	} else {
	 		this.delMultiDesigner.splice(this.delMultiDesigner.indexOf(colTr.designer_id),1);
	 	}
	 }

	 delMulti(){
	 	// 批量删除
	 	var currlentNum = this.currlentNum;
	 	var qty = this.trQty;

	 	var delAttr = this.delMultiDesigner;
	 	let arr = JSON.parse(JSON.stringify(delAttr));
	 	this.http.get(this.configData["delMultiDesignerApi"],{delMuti:delAttr,pageNum:currlentNum,qty:qty}).then(afterDeleRes => {
			  if (afterDeleRes["results"]){
			  	console.log(afterDeleRes,1111111111111111111111111111111111111);
				  this.dataSet = afterDeleRes['results'] ? afterDeleRes['results'] : [];
	 			  this.delMultiDesigner = [];
			  } else {
			  	console.log(afterDeleRes["err"]);
			  }
	 	})
	 }



	 saveChange(){
	 	//修改designer数据库数据
	 	this.http.get(this.configData["updatedesignerApi"],this.showBoxObj).then(afterUpadte => {
	 		if(afterUpadte["affectedRows"] >= 1 && afterUpadte["changedRows"] !== 0){
	 			this.modalRef.hide();
	 		} else {
	 			alert("修改失败");
	 			this.modalRef.hide();
	 		}
	 	})
	 }

	 delDesigner(designerId){
	 	//单个删除
	 	var id = designerId.designer_id;
	 	let index = -1;
	 	this.dataSet.map((item,idx) => {
	 		if(item["designer_id"] == item["designer_id"]){
	 			index = idx;
	 		}
	 	})

	 	this.http.get(this.configData["delDesignerApi"],{designerId:id}).then(afterDele => {
	 		if(afterDele["affectedRows"] == 1){
	 			this.dataSet.splice(this.dataSet.indexOf(designerId),1);
	 		}
	 	})

	 }


  	clickPageNum(Num){
  		//点击页码请求后台数据函数
  		let qty = this.trQty;
  		this.http.get(this.Api,{pageNum:Num,qty:qty}).then( designerData => {
  			this.dataSet = designerData["results"] ? designerData["results"][0] : [];
	        let total = designerData["results"][1];
		    let count = designerData["results"] ? total[0].count : [];
		    this.pageNum = Math.ceil(count/this.trQty);
	  	});
  	}

  	getKeys(item){
  		return Object.keys(item);
  	}

  	getPageArray(params){
  		let num = [];
  		for(var i = 1 ;i<=params;i++){
  			num.push(i);
  		}
  		return num;
  	}

  	getNumber(numbers){
  		//点击页码，请求数据
  		this.currlentNum = numbers;
  		this.clickPageNum(numbers);
  	}

  	prevOrNEXT(nums,nextAction){
  		// 点击页码左右键，请求数据
  		if(nextAction == "prev"){
  			if(nums <= 1){
  				let numx = JSON.parse(JSON.stringify(this.pageNum));
  				this.currlentNum = numx;
  				this.clickPageNum(numx);
  			} else {
  				let numx = nums-1;
  				this.currlentNum = numx;
  				this.clickPageNum(numx);
  			}
  		}

  		if(nextAction == "next"){
  			if(nums >= this.pageNum){
  				let number = 1;
  				this.currlentNum = 1;
  				this.clickPageNum(number);
  			} else {
  				let number = nums+1;
  				this.currlentNum = JSON.parse(JSON.stringify(number));
  				this.clickPageNum(number);
  			}
  		}
  	}
}
