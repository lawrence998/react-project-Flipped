import {Component, OnInit,Input} from '@angular/core';
import { HttpService } from "../../service/http.service";
import {Utils} from '../../utils/utils';
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-product-datagrid',
  templateUrl: './product-datagrid.component.html',
  styleUrls: ['./product-datagrid.component.css']
})
export class ProductDatagridComponent implements OnInit {
	@Input() config:string;
	dataset: Array<any> = null;
	columns:Array<string> = null;
	filterColumns:Array<string> = null;
	hideColumns:Array<string> = null;
	multiple: boolean;
	searchConfig:Object = {};
	filterDataConfig:Object = null;
	pageItems:number;
	pageCount:number;
	rowsCount:number;
	paginationConfig:Object = {};
	apiConfig:string;
	currentTrs:Array<Number> = [];
	currentTrsStatus:boolean;
	privateDic:Object = {};
	firstPage:number = 1;
	lastPage:number;
  pageNum:number = 1;
  page:number = 1;
  pages:Array<number>;
	productID:string;
	productStatus:Object = {};
	productChange:Object = {};
	productStatusTwo:Object = {};
	proidArr:Array<any> = [];
	keyWords:string;
	pageParams:Object = {};
	searchClick:boolean = false;
  constructor(private http:HttpService,private common:CommonService) {}

  ngOnInit() {
  	this.http.get(this.config).then( configRes => {
	  	//需要显示的条件
			let cols = configRes['cols'];
			this.columns = !cols || cols == '*'? [] : cols.split(',');
			
			let filterCols = configRes['filterCols'];
			this.filterColumns = !filterCols? [] : filterCols.split(',');
			this.hideColumns = configRes['hideCols'];
			this.multiple = configRes['multiple'];
			this.searchConfig = configRes['search'] || {}; 
			this.filterDataConfig = configRes['filterData'] || {};
			this.paginationConfig = configRes['pagination'] || {};
			let dic = configRes['dictionary'];
			this.privateDic = dic || {};
			this.apiConfig = configRes['api'];
			this.apiRequest();
			
  	});
  }
	
	
	apiRequest(_page = 1){
		this.pageParams = {};
		if(this.paginationConfig){
			this.pageParams['pageitems'] = this.paginationConfig['pageitems'];
			this.pageParams['page'] = _page;
		}
		var keyword = $('.search-key').val() || '';
		this.pageParams['keyWords'] = keyword;
		//通过配置文件获取api
		this.http.get(this.apiConfig,this.pageParams).then((res)=>{
			/*this.dataset = apiRes['data']['results'][0];
			this.rowsCount = apiRes['data']['results'][1][0]['rowsCount']; 
			this.pageItems = this.paginationConfig['pageitems'];
			this.pageCount = Math.ceil(this.rowsCount/this.pageItems);
			if(this.pageCount <= 6){
				this.pageNum = this.pageCount;
				this.setPage(this.rowsCount, this.pageItems, this.pageNum, this.firstPage);
			}else if(this.pageCount > 6){
				this.pageNum = 6;
				this.setPage(this.rowsCount, this.pageItems, this.pageNum, this.firstPage);
			}*/
			
			if(res['status'] && res['data']['results'][0].length > 0){
				this.dataset = res['data']['results'][0];
				this.productStatusTwo = {"status":res['status']};
				this.pageItems = this.paginationConfig['pageitems'];
				this.rowsCount = res['data']['results'][1][0]['rowsCount'];
				this.pageCount = Math.ceil(this.rowsCount/this.pageItems);
				if(this.pageCount <= 6){
					this.pageNum = this.pageCount;
					this.setPage(this.rowsCount, this.pageItems, this.pageNum, this.firstPage);
				}else if(this.pageCount > 6){
					this.pageNum = 6;
					this.setPage(this.rowsCount, this.pageItems, this.pageNum, this.firstPage);
				}
				if(this.searchClick){
					console.log('是否走这里面看看罗');
					this.page = 1;
					this.lastPage = this.pageCount;
					this.searchClick = false;
				}
				console.log('请求pagespagespagespagespages',this.searchClick,this.pages,this.pageNum,this.page,this.lastPage);
			}else{
				this.productStatusTwo = {"status": false};
			}
		})
	}
	
	getKeys(item){
		return Object.keys(item);
	}
	
	trackByFn(idx){
		return idx;
	}
	//选中tr
	selectTr(_idx,event){
		var target = event.target.tagName;
		if(target.toLowerCase() != 'button'){
			if(this.multiple){
				if(this.currentTrs.indexOf(_idx)>-1){
					this.currentTrs.splice(this.currentTrs.indexOf(_idx),1);
				}else{
					this.currentTrs.push(_idx);
				}
			}else{
				this.currentTrs = [_idx];
			}	
		}
	}
	
	//全选
	selectAll(){
		if(this.currentTrs.length != this.dataset.length){
			this.currentTrs = [];
			for(let i = 0;i<this.dataset.length;i++){
				this.currentTrs.push(this.dataset[i]['product_id']);
			}
		}else{
			this.currentTrs = [];
		}
	}

