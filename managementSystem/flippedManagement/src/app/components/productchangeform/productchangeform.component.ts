import {Component, OnInit,Input} from '@angular/core';
import { HttpService } from "../../service/http.service";
import {CommonService} from '../../service/common.service';

@Component({
  selector: 'app-productchangeform',
  templateUrl: './productchangeform.component.html',
  styleUrls: ['./productchangeform.component.css']
})
export class ProductchangeformComponent implements OnInit {
	@Input() api:string;
	@Input() handlePro:string;
	@Input() productChange:Object = {};
	addproductStatus:Object = {};
	msgShow:boolean = false;
	privateDic:Object = {};
	colsConfig: Array<string> = [];
	colsAttributes:Object = {};
	proAttributes:Array<any> = [];
	selecApiDataSet:Object = {};
	protype:string = "女人";
  constructor(private http:HttpService, private common:CommonService) {}

  ngOnInit() {
		/*this.http.get(this.api).then((configRes)=>{
			this.colsConfig = configRes['productFormCols'].split(',');
  		this.colsAttributes = configRes['productFormColsAttributes'] || {};
  		this.proAttributes = this.colsAttributes['product_type']['data'] || [];
		})*/
  }
  
  getKeys(item){
		return Object.keys(item);
	}
	
	trackByFn(idx){
		return idx;
	}
	
	productType(event){
		this.protype = event.target.value;
		this.http.get("producttype",{"type":this.protype}).then((res)=>{
			this.proAttributes = res['data']['results'];
		})
	}
	
	
	onSubmit(proform){
		var proFile = $('#product_img');
		var proImg = proFile.val();
		proform['product_img'] = proImg;
		if(this.handlePro == 'add'){
//			proform['product_img'] = this.productChange['product_img'];
			this.http.post('addproduct',proform).then((res)=>{
				this.addproductStatus = {"status":res['status']};
			})
		}else if(this.handlePro == 'change'){
			proform['product_id'] = this.productChange['product_id'];
			proform['product_img'] = proImg;
			this.http.post('updateproduct_pro',proform).then((res)=>{
				this.addproductStatus = {"status":res['status']};
			})
		}
 	}
	emptyForm(){
		if(this.addproductStatus&&this.handlePro == 'add'){
			var addform = $('form.add-form');
			
			addform.find('input,select,textarea').each(function() {
        $(this).val('');
     });
     addform.find('input[type=checkbox]').each(function(){
     	$(this).prop('checked',false);
     })
		}
	}
	
}
