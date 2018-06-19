import { Component, OnInit, Input } from '@angular/core'
import {HttpService} from '../../service/http.service'
import {CommonService} from '../../service/common.service'


@Component({
  selector: 'order-datagrid',
  templateUrl: './order-datagrid.component.html',
  styleUrls: ['./order-datagrid.component.css']
})

export class OrderDatagridComponent implements OnInit {
    @Input() config: string;

    dataset: Array<any> = null;
    columns: Array<string> = null;
    filterColumns: Array<string> = null;
    multiple: boolean;
    currentTrIndex: Number;
    currentTrIndexs: Array<any> = [];
    filterDataConfig: Object = {};
    pageCount: number = 0;
    paginationConfig: Object;
    apiConfig: string;
    searchConfig: Object = {};
    privateDic: Object; //私有字典
    del_s: string;
    del_m: string;
    addData: string;
    addorder: string;
    orderArr: Array<number> = [];
    params: Object = {};
    remove: Array<number> = [];

    p_display: string;
    m_display: string;
    p_top: number;
    p_left: number;
    m_width: number;
    m_height: number;
    a_display: string;
    add_display: string;


    constructor(private http: HttpService, private common: CommonService) { 

    }

    ngOnInit() {    

        this.http.get(this.config,{}).then((configRes)=>{
            console.log(configRes);
            let cols = configRes['cols'];
            this.columns = !cols || cols == "*" ? [] : cols.split(',');

            let filterCols = configRes['filterCols'];
            this.filterColumns = !filterCols ? [] : filterCols.split(',');

            let dic = configRes['dictionary'];
            this.privateDic = dic ? dic : {};
            
            this.multiple = configRes['multiple'];

            this.filterDataConfig = configRes['filterData'] || {};

            this.paginationConfig = configRes['pagination'] || {};

            this.apiConfig = configRes['apiOpt']['orderList'];

            this.del_s = configRes['apiOpt']['del_s'];

            this.del_m = configRes['apiOpt']['del_m'];

            this.addorder = configRes['apiOpt']['add'];

            this.apiRequest();

            this.Masked();
        })
    }

    // @HostListener('window:resize',['$event'])
    // onResize(event){
    //     this.Masked();
    //     this.centShow();
    // }

    //封一个登录框居中函数
    centShow(){
        var Popup = document.querySelector('.Popup');
        let top = 140;
        let left = 500;
        this.p_top = top;
        this.p_left = left;
    }

    Masked(){
        this.m_height = 560;
        this.m_width = 1100;
    }