	//格式化数据
	filterData(_key,_val){
		let _config = this.filterDataConfig[_key];
		if(!_config){
			return _val;
		}else if(_config.type == 'DateFormat'){
			return Utils.dateFormat(new Date(_val),_config.format);
		}else if(_config.type == "Replace"){
			let reg = new RegExp(_config.reg);
			return _val.replace(reg,_config.replaceVal);
		}	
	}
	
	setPage(length, amount, num, first) {
     this.pages = []; //创建分页数组
     var page = Math.ceil(length / amount);
     if (page <= num) {
      for (var i = 1; i <= page; i++) {
         this.pages.push(i);
       }
     }
     if (page > num) {
       for (var j = first; j < first + num; j++) {
         this.pages.push(j);
       }
     }
    return this.pages;
  }
			 
	sub(page) {
   	var amount = this.rowsCount;//数据总条数
    var each = this.pageItems;//每页显示的条数
    this.lastPage = Math.ceil(amount / each);
    if (page >= this.pageNum) {
       this.firstPage = page - Math.floor(this.pageNum / 2);
     } else {
       this.firstPage = 1;
     }
     if (this.firstPage > this.lastPage - this.pageNum) {
       this.firstPage = this.lastPage - this.pageNum + 1;
     }
    this.pages = this.setPage(amount, each, this.pageNum, this.firstPage);
    this.page = page;
    //换页的时候把全选去除
    this.currentTrs = [];
    this.apiRequest(page);
    console.log('点击pagespagespagespagespages',this.searchClick,this.pages,this.pageNum,this.page,this.lastPage);
  }
	getId(event){
		event.preventDefault();
		var target = event.target;
		var product_id = target.parentElement.parentElement.getAttribute('proid');
		this.productID = product_id;
		return product_id;
	}
	//点击修改
	changeProduct(event){
		var pro_id = this.getId(event);
		this.http.get('product_id',{"product_id":pro_id}).then((res)=>{
			this.productChange = res['data']['results'][0];
		})
	}
	
	deleteProduct(id){
		this.http.post('deleteproduct',{"product_id":id}).then((res)=>{
			this.productStatus = {"status":res['status']};
		})
		//删除节点
		var len = this.dataset.length;
		for(let m = 0;m <len ;m++){
			if(this.dataset[m]['product_id'] == id){
				this.dataset.splice(m,1);
				break;
			}
		}
	}
	
	deleteSome(){
		if(this.currentTrs.length <= 0){
			this.currentTrsStatus = true;
		}else{
			let len1 = this.dataset.length;
			let len2 = this.currentTrs.length;
			var cutArr = [];
			for(let a = 0; a < len2; a++){
				for(let b = 0; b< len1; b++){
					if(this.currentTrs[a] == this.dataset[b]['product_id']){
						cutArr.push(b);
					}
				}
			}
			for(let c = 0;c<cutArr.length;c++){
				this.dataset.splice(cutArr[c],1);
			}
			console.log('currentTrscurrentTrscurrentTrs',typeof this.currentTrs)
			this.http.post('deleteproduct_some',{"product_id":this.currentTrs}).then((res)=>{
				this.productStatus = {"status":res['status']};
				console.log('productStatusproductStatusproductStatus',res,this.productStatus)
				if(this.productStatus){
					this.currentTrs = [];
				}
			})
			if(len1 == len2){
      	this.apiRequest();
//    	this.page = 1;
			}
			
		}
	}
	
	searchProduct(){

		this.apiRequest();
		this.searchClick = true;
		console.log('搜索pagespagespagespagespages',this.searchClick,this.pages,this.pageNum,this.page,this.lastPage);
		//		this.keyWords = $('.search-key').val() || '';
		/*if(this.pageCount <= 6){
			this.pageNum = this.pageCount;
			this.setPage(this.rowsCount, this.pageItems, this.pageNum, this.firstPage);
		}else if(this.pageCount > 6){
			this.pageNum = 6;
			this.setPage(this.rowsCount, this.pageItems, this.pageNum, this.firstPage);
		}*/
//		this.pageParams['keyWords'] = this.keyWords;
		
		/*this.http.get(this.apiConfig,this.pageParams).then((res)=>{
			if(res['status'] && res['data']['results'][0].length > 0){
				this.dataset = res['data']['results'][0];
				this.productStatusTwo = {"status":res['status']};
				this.rowsCount = res['data']['results'][1][0]['rowsCount'];
				this.pageCount = Math.ceil(this.rowsCount/this.pageItems);
				if(this.pageCount <= 6){
					this.pageNum = this.pageCount;
					this.setPage(this.rowsCount, this.pageItems, this.pageNum, this.firstPage);
				}else if(this.pageCount > 6){
					this.pageNum = 6;
					this.setPage(this.rowsCount, this.pageItems, this.pageNum, this.firstPage);
				}
			}else{
				this.productStatusTwo = {"status": false};
			}
		})*/
	}
	
}