    del(e){
         e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.classList.contains('P_del')){
            this.m_display = 'none';
            this.p_display= 'none';
        }
        
    }

    batchDelete(event){
        this.multiple = true;
        event.target.innerText = '确认删除';
        let trs= document.querySelectorAll('tbody tr');
        if(this.currentTrIndexs.length >=2){
            this.orderArr = [];
            this.currentTrIndexs.map((item)=>{
                for(let i=0;i<trs.length;i++){
                    if(trs[i].id == item){
                        let orderId = trs[i].children[1]['innerText'];
                        this.orderArr.push(orderId);
                    }
                }
            })
            this.params['orderArr'] = this.orderArr;
            this.http.post(this.del_m,this.params).then((res)=>{
                console.log(res);
                this.remove = this.currentTrIndexs;
                this.multiple = false;
                event.target.innerText = '批量删除';
            })
        }else{
            alert('请勾选至少两条要删除的数据');
        }

    }


    // window.onresize = function(){
    //     this.Masked()
    //     this.centShow()
    // }

    /*window.onresize = function(){
        this.Masked();
        this.centShow();
    }*/


    add(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.classList.contains('add')){
            this.m_display = 'block';
            this.p_display= 'block';
            this.centShow();

        }
    }

    trackByFn(idx){
        return idx;
    }

    addOrder(event){
        var inputs = document.querySelectorAll('.input');
        var order_id;
        var product_id;
        var cart_id;
        var order_status;
        var user_id;
        var product_qty;
        var size_type;
        var color;
        
        for(var i=0;i<inputs.length;i++){
            if(inputs[i]['value'] == ''){
                alert('输入的值不能为空');
            }else{
                order_id = inputs[0]['value'];
                product_id = inputs[1]['value'];
                cart_id = inputs[2]['value'];
                order_status = inputs[3]['value'];
                user_id = inputs[4]['value'];
                product_qty = inputs[5]['value'];
                size_type = inputs[6]['value'];
                color = inputs[7]['value'];
            }
        }
        console.log(inputs,order_id,product_id,cart_id,order_status,user_id,product_qty,size_type,color);
        let obj = {};
        let arr_item = [];
        obj['order_id'] = order_id;
        obj['product_id'] = product_id;
        obj['cart_id'] = cart_id;
        obj['order_status'] = order_status;
        obj['user_id'] = user_id;
        obj['product_qty'] = product_qty;
        obj['size'] = size_type;
        obj['color'] = color;
        console.log(obj);
        arr_item.push(obj);
        // arr_item = JSON.stringify(arr_item);

        this.http.post(this.addorder,{arr_item: arr_item}).then((res)=>{
            console.log(res);
            this.m_display = 'none';
            this.p_display= 'none';
            this.add_display = 'block';
        })
    }

    removes(event){
        let target = event.target;
        let order_id = target.parentElement.parentElement.children[0].innerText;

        let orderParams = {};
        orderParams['order_id'] = order_id;
        // orderParams = JSON.stringify(orderParams);
        this.http.post(this.del_s,orderParams).then((res)=>{
            console.log(res);
            this.a_display = 'block';
            let tr = target.parentElement.parentElement;
            tr.parentElement.removeChild(tr);
        })
    }

    justify(event){
        let val = event.target.value;
        // if(!/\S{1,}$/.test(val)){
        //     alert('输入不合法');

        // }
    }

    edit(_idx){
        // Mask.style.display = 'block';
        // Popup.style.display = 'block';
        // centShow();
    }

    apiRequest(_page = 1){
        let pageParams = {};
        if(this.paginationConfig){
            pageParams['pageitems'] = this.paginationConfig['pageitems'];
            pageParams['page'] = _page;
        }
        //配置信息中的api
        this.http.get(this.apiConfig, pageParams).then((apiRes)=>{
            console.log(apiRes)
            if(apiRes['data']['results'].length <= 2){
                this.dataset = apiRes['data']['results'][0];
                let rowsCount = apiRes['data']['results'][1][0]['rowscount'] ;
                let pageItems = this.paginationConfig['pageitems'];
                this.pageCount = Math.ceil(rowsCount / pageItems);
                //console.log(this.pageCount)
            }else{
                this.dataset = apiRes['data']['results'];
            }
            
            //console.log(pageItems,this.pageCount)
        })
    }

    getKeys(item){
        return Object.keys(item);
    }

    selectTr(_idx){
        if(this.multiple){
            if(this.currentTrIndexs.indexOf(_idx) > -1){
                this.currentTrIndexs.splice(this.currentTrIndexs.indexOf(_idx),1);
            }else{
                this.currentTrIndexs.push(_idx);
            }
        }else{
            this.currentTrIndexs = [_idx];
        }
        console.log(this.currentTrIndexs);
        
    }

    selectAll(){
        if(this.currentTrIndexs.length != this.dataset.length){
            this.currentTrIndexs = [];
            for(let i=0;i<this.dataset.length;i++){
                this.currentTrIndexs.push(i);
            }
        }else{
            this.currentTrIndexs = [];
        }
    }

    filterData(_key, _val){
        //console.log(this.filterDataConfig);
        let _config = this.filterDataConfig[_key];
        if(!_config){
            return _val;
        }else if(_config.type == "DateFormat"){
            //return Utils.dateFormat(new Date(_val), _config.format);
        }else if(_config.type == "Replace"){
            _val = String(_val);
            let reg = new RegExp(_config.reg);
            return _val.replace(reg,_config.replaceVal);
        }
    }

    fanye(lis){
        for(let i=0;i<lis.length;i++){
            if(lis[i].classList.contains('active')){
                let page = parseInt(lis[i].children[0].innerText);
                this.apiRequest(page);
            }
        }
    }

    goto(event){
        let target = event.target;
        if(target.tagName.toLowerCase() == 'a' && !target.parentElement.classList.contains('disabled') && !target.getAttribute('aria-label')){
            let page = parseInt(event.target.innerText);
            this.apiRequest(page);
        }else if(target.getAttribute('aria-hidden') == 'true' && target.innerText == '«' && !target.parentElement.parentElement.classList.contains('disabled')){
            let lis = target.parentElement.parentElement.parentElement.children;
            console.log(lis);
            this.fanye(lis);
        }else if(target.getAttribute('aria-label') == 'Previous' && !target.parentElement.classList.contains('disabled')){
            let lis = target.parentElement.parentElement.children;
            console.log(lis);
            this.fanye(lis);
        }else if(target.getAttribute('aria-hidden') == 'true' && target.innerText == '»' && !target.parentElement.parentElement.classList.contains('disabled')){
            let lis = target.parentElement.parentElement.parentElement.children;
            console.log(lis);
            this.fanye(lis);
        }else if(target.getAttribute('aria-label') == 'Next' && !target.parentElement.classList.contains('disabled')){
            let lis = target.parentElement.parentElement.children;
            console.log(lis);
            this.fanye(lis);
        }
        
    }
}
