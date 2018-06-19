webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.hideActive{\r\n\tdisplay:none;\r\n}\r\n\r\n.wrapper{\r\n\tbackground:#fff;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <!-- Main Header -->\r\n  <app-header [class]=\"hideCOM\"></app-header>\r\n\r\n  <!-- Left side column. contains the logo and sidebar -->\r\n  <app-menu [class]=\"hideCOM\"></app-menu>\r\n\r\n  <!-- Content Wrapper. Contains page content -->\r\n  <app-content [class]=\"hideCOM\"></app-content>\r\n  <!-- /.content-wrapper -->\r\n\r\n  <!-- Main Footer -->\r\n  <app-footer [class]=\"hideCOM\"></app-footer>\r\n\r\n  <!-- Control Sidebar -->\r\n  <app-sidebar [class]=\"hideCOM\"></app-sidebar>\r\n  <!-- /.control-sidebar -->\r\n  \r\n  <app-login [class]=\"hideLogin\" (parentAttr)=\"parentEvent($event)\"></app-login>\r\n  <app-register [class]=\"hideRegister\"></app-register>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'app works!';
        this.hideCOM = "";
        this.hideLogin = "";
        this.hideRegister = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        // if(localStorage.getItem("token")){
        //     this.router.navigate(['/dashboard']);
        //     return;
        // }
        // var arr = this.router.location._platformStrategy._platformLocation.pathname;
        // arr = location.href.split("/");
        // var path = arr[arr.length - 1];
        // if(path == "login" || path == "register"){
        // 	this.hideCOM = "hideActive";
        // }
        // if(path == "login"){
        // 	this.hideRegister = "hideActive";
        // } else if(path == "register"){
        // 	this.hideLogin = "hideActive";
        // }else{
        //     this.hideRegister = "hideActive";
        //     this.hideLogin = "hideActive";
        //     this.hideCOM = "";
        // }
    };
    AppComponent.prototype.parentEvent = function (val) {
        console.log(val);
        if (val !== "login" || val !== "regiister") {
            this.hideLogin = "hideActive";
            this.hideRegister = "hideActive";
            this.hideCOM = "";
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_router__ = __webpack_require__("./src/app/router/router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_designersetconfig_service__ = __webpack_require__("./src/app/service/designersetconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_buttons__ = __webpack_require__("./node_modules/ngx-bootstrap/buttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_productConfig_service__ = __webpack_require__("./src/app/service/productConfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_common_header_header_component__ = __webpack_require__("./src/app/components/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_common_footer_footer_component__ = __webpack_require__("./src/app/components/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_common_menu_menu_component__ = __webpack_require__("./src/app/components/common/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_common_sidebar_sidebar_component__ = __webpack_require__("./src/app/components/common/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_common_content_content_component__ = __webpack_require__("./src/app/components/common/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_common_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/common/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_common_treeview_treeview_menu_component__ = __webpack_require__("./src/app/components/common/treeview/treeview-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_common_sidermenu_sidebar_menu_component__ = __webpack_require__("./src/app/components/common/sidermenu/sidebar-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_product_product_component__ = __webpack_require__("./src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_order_order_component__ = __webpack_require__("./src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_designer_designer_component__ = __webpack_require__("./src/app/components/designer/designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_setting_setting_component__ = __webpack_require__("./src/app/components/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_pagenotfound_pagenotfound_component__ = __webpack_require__("./src/app/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__utils_productRange_pipe__ = __webpack_require__("./src/app/utils/productRange.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__stock_stars_stars_component__ = __webpack_require__("./src/app/stock/stars/stars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__stock_stock_form_stock_form_component__ = __webpack_require__("./src/app/stock/stock-form/stock-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__stock_stock_manage_stock_manage_component__ = __webpack_require__("./src/app/stock/stock-manage/stock-manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__stock_stock_service__ = __webpack_require__("./src/app/stock/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__stock_stock_filter_pipe__ = __webpack_require__("./src/app/stock/stock-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_common_desdatagrid_desdatagrid_component__ = __webpack_require__("./src/app/components/common/desdatagrid/desdatagrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_product_datagrid_product_datagrid_component__ = __webpack_require__("./src/app/components/product-datagrid/product-datagrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_productdataform_productdataform_component__ = __webpack_require__("./src/app/components/productdataform/productdataform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_productchangeform_productchangeform_component__ = __webpack_require__("./src/app/components/productchangeform/productchangeform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_common_designerdatagrid_designerdatagrid_component__ = __webpack_require__("./src/app/components/common/designerdatagrid/designerdatagrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_order_datagrid_order_datagrid_component__ = __webpack_require__("./src/app/components/order-datagrid/order-datagrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__service_range_pipe__ = __webpack_require__("./src/app/service/range.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_common_pagination_pagination_component__ = __webpack_require__("./src/app/components/common/pagination/pagination.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_common_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_common_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_common_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_common_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_common_content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_31__stock_stock_manage_stock_manage_component__["a" /* StockManageComponent */],
                __WEBPACK_IMPORTED_MODULE_29__stock_stars_stars_component__["a" /* StarsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_common_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_30__stock_stock_form_stock_form_component__["a" /* StockFormComponent */],
                __WEBPACK_IMPORTED_MODULE_33__stock_stock_filter_pipe__["a" /* StockFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_21__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_designer_designer_component__["a" /* DesignerComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_order_datagrid_order_datagrid_component__["a" /* OrderDatagridComponent */],
                __WEBPACK_IMPORTED_MODULE_40__service_range_pipe__["a" /* RangePipe */],
                __WEBPACK_IMPORTED_MODULE_34__components_common_desdatagrid_desdatagrid_component__["a" /* DesdatagridComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_common_treeview_treeview_menu_component__["a" /* TreeviewMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_common_sidermenu_sidebar_menu_component__["a" /* SidebarMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_product_datagrid_product_datagrid_component__["a" /* ProductDatagridComponent */],
                __WEBPACK_IMPORTED_MODULE_28__utils_productRange_pipe__["a" /* productRangePipe */],
                __WEBPACK_IMPORTED_MODULE_36__components_productdataform_productdataform_component__["a" /* ProductdataformComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_productchangeform_productchangeform_component__["a" /* ProductchangeformComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_common_pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_common_designerdatagrid_designerdatagrid_component__["a" /* DesignerdatagridComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__router_router__["a" /* RootRouter */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["b" /* PopoverModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_32__stock_stock_service__["a" /* StockService */],
                __WEBPACK_IMPORTED_MODULE_5__service_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_8__service_designersetconfig_service__["a" /* DesignerService */],
                __WEBPACK_IMPORTED_MODULE_11__service_productConfig_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_32__stock_stock_service__["a" /* StockService */],
                __WEBPACK_IMPORTED_MODULE_5__service_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_6__service_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_8__service_designersetconfig_service__["a" /* DesignerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/content/content.component.css":
/***/ (function(module, exports) {

module.exports = ".content-header > .breadcrumb {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 10px;\r\n    border-radius: 2px;\r\n}\r\n.content-header > .breadcrumb{\r\n    right:0;\r\n    left:10px;\r\n    display: inline-block;\r\n}\r\n.header{\r\n    display:inline-block;\r\n    position:absolute;\r\n    right:20px;\r\n    top:20px;\r\n    z-index:2;\r\n}\r\n.header>h4{\r\n    position:absolute;\r\n    top:1px;\r\n    right:46px;\r\n    margin:0;\r\n    font-size: 14px;\r\n}\r\n.header select{\r\n    height: 18px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/common/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n\r\n       <!-- <h1>\r\n          {{pageTitle}}\r\n\r\n      <h1>\r\n          {{pageTitle}}\r\n\r\n          <small>{{pageDesc}}</small>\r\n      </h1> -->\r\n      <!-- <ol class=\"breadcrumb\">\r\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\r\n          <li class=\"active\">Here</li>\r\n      </ol> -->\r\n      <div class=\"header\">\r\n          <h4>language:</h4>\r\n          <select [(ngModel)]=\"common.lanType\">\r\n              <option value=\"en\">en</option>\r\n              <option value=\"cn\">cn</option>\r\n          </select>\r\n      </div>\r\n    </section>\r\n\r\n    <!-- Main content \r\n    <section class=\"content container-fluid\">\r\n\r\n      <!--------------------------\r\n        | Your Page Content Here |\r\n        -------------------------->\r\n\t\t<router-outlet></router-outlet>\r\n\r\n    <!-- </section> -->\r\n    <!-- /.content -->\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/common/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = /** @class */ (function () {
    function ContentComponent(router, common) {
        var _this = this;
        this.router = router;
        this.common = common;
        this.pageTitle = "";
        this.pageDesc = "";
        //利用router的事件进行全局的控制
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            if (event.url == '/dashboard') {
                _this.pageTitle = "首页";
                _this.pageDesc = "";
            }
            else if (event.url.startsWith('/stock')) {
                _this.pageTitle = "股票信息管理";
                _this.pageDesc = "进行股票信息管理";
            }
        });
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/components/common/content/content.component.html"),
            styles: [__webpack_require__("./src/app/components/common/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/common/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  这里是首页\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/common/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.parentAttr = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.childrenEvent("dashboard");
    };
    DashboardComponent.prototype.childrenEvent = function (val) {
        this.parentAttr.emit(val);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "parentAttr", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/common/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/common/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/common/desdatagrid/desdatagrid.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/desdatagrid/desdatagrid.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  desdatagrid works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/common/desdatagrid/desdatagrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesdatagridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesdatagridComponent = /** @class */ (function () {
    function DesdatagridComponent() {
    }
    DesdatagridComponent.prototype.ngOnInit = function () {
    };
    DesdatagridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-desdatagrid',
            template: __webpack_require__("./src/app/components/common/desdatagrid/desdatagrid.component.html"),
            styles: [__webpack_require__("./src/app/components/common/desdatagrid/desdatagrid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DesdatagridComponent);
    return DesdatagridComponent;
}());



/***/ }),

/***/ "./src/app/components/common/designerdatagrid/designerdatagrid.component.css":
/***/ (function(module, exports) {

module.exports = ".table tbody tr td {\r\n\ttext-align:center;\r\n\twidth:4% !important;\r\n\tvertical-align: middle;\r\n\toverflow: hidden;\r\n\tborder-color:#ccc;\r\n}\r\n\r\n.table tbody tr td:nth-child(1){\r\n\twidth:1% !important;\r\n}\r\n\r\n.table tbody tr td:nth-child(6){\r\n\twidth:5% !important;\r\n}\r\n\r\n.table tbody tr td:nth-child(5){\r\n\twidth:5% !important;\r\n}\r\n\r\n.table tbody tr td:nth-child(2){\r\n\twidth:2% !important;\r\n}\r\n\r\n.table tbody tr td:nth-child(3){\r\n\twidth:2% !important;\r\n}\r\n\r\n.table tbody tr td:nth-child(4){\r\n\twidth:1% !important;\r\n}\r\n\r\n.table thead tr{\r\n\tborder:1px solid #ccc;\r\n}\r\n\r\n.table thead tr th{\r\n\ttext-align:center;\r\n}\r\n\r\n.table-bordered tr th{\r\n\tborder-color:#ccc;\r\n\tborder-bottom:0 none;\r\n\tbackground:#3c8dbc;\r\n\tcolor:#fff;\r\n}\r\n\r\n.table input{\r\n\twidth:16px;\r\n\theight:16px;\r\n}\r\n\r\n.form-control{\r\n\tborder-radius:3px;\r\n}\r\n\r\n.designerSearch{\r\n\twidth:100%;\r\n\theight:60px;\r\n}\r\n\r\n.designerSearch>div{\r\n\tdisplay:inline-block;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.dropdown-menu > li > span {\r\n    display: block;\r\n    padding: 3px 20px;\r\n    clear: both;\r\n    font-weight: normal;\r\n    line-height: 1.42857143;\r\n    color: #333;\r\n    white-space: nowrap;\r\n}\r\n\r\n.dropdown-menu > li > span:hover{\r\n\tbackground:#ccc;\r\n}\r\n\r\n.modal-body .input-group{\r\n\tmargin-top:6px;\r\n}\r\n\r\n.thname{\r\n\twidth:140px;\r\n}\r\n\r\n.textareaBox{\r\n\twidth:430px;\r\n\theight:80px;\r\n}\r\n\r\n.changeData{\r\n\tmargin-left: 400px;\r\n\tmargin-bottom:20px;\r\n}\r\n\r\n.changeData1{\r\n\tmargin-bottom:20px;\r\n}\r\n\r\n.modal-content{\r\n\tborder-radius:10px !important;\r\n}\r\n\r\n.activeColor{\r\n\tbackground:#58bc58;\r\n}"

/***/ }),

/***/ "./src/app/components/common/designerdatagrid/designerdatagrid.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n <!-- 弹窗，修改信息 -->\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <h4 class=\"modal-title pull-left\">信息修改</h4>\r\n  </div>\r\n  <div class=\"modal-body designertext\">\r\n\t<div class=\"input-group\" *ngFor = \"let key of getKeys(showBoxObj)\">\r\n\t  \t<div class=\"designerName\" *ngIf=\"showBoxPrivate.indexOf(key) >-1\">{{showBoxPrivate.indexOf(key) >-1 ? showBoxObj[key] : \"\"}}</div>\r\n\t  <span class=\"input-group-addon thname\" id=\"basic-addon1\" *ngIf = \"showBoxFilter.indexOf(key) == -1\">{{dictionaryPrivate[common[\"lanType\"]][key]}}</span>\r\n\t  <textarea  class=\"form-control textareaBox\" aria-describedby=\"basic-addon1\" *ngIf = \"showBoxFilter.indexOf(key) == -1\"  [(ngModel)] = \"showBoxObj[key]\"></textarea>\r\n\t</div>\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-primary changeData\"  aria-label=\"Close\" (click)=\"modalRef.hide()\">退出修改</button>\r\n  <button type=\"button\" class=\"btn btn-danger changeData1\" aria-label=\"Close\" (click)=\"saveChange()\">保存修改</button>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- 查询搜索框 -->\r\n<div class=\"designerSearch\">\r\n\t<div class=\"btn-group\" *ngIf = \"dataSet[0]\">\r\n\t  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t    {{setWord}} \r\n\t    <span class=\"caret\"></span>\r\n\t  </button>\r\n\t  <ul class=\"dropdown-menu\">\r\n\t    <li *ngFor = \"let key of getKeys(dataSet[0])\">\r\n\t    \t<span *ngIf= \"designerSelect.indexOf(key) >= 0\" (click) = \"selectWord(key)\">{{dictionaryPrivate[common[\"lanType\"]][key]}}</span>\r\n\t    </li>\r\n\t  </ul>\r\n\t</div>\r\n\r\n\r\n\t<div>\r\n\t\t<form class=\"navbar-form navbar-left\" role=\"search\">\r\n\t\t  <div class=\"form-group\">\r\n\t\t    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name = \"searchWd\" [(ngModel)] = \"searchWd\">\r\n\t\t  </div>\r\n\t\t  <button type=\"submit\" class=\"btn btn-default\" (click) = \"searchMsg()\">查询</button>\r\n\t\t  <button type=\"submit\" class=\"btn btn-danger \" style=\"margin-left:100px\" (click) = \"delMulti()\">批量删除</button>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- 表格 -->\r\n<table class=\"table table-hover table table-bordered\" *ngIf = \"dataSet\">\r\n  <thead>\r\n    <tr *ngIf =\"dataSet[0]\">\r\n    \t<th scope=\"col\" (click) = \"selectTrTotal()\"><input type=\"checkbox\" [checked] = \"delMultiDesigner.length == dataSet.length\"/></th>\r\n    \t<ng-template ngFor let-key [ngForOf]=\"getKeys(dataSet[0])\">\r\n\t\t\t<th scope=\"col\" *ngIf =\"(!dataSetConfigs[0] || dataSetConfigs.indexOf(key) > -1) && dataSetFilter.indexOf(key) < 0\"  >\r\n\t\t\t{{dictionaryPrivate[common[\"lanType\"]][key]}}\r\n\t\t\t</th>\r\n\t\t</ng-template>\r\n\t\t<th scope=\"col\">设置</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngIf =\"dataSet\">\r\n    <tr *ngFor=\"let obj of dataSet\" [class.activeColor] =\"delMultiDesigner.indexOf(obj.designer_id) >= 0\" (click)=\"getDelObjectId(obj)\">\r\n        <td scope=\"col\"><input type=\"checkbox\" [checked] =\"delMultiDesigner.indexOf(obj.designer_id) >= 0\"></td>\r\n      \t<ng-template ngFor let-key [ngForOf]=\"getKeys(obj)\">\r\n\t\t\t<td scope=\"col\" *ngIf =\"(!dataSetConfigs[0] || dataSetConfigs.indexOf(key) > -1) && dataSetFilter.indexOf(key) < 0\">\r\n\t\t\t{{obj[key]}}\r\n\t\t\t</td>\r\n\t\t</ng-template>\r\n\t\t<td scope=\"col\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\"  (click)=\"showBox(obj)\" (click)=\"openModal(template)\">修改</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click) = \"delDesigner(obj)\">删除</button>\r\n\t\t</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n\r\n<!-- 分页 -->\r\n<div class=\"fenye\">\r\n<nav aria-label=\"...\" *ngIf = \"pageNum\">\r\n    <div class=\"pagination\">\r\n    \t<li (click) = \"prevOrNEXT(currlentNum,'prev')\">\r\n    \t\t<span>&laquo;</span>\r\n    \t</li>\r\n    </div>\r\n\t  <div class=\"pagination\" *ngFor = \"let num of getPageArray(pageNum)\">\r\n\t    <li [class.active]=\"num == currlentNum\" (click) = \"getNumber(num)\">\r\n\t    \t<span>{{num}}</span>\r\n\t    </li>\r\n\t  </div>\r\n    <div class=\"pagination\">\r\n    \t<li (click) = \"prevOrNEXT(currlentNum,'next')\">\r\n    \t\t<span>&raquo;</span>\r\n    \t</li>\r\n    </div>\r\n</nav>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/designerdatagrid/designerdatagrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignerdatagridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesignerdatagridComponent = /** @class */ (function () {
    function DesignerdatagridComponent(http, modalService, common) {
        this.http = http;
        this.modalService = modalService;
        this.common = common;
        this.dictionaryPrivate = {};
        this.designerSelect = [];
        this.setWord = "选择";
        this.setKey = "";
        this.configData = {};
        this.dataSet = [];
        this.dataSetFilter = [];
        this.dataSetConfigs = [];
        this.pageNum = 0;
        this.trQty = 0;
        this.Api = "";
        this.showBoxFilter = [];
        this.showBoxObj = null;
        this.delMultiDesigner = [];
    }
    DesignerdatagridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("routers/management/designer/" + this.txtConfigApi + ".txt", {}).then(function (configData) {
            _this.configData = configData;
            //从配置文件获取请求后台数据库的api,通过api获取对应的数据
            var Api = configData["api"];
            _this.Api = Api;
            //获取配置文件需要过滤的data数据
            _this.dataSetFilter = configData["dataSetFilter"] ? configData["dataSetFilter"] : [];
            //获取配置文件，默认的配置数据
            var dataSetConfig = configData["dataSetConfig"];
            _this.dataSetConfigs = dataSetConfig == "*" || !dataSetConfig ? [] : configData["dataSetConfig"];
            //配置文件，每一页显示的数量,用于请求后台数据
            var tableTrNum = configData["tableTrNum"];
            _this.trQty = tableTrNum;
            //showBoxFilter
            _this.showBoxFilter = configData["showBoxFilter"] ? configData["showBoxFilter"] : [];
            //configData["showBoxPrivate"]
            _this.showBoxPrivate = configData["showBoxPrivate"] ? configData["showBoxPrivate"] : [];
            //私有字典
            _this.dictionaryPrivate = configData["dictionaryPrivate"] ? configData["dictionaryPrivate"] : [];
            //下拉选择
            _this.designerSelect = configData["designerSelect"] ? configData["designerSelect"] : [];
            if (Api) {
                _this.http.get(Api, {}).then(function (designerData) {
                    _this.dataSet = designerData["results"] ? designerData["results"][0] : [];
                    var total = designerData["results"][1];
                    var count = designerData["results"] ? total[0].count : [];
                    _this.pageNum = Math.ceil(count / _this.trQty);
                });
            }
        });
    };
    DesignerdatagridComponent.prototype.selectWord = function (key) {
        //下拉菜单选择
        this.setKey = key;
        this.setWord = this.dictionaryPrivate[this.common["lanType"]][key];
    };
    DesignerdatagridComponent.prototype.searchMsg = function (params) {
        var _this = this;
        var type = this.setKey;
        var seMsg = this.searchWd;
        this.http.get(this.configData["searchDesignerApi"], { type: type, seMsg: seMsg }).then(function (searchDatas) {
            if (searchDatas["results"]) {
                _this.dataSet = searchDatas["results"];
            }
            else {
                alert(searchDatas["error"]);
            }
        });
    };
    DesignerdatagridComponent.prototype.openModal = function (template) {
        // 弹窗
        this.modalRef = this.modalService.show(template);
    };
    DesignerdatagridComponent.prototype.showBox = function (item) {
        //获取当前tr的数据,用于弹窗数据的展示
        this.showBoxObj = item;
    };
    DesignerdatagridComponent.prototype.selectTrTotal = function () {
        //多选-----
        if (this.delMultiDesigner.length !== this.dataSet.length) {
            this.delMultiDesigner = [];
            for (var i = 0; i < this.dataSet.length; i++) {
                this.delMultiDesigner.push(this.dataSet[i]["designer_id"]);
            }
        }
        else {
            this.delMultiDesigner = [];
        }
    };
    DesignerdatagridComponent.prototype.getDelObjectId = function (colTr) {
        // 批量删除数组添加id
        if (this.delMultiDesigner.indexOf(colTr.designer_id) == -1) {
            this.delMultiDesigner.push(colTr.designer_id);
        }
        else {
            this.delMultiDesigner.splice(this.delMultiDesigner.indexOf(colTr.designer_id), 1);
        }
    };
    DesignerdatagridComponent.prototype.delMulti = function () {
        var _this = this;
        // 批量删除
        var currlentNum = this.currlentNum;
        var qty = this.trQty;
        var delAttr = this.delMultiDesigner;
        var arr = JSON.parse(JSON.stringify(delAttr));
        this.http.get(this.configData["delMultiDesignerApi"], { delMuti: delAttr, pageNum: currlentNum, qty: qty }).then(function (afterDeleRes) {
            if (afterDeleRes["results"]) {
                console.log(afterDeleRes, 1111111111111111111111111111111111111);
                _this.dataSet = afterDeleRes['results'] ? afterDeleRes['results'] : [];
                _this.delMultiDesigner = [];
            }
            else {
                console.log(afterDeleRes["err"]);
            }
        });
    };
    DesignerdatagridComponent.prototype.saveChange = function () {
        var _this = this;
        //修改designer数据库数据
        this.http.get(this.configData["updatedesignerApi"], this.showBoxObj).then(function (afterUpadte) {
            if (afterUpadte["affectedRows"] >= 1 && afterUpadte["changedRows"] !== 0) {
                _this.modalRef.hide();
            }
            else {
                alert("修改失败");
                _this.modalRef.hide();
            }
        });
    };
    DesignerdatagridComponent.prototype.delDesigner = function (designerId) {
        var _this = this;
        //单个删除
        var id = designerId.designer_id;
        var index = -1;
        this.dataSet.map(function (item, idx) {
            if (item["designer_id"] == item["designer_id"]) {
                index = idx;
            }
        });
        this.http.get(this.configData["delDesignerApi"], { designerId: id }).then(function (afterDele) {
            if (afterDele["affectedRows"] == 1) {
                _this.dataSet.splice(_this.dataSet.indexOf(designerId), 1);
            }
        });
    };
    DesignerdatagridComponent.prototype.clickPageNum = function (Num) {
        var _this = this;
        //点击页码请求后台数据函数
        var qty = this.trQty;
        this.http.get(this.Api, { pageNum: Num, qty: qty }).then(function (designerData) {
            _this.dataSet = designerData["results"] ? designerData["results"][0] : [];
            var total = designerData["results"][1];
            var count = designerData["results"] ? total[0].count : [];
            _this.pageNum = Math.ceil(count / _this.trQty);
        });
    };
    DesignerdatagridComponent.prototype.getKeys = function (item) {
        return Object.keys(item);
    };
    DesignerdatagridComponent.prototype.getPageArray = function (params) {
        var num = [];
        for (var i = 1; i <= params; i++) {
            num.push(i);
        }
        return num;
    };
    DesignerdatagridComponent.prototype.getNumber = function (numbers) {
        //点击页码，请求数据
        this.currlentNum = numbers;
        this.clickPageNum(numbers);
    };
    DesignerdatagridComponent.prototype.prevOrNEXT = function (nums, nextAction) {
        // 点击页码左右键，请求数据
        if (nextAction == "prev") {
            if (nums <= 1) {
                var numx = JSON.parse(JSON.stringify(this.pageNum));
                this.currlentNum = numx;
                this.clickPageNum(numx);
            }
            else {
                var numx = nums - 1;
                this.currlentNum = numx;
                this.clickPageNum(numx);
            }
        }
        if (nextAction == "next") {
            if (nums >= this.pageNum) {
                var number = 1;
                this.currlentNum = 1;
                this.clickPageNum(number);
            }
            else {
                var number = nums + 1;
                this.currlentNum = JSON.parse(JSON.stringify(number));
                this.clickPageNum(number);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DesignerdatagridComponent.prototype, "txtConfigApi", void 0);
    DesignerdatagridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'designerdatagrid',
            template: __webpack_require__("./src/app/components/common/designerdatagrid/designerdatagrid.component.html"),
            styles: [__webpack_require__("./src/app/components/common/designerdatagrid/designerdatagrid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */]])
    ], DesignerdatagridComponent);
    return DesignerdatagridComponent;
}());



/***/ }),

/***/ "./src/app/components/common/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <footer class=\"main-footer\">\r\n    <!-- To the right -->\r\n    <div class=\"pull-right hidden-xs\">\r\n      Anything you want\r\n    </div>\r\n    <!-- Default to the left -->\r\n    <strong>Copyright &copy; {{year}} <a href=\"#\">frippe</a>.</strong> All rights reserved.\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.year = new Date().getFullYear();
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/common/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/common/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/common/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "  <header class=\"main-header headers\">\r\n\r\n    <!-- Logo -->\r\n    <a href=\"index2.html\" class=\"logo\">\r\n      <!-- mini logo for sidebar mini 50x50 pixels -->\r\n      <span class=\"logo-mini\"><b>A</b>LT</span>\r\n      <!-- logo for regular state and mobile devices -->\r\n      <span class=\"logo-lg\"><b>Admin</b>LTE</span>\r\n    </a>\r\n\r\n    <!-- Header Navbar -->\r\n    <nav class=\"navbar navbar-static-top\" role=\"navigation\">\r\n      <!-- Sidebar toggle button-->\r\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n      </a>\r\n      <!-- Navbar Right Menu -->\r\n      <div class=\"navbar-custom-menu\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <!-- Messages: style can be found in dropdown.less-->\r\n          <li class=\"dropdown messages-menu\">\r\n            <!-- Menu toggle button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-envelope-o\"></i>\r\n              <span class=\"label label-success\">0</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"header\">You have 0 messages</li>\r\n              <li>\r\n                <!-- inner menu: contains the messages -->\r\n                <ul class=\"menu\">\r\n                  <li><!-- start message -->\r\n                    <a href=\"#\">\r\n                      <div class=\"pull-left\">\r\n                        <!-- User Image -->\r\n                        <img src=\"assets/img///user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                      </div>\r\n                      <!-- Message title and timestamp -->\r\n                      <h4>\r\n                        Support Team\r\n                        <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\r\n                      </h4>\r\n                      <!-- The message -->\r\n                      <p>Why not buy a new awesome theme?</p>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end message -->\r\n                </ul>\r\n                <!-- /.menu -->\r\n              </li>\r\n              <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\r\n            </ul>\r\n          </li>\r\n          <!-- /.messages-menu -->\r\n\r\n          <!-- Notifications Menu -->\r\n          <li class=\"dropdown notifications-menu\">\r\n            <!-- Menu toggle button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-bell-o\"></i>\r\n              <span class=\"label label-warning\">0</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"header\">You have 0 notifications</li>\r\n              <li>\r\n                <!-- Inner Menu: contains the notifications -->\r\n                <ul class=\"menu\">\r\n                  <li><!-- start notification -->\r\n                    <a href=\"#\">\r\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\r\n                    </a>\r\n                  </li>\r\n                  <!-- end notification -->\r\n                </ul>\r\n              </li>\r\n              <li class=\"footer\"><a href=\"#\">View all</a></li>\r\n            </ul>\r\n          </li>\r\n          <!-- Tasks Menu -->\r\n          <li class=\"dropdown tasks-menu\">\r\n            <!-- Menu Toggle Button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-flag-o\"></i>\r\n              <span class=\"label label-danger\">0</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"header\">You have 0 tasks</li>\r\n              <li>\r\n                <!-- Inner menu: contains the tasks -->\r\n                <ul class=\"menu\">\r\n                  <li><!-- Task item -->\r\n                    <a href=\"#\">\r\n                      <!-- Task title and progress text -->\r\n                      <h3>\r\n                        Design some buttons\r\n                        <small class=\"pull-right\">20%</small>\r\n                      </h3>\r\n                      <!-- The progress bar -->\r\n                      <div class=\"progress xs\">\r\n                        <!-- Change the css width attribute to simulate progress -->\r\n                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\r\n                             aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                          <span class=\"sr-only\">20% Complete</span>\r\n                        </div>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end task item -->\r\n                </ul>\r\n              </li>\r\n              <li class=\"footer\">\r\n                <a href=\"#\">View all tasks</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- User Account Menu -->\r\n          <li class=\"dropdown user user-menu\">\r\n            <!-- Menu Toggle Button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <!-- The user image in the navbar-->\r\n              <img src=\"assets/img///user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\r\n              <!-- hidden-xs hides the username on small devices so only the image appears. -->\r\n              <span class=\"hidden-xs\">Alexander Pierce</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <!-- The user image in the menu -->\r\n              <li class=\"user-header\">\r\n                <img src=\"assets/img///user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n\r\n                <p>\r\n                  Alexander Pierce - Web Developer\r\n                  <small>Member since Nov. 2012</small>\r\n                </p>\r\n              </li>\r\n              <!-- Menu Body -->\r\n              <li class=\"user-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-4 text-center\">\r\n                    <a href=\"#\">Followers</a>\r\n                  </div>\r\n                  <div class=\"col-xs-4 text-center\">\r\n                    <a href=\"#\">Sales</a>\r\n                  </div>\r\n                  <div class=\"col-xs-4 text-center\">\r\n                    <a href=\"#\">Friends</a>\r\n                  </div>\r\n                </div>\r\n                <!-- /.row -->\r\n              </li>\r\n              <!-- Menu Footer-->\r\n              <li class=\"user-footer\">\r\n                <div class=\"pull-left\">\r\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\r\n                </div>\r\n                <div class=\"pull-right\">\r\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- Control Sidebar Toggle Button -->\r\n          <li>\r\n            <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </header>"

/***/ }),

/***/ "./src/app/components/common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/common/menu/main-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MainData */
/* unused harmony export UserData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuData; });
/**
 * 主数据
 */
var MainData = /** @class */ (function () {
    function MainData() {
    }
    return MainData;
}());

/**
 * 用户数据
 */
var UserData = /** @class */ (function () {
    function UserData() {
    }
    return UserData;
}());

/**
 * 菜单数据
 */
var MenuData = /** @class */ (function () {
    function MenuData() {
    }
    return MenuData;
}());



/***/ }),

/***/ "./src/app/components/common/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\r\n\r\n    <!-- sidebar: style can be found in sidebar.less -->\r\n    <section class=\"sidebar\">\r\n\r\n      <!-- Sidebar user panel (optional) -->\r\n      <div class=\"user-panel\">\r\n        <div class=\"pull-left image\">\r\n          <img src=\"assets/img///user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n        </div>\r\n        <div class=\"pull-left info\">\r\n          <p>Alexander Pierce</p>\r\n          <!-- Status -->\r\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- search form (Optional) -->\r\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\r\n          <span class=\"input-group-btn\">\r\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\r\n              </button>\r\n            </span>\r\n        </div>\r\n      </form>\r\n      <!-- /.search form -->\r\n\r\n      <!-- Sidebar Menu -->\r\n      <!--<ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n        <li class=\"header\">HEADER</li>-->\r\n        <!-- Optionally, you can add icons to the links -->\r\n        <!--<li *ngFor=\"let menu of menus\" [class.active]=\"currentMenuId == menu.id\"><a href=\"JavaScript:;\" (click)=\"nav(menu)\"><i class=\"fa fa-link\"></i> <span>{{menu.name}}</span></a></li>\r\n      </ul>-->\r\n      <!-- /.sidebar-menu -->\r\n      <c-sidebar-menu [data]=\"mainData.menuData\"></c-sidebar-menu>\r\n    </section>\r\n    <!-- /.sidebar -->\r\n  </aside>\r\n"

/***/ }),

/***/ "./src/app/components/common/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* unused harmony export Menu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
        this.currentMenuId = 1; // 当前选中id
        //用户数据
        this.mainData = {
            userData: {
                userName: "百变小咖",
                userAvatar: "./assets/img/user-header.png",
                mobilePhone: "1895090***2",
                email: "332557712@qq.com",
                positions: "Java工程师、打杂工程师",
            },
            menuData: [{
                    "id": "1",
                    "parentId": "0",
                    "name": "商品管理",
                    "keyWord": "demo",
                    "icon": 'fa-wrench',
                    "isExpend": false,
                    "children": [{
                            "id": "2",
                            "parentId": "1",
                            "name": "商品添加",
                            "keyWord": "mtk",
                            "icon": 'fa-columns',
                            "url": 'product'
                        }]
                },
                {
                    "id": "4",
                    "parentId": "0",
                    "name": "订单管理",
                    "keyWord": "yssl",
                    "icon": 'fa-cubes',
                    "isExpend": false,
                    "children": [
                        {
                            "id": "5",
                            "parentId": "020",
                            "name": "订单添加",
                            "keyWord": "ngBootstrapDemo",
                            "icon": 'fa-cubes',
                            "url": 'order'
                        }
                    ]
                },
                {
                    "id": "8",
                    "parentId": "0",
                    "name": "设计师管理",
                    "keyWord": "qxgl",
                    "icon": 'fa-user',
                    "isExpend": false,
                    "children": [
                        {
                            "id": "9",
                            "parentId": "020",
                            "name": "设计师管理",
                            "keyWord": "ngBootstrapDemo",
                            "icon": 'fa-cubes',
                            "url": 'designer'
                        }
                    ]
                }, {
                    "id": "12",
                    "parentId": "0",
                    "name": "设置",
                    "keyWord": "xtgl",
                    "icon": "fa-cube",
                    "children": [{
                            "id": "13",
                            "parentId": "31",
                            "name": "设置",
                            "keyWord": "txjk",
                            "icon": "fa-dashboard",
                            "url": "setting"
                        }]
                }]
        };
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menus = [
            new Menu(1, '商品管理', 'product'),
            new Menu(2, '订单管理', 'order'),
            new Menu(3, '设计师', 'designer'),
            new Menu(4, '设置', 'setting')
        ];
    };
    MenuComponent.prototype.nav = function (menu) {
        this.router.navigateByUrl(menu.link);
        this.currentMenuId = menu.id;
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/components/common/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/components/common/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], MenuComponent);
    return MenuComponent;
}());

var Menu = /** @class */ (function () {
    function Menu(id, name, link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
    return Menu;
}());



/***/ }),

/***/ "./src/app/components/common/pagination/pagination.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-outline-primary {\n    color: #007bff;\n    background-color: transparent;\n    background-image: none;\n    border-color: #007bff;\n    \n}\n.btn-outline-primary:hover {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff;\n}\n.pagination > li > a {\n    color: #337ab7 !important;\n}\n.btn-sm{\n    padding: 6px 12px !important;\n    position: absolute;\n    left:120%;\n    top:28%;\n}"

/***/ }),

/***/ "./src/app/components/common/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"page\" [disabled]='isDisabled'></ngb-pagination>\n<button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\n  按钮控制\n</button>\n"

/***/ }),

/***/ "./src/app/components/common/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.page = 1;
        this.isDisabled = false;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        //console.log(this.pageCount);
        this.collectionSize = this.pageCount * 10;
    };
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "pageCount", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pagination-disabled',
            template: __webpack_require__("./src/app/components/common/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/components/common/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/common/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/common/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\r\n    <!-- Create the tabs -->\r\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n      <li class=\"active\"><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\r\n      <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\r\n    </ul>sidebar-menu tree\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n      <!-- Home tab content -->\r\n      <div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\r\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n        <ul class=\"control-sidebar-menu\">\r\n          <li>\r\n            <a href=\"javascript:;\">\r\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n                <p>Will be 23 on April 24th</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <!-- /.control-sidebar-menu -->\r\n\r\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n        <ul class=\"control-sidebar-menu\">\r\n          <li>\r\n            <a href=\"javascript:;\">\r\n              <h4 class=\"control-sidebar-subheading\">\r\n                Custom Template Design\r\n                <span class=\"pull-right-container\">\r\n                    <span class=\"label label-danger pull-right\">70%</span>\r\n                  </span>\r\n              </h4>\r\n\r\n              <div class=\"progress progress-xxs\">\r\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <!-- /.control-sidebar-menu -->\r\n\r\n      </div>\r\n      <!-- /.tab-pane -->\r\n      <!-- Stats tab content -->\r\n      <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\r\n      <!-- /.tab-pane -->\r\n      <!-- Settings tab content -->\r\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n        <form method=\"post\">\r\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Report panel usage\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n            <p>\r\n              Some information about this general settings option\r\n            </p>\r\n          </div>\r\n          <!-- /.form-group -->\r\n        </form>\r\n      </div>\r\n      <!-- /.tab-pane -->\r\n    </div>\r\n    \r\n  </aside>\r\n\r\n  <!-- Add the sidebar's background. This div must be placed\r\n  immediately after the control sidebar -->\r\n  <div class=\"control-sidebar-bg\"></div>"

/***/ }),

/***/ "./src/app/components/common/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/common/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/common/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/common/sidermenu/sidebar-menu.component.css":
/***/ (function(module, exports) {

module.exports = ".c-nav-search {\r\n  padding-left: 13px;\r\n  padding-right: 13px;\r\n  padding-bottom: 15px;\r\n  padding-top: 10px;\r\n}\r\n.c-nav-search input {\r\n  background-color: #0acba2;\r\n  border: 1px solid #0acba2;\r\n  color: #eeeeee;\r\n  font-size: 15px;\r\n}\r\n.c-nav-search input:focus {\r\n  border: 1px solid #0cdfb2;\r\n}\r\n.c-nav-search input::-webkit-input-placeholder {\r\n  color: #eeeeee !important;\r\n}\r\n.c-nav-search input:-moz-placeholder {\r\n  color: #eeeeee !important;\r\n}\r\n.c-nav-search input::-moz-placeholder {\r\n  color: #eeeeee !important;\r\n}\r\n.c-nav-search input:-ms-input-placeholder {\r\n  color: #eeeeee !important;\r\n}\r\n.c-nav-search button {\r\n  color: #eeeeee;\r\n  background-color: #0acba2;\r\n  font-size: 15px;\r\n  border: 1px solid #0acba2;\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n.c-nav-search button:focus {\r\n  border: 1px solid #0cdfb2;\r\n}\r\n.c-nav-search button:active {\r\n  background-color: #09b892;\r\n}\r\n.c-nav {\r\n  margin-left: 0px;\r\n  height: calc(-165vh);\r\n  padding-left: 8px;\r\n  padding-right: 5px;\r\n  font-size: 15px;\r\n}\r\n.c-nav .c-search-msg {\r\n  color: #eeeeee;\r\n  margin-left: 13px;\r\n}\r\n.c-nav .c-sidebar-menu {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.c-nav .c-sidebar-menu a {\r\n  color: #eeeeee;\r\n  text-decoration: none;\r\n  border: 0px;\r\n}\r\n.c-nav .c-sidebar-menu > li {\r\n  position: relative;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.c-nav .c-sidebar-menu > li:hover >a {\r\n  color: #eeeeee;\r\n  border: 0px;\r\n}\r\n.c-nav .c-sidebar-menu > li.active >a {\r\n  color: #eeeeee;\r\n  border: 0px;\r\n}\r\n.c-nav .c-sidebar-menu > li > a {\r\n  padding: 8px 5px 8px 15px;\r\n  display: block;\r\n  border-left: 3px solid transparent;\r\n  color: #eeeeee;\r\n  border: 0px;\r\n}\r\n.c-nav .c-sidebar-menu > li > a:hover {\r\n  color: #fff;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  -moz-transition: 0.3s;\r\n  -o-transition: 0.3s;\r\n  cursor: pointer;\r\n  filter: alpha(opacity=35);\r\n  -moz-opacity: 0.35;\r\n  opacity: 0.35;\r\n  margin-left: 5px;\r\n}\r\n.c-nav .c-sidebar-menu > li > a > .fa {\r\n  width: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/common/sidermenu/sidebar-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * 左侧菜单组件
 */
var SidebarMenuComponent = /** @class */ (function () {
    /**
     * 构造方法
     */
    function SidebarMenuComponent() {
        //搜索文本
        this.searchTxt = '';
        //搜索隐藏
        this.searchMsgHidden = true;
    }
    /**
     * 初始化
     */
    SidebarMenuComponent.prototype.ngOnInit = function () {
        this.allData = this.data;
    };
    /**
     * 是否有子节点
     * @param item
     */
    SidebarMenuComponent.prototype.isLeaf = function (item) {
        return !item.children || !item.children.length;
    };
    /**
     * 点击
     * @param item
     */
    SidebarMenuComponent.prototype.itemClicked = function (item) {
        if (!this.isLeaf(item)) {
            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                var obj = _a[_i];
                if (obj.id != item.id) {
                    obj.isExpend = false;
                }
            }
            item.isExpend = !item.isExpend;
        }
    };
    /**
     * 查询菜单
     */
    SidebarMenuComponent.prototype.searchMenu = function () {
        var tempData = this.allData;
        this.searchTxt = this.searchTxt.trim();
        this.searchMsgHidden = true;
        if ('' != this.searchTxt) {
            var keyWord = new RegExp(this.searchTxt);
            var menuList = new Array();
            var menuIdList = new Array();
            for (var _i = 0, tempData_1 = tempData; _i < tempData_1.length; _i++) {
                var item = tempData_1[_i];
                this.searchItem(item, menuList, menuIdList, keyWord);
            }
            if (menuList.length > 0) {
                this.data = menuList;
            }
            else {
                this.searchMsgHidden = false;
            }
        }
        else {
            this.data = this.allData;
        }
    };
    /**
     * 查询子菜单
     * @param item
     * @param menuList
     */
    SidebarMenuComponent.prototype.searchItem = function (item, menuList, menuIdList, keyWord) {
        item.isExpend = false;
        //关键字匹配，并且不在列表中的
        if ((item.name.match(keyWord) || item.keyWord.match(keyWord)) && !this.checkSearchMenuIdExists(item.id, menuIdList)) {
            menuList.push(item);
            this.pushSearchMenu(item, menuIdList);
        }
        //存在子菜单的，递归子菜单
        var itemChildren = item.children;
        if (itemChildren && itemChildren.length > 0) {
            for (var _i = 0, itemChildren_1 = itemChildren; _i < itemChildren_1.length; _i++) {
                var subItem = itemChildren_1[_i];
                this.searchItem(subItem, menuList, menuIdList, keyWord);
            }
        }
    };
    /**
     * 添加查询的菜单
     * @param item
     * @param menuIdList
     */
    SidebarMenuComponent.prototype.pushSearchMenu = function (item, menuIdList) {
        menuIdList.push(item.id);
        var itemChildren = item.children;
        if (itemChildren && itemChildren.length > 0) {
            for (var _i = 0, itemChildren_2 = itemChildren; _i < itemChildren_2.length; _i++) {
                var subItem = itemChildren_2[_i];
                this.pushSearchMenu(subItem, menuIdList);
            }
        }
    };
    /**
     *
     * @param id 检查菜单id是否存在
     * @param menuIdList
     */
    SidebarMenuComponent.prototype.checkSearchMenuIdExists = function (id, menuIdList) {
        for (var _i = 0, menuIdList_1 = menuIdList; _i < menuIdList_1.length; _i++) {
            var menuId = menuIdList_1[_i];
            if (menuId == id) {
                return true;
            }
        }
        return false;
    };
    /**
     * 查询输入
     * @param event
     */
    SidebarMenuComponent.prototype.inputSearchTxt = function (event) {
        this.searchTxt = event.target.value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], SidebarMenuComponent.prototype, "data", void 0);
    SidebarMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'c-sidebar-menu',
            template: "\n  <div class=\"c-nav\" c-custom-scrollbar>\n    <span  class=\"c-search-msg\" [hidden]=\"searchMsgHidden\">\u641C\u7D22\u7684\u83DC\u5355\u4E0D\u5B58\u5728...</span>\n    <ul  class=\"c-sidebar-menu\" [hidden]=\"!searchMsgHidden\">\n        <li  *ngFor=\"let item of data\">\n            <a  (click)=\"itemClicked(item);\">\n              <i style=\"margin-top:3px;width:17px\" class=\"fa  pull-right\"  [ngClass]=\"{'fa-angle-down': !isLeaf(item) && item.isExpend, 'fa-angle-left': !isLeaf(item) && !item.isExpend}\"></i>\n              <i class=\"fa \" [ngClass]=\"item.icon\"></i> <span>{{item.name}}</span>\n              </a>\n            <c-treeview-menu [data]=\"item\"></c-treeview-menu>\n        </li>\n    </ul>\n  </div>\n  ",
            styles: [__webpack_require__("./src/app/components/common/sidermenu/sidebar-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMenuComponent);
    return SidebarMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/common/treeview/treeview-menu.component.css":
/***/ (function(module, exports) {

module.exports = ".c-treeview-menu {\r\n  /*display: none;*/\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  padding-left: 15px;\r\n}\r\n.c-treeview-menu .c-treeview-menu {\r\n  padding-left: 15px;\r\n}\r\n.c-treeview-menu > li {\r\n  margin: 0;\r\n  margin-left: 2px;\r\n  border-left: 1px solid #5bc0de;\r\n  padding-left: 5px;\r\n}\r\n.c-treeview-menu > li > .c-treeview-menu {\r\n  margin: 0 1px;\r\n}\r\n.c-treeview-menu > li > a {\r\n  padding: 5px 5px 8px 15px;\r\n  display: block;\r\n  color: #eeeeee;\r\n  border: 0px;\r\n}\r\n.c-treeview-menu > li > a:hover {\r\n  color: #ffffff;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  -moz-transition: 0.3s;\r\n  -o-transition: 0.3s;\r\n  cursor: pointer;\r\n  filter: alpha(opacity=35);\r\n  -moz-opacity: 0.35;\r\n  opacity: 0.35;\r\n  margin-left: 5px;\r\n}\r\n.c-treeview-menu > li > a > .fa {\r\n  width: 20px;\r\n}\r\n.c-treeview-menu li.active a {\r\n  color: #ffffff;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  -moz-transition: 0.3s;\r\n  -o-transition: 0.3s;\r\n  cursor: pointer;\r\n  filter: alpha(opacity=35);\r\n  -moz-opacity: 0.35;\r\n  opacity: 0.35;\r\n  margin-left: 5px;\r\n}\r\n.c-treeview-menu li.active > .c-treeview-menu {\r\n  display: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/common/treeview/treeview-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeviewMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_main_model__ = __webpack_require__("./src/app/components/common/menu/main-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 菜单树组件
 */
var TreeviewMenuComponent = /** @class */ (function () {
    function TreeviewMenuComponent(router) {
        this.router = router;
    }
    TreeviewMenuComponent.prototype.ngOnInit = function () {
    };
    /**
     * 是否有子节点
     * @param item
     */
    TreeviewMenuComponent.prototype.isLeaf = function (item) {
        return !item.children || !item.children.length;
    };
    /**
     * 点击
     * @param item
     */
    TreeviewMenuComponent.prototype.itemClicked = function (item) {
        if (!this.isLeaf(item)) {
            item.isExpend = !item.isExpend;
        }
        else {
            this.router.navigate([item.url]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__menu_main_model__["a" /* MenuData */])
    ], TreeviewMenuComponent.prototype, "data", void 0);
    TreeviewMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'c-treeview-menu',
            template: "\n    <ul class=\"c-treeview-menu\" [hidden]=\"!data.isExpend\"  *ngIf=\"!isLeaf(data)\">\n          <li *ngFor=\"let item of data.children\">\n              <a  (click)=\"itemClicked(item);\">\n                  <i class=\"fa \" [ngClass]=\"item.icon\"></i> <span>{{item.name}}</span>   \n                  <i style=\"margin-top:3px;width:17px\" class=\"fa  pull-right\"  [ngClass]=\"{'fa-angle-down': !isLeaf(item) && item.isExpend, 'fa-angle-left': !isLeaf(item) && !item.isExpend}\"></i>\n               </a>\n              <c-treeview-menu [data]=\"item\"></c-treeview-menu>\n          </li>\n    </ul>\n  ",
            styles: [__webpack_require__("./src/app/components/common/treeview/treeview-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], TreeviewMenuComponent);
    return TreeviewMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/designer/designer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/designer/designer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<designerdatagrid [txtConfigApi] = \"txtConfigApi\"></designerdatagrid>"

/***/ }),

/***/ "./src/app/components/designer/designer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesignerComponent = /** @class */ (function () {
    function DesignerComponent(route) {
        this.route = route;
    }
    DesignerComponent.prototype.ngOnInit = function () {
        this.txtConfigApi = this.route.routeConfig.path;
        if (!localStorage['token']) {
            this.route["navigate"](['login']);
        }
    };
    DesignerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-designer',
            template: __webpack_require__("./src/app/components/designer/designer.component.html"),
            styles: [__webpack_require__("./src/app/components/designer/designer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DesignerComponent);
    return DesignerComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "#login{\r\n\twidth:100%;\r\n\theight:100%;\r\n\toverflow: hidden;\r\n}\r\n\r\n.headers{\r\n\tdisplay:none !important;\r\n}\r\n\r\n.input-group{\r\n\twidth:400px;\r\n\theight:300px;\r\n\tborder-radius:20px;\r\n\tborder:1px solid #5bc0de;\r\n\tposition:fixed;\r\n\tleft:50%;\r\n\ttop:50%;\r\n\t-webkit-transform:translate(-50%,-50%);\r\n\t        transform:translate(-50%,-50%);\r\n}\r\n\r\n.form-control{\r\n\twidth:200px;\r\n}\r\n\r\n.input-group .login{\r\n\twidth:260px;\r\n\theight:30px;\r\n\tmargin:0 auto;\r\n\tmargin-top:50px;\r\n}\r\n\r\n.input-group .loginPaw{\r\n\twidth:260px;\r\n\theight:30px;\r\n\tmargin:0 auto;\r\n\tmargin-top:10px;\r\n}\r\n\r\n.input-group .login .loginInput{\r\n\tmargin-right:10px;\r\n\theight:30px;\r\n}\r\n\r\n.input-group .loginPaw .registerInput{\r\n\tmargin-right:10px !important;\r\n\theight:30px;\r\n}\r\n\r\n.input-group .login .username{\r\n\theight:30px;\r\n\twidth:200px;\r\n\tborder-radius:5px;\r\n\tborder:0 none;\r\n\toutline:none;\r\n\tborder:1px solid #666;\r\n\tpadding-left:12px;\r\n}\r\n\r\n.input-group .loginPaw .paw{\r\n\tmargin-right:10px !important;\r\n\theight:30px;\r\n\twidth:200px;\r\n\tborder-radius:5px;\r\n\tborder:0 none;\r\n\toutline:none;\r\n\tborder:1px solid #666;\r\n\tpadding-left:12px;\r\n}\r\n\r\n.input-group button{\r\n\tdisplay:block;\r\n\twidth:120px;\r\n\tborder-radius:5px;\r\n\tmargin-left:148px;\r\n\tmargin-top:30px;\r\n}\r\n\r\n.input-group>p{\r\n\twidth:100%;\r\n\ttext-align:center;\r\n\theight:50px;\r\n\tline-height:50px;\r\n\tfont-size:30px;\r\n}\r\n\r\n.modal-header{\r\n\theight:200px;\r\n}\r\n\r\n.modal-title{\r\n\tmargin:50px 150px !important;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"login\">\r\n\t<div class=\"input-group\">\r\n\t\t<p>Flipped后台管理系统</p>\r\n\t\t<div class=\"login\">\r\n\t\t  <span class=\"loginInput\">账号</span>\r\n\t\t  <input type=\"text\" class=\"username\"  name=\"name\"[(ngModel)]=\"name\" (blur) = \"testInput(template)\"/>\r\n\t\t</div>\r\n\t\t<div class=\"loginPaw\">\r\n\t\t  <span class=\"registerInput\">密码</span>\r\n\t\t  <input type=\"password\" class=\"paw\" name=\"pword\" [(ngModel)]=\"pword\" (blur) = \"testInput(template)\"/>\r\n\t\t</div>\r\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click) = \"loginIn(template)\">\r\n\t\t 登录\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n\r\n \r\n<ng-template #template>\r\n\t<!-- //登录弹窗 成功或者失败-->\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{loginState}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, modalService, route, router) {
        this.http = http;
        this.modalService = modalService;
        this.route = route;
        this.router = router;
        this.parentAttr = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.childrenEvent("dashboard");
    };
    LoginComponent.prototype.childrenEvent = function (val) {
        this.parentAttr.emit(val);
    };
    LoginComponent.prototype.loginIn = function (template) {
        var _this = this;
        //如果存在用户,跳转到主页
        var token = localStorage.getItem("token");
        if (token) {
            this.router.navigate(['/product']);
            return;
        }
        var user = this.name;
        var paw = this.pword;
        this.http.post("manageLoginIn", { username: user, password: paw }).then(function (loginfn) {
            if (loginfn["status"] == true) {
                localStorage.setItem("token", JSON.stringify({ username: user, password: paw }));
                _this.loginState = loginfn["data"];
                console.log(_this.router);
                _this.childrenEvent("dashboard");
                _this.router.navigate(['/product']);
                // this.openModal(template);
            }
            else {
                _this.loginState = loginfn["data"];
                _this.openModal(template);
            }
        });
    };
    LoginComponent.prototype.testInput = function (template) {
        this.input(template);
    };
    LoginComponent.prototype.input = function (template) {
        var user = this.name;
        var paw = this.pword;
        var customerReg = /^[a-zA-Z0-9]{6,16}$/;
        var passwordReg = /^[a-zA-Z0-9]{8,16}$/;
        if (user) {
            if (!customerReg.test(user)) {
                this.loginState = "用户名,6-16位数字字母";
                this.openModal(template);
            }
        }
        if (paw) {
            if (!passwordReg.test(paw)) {
                this.loginState = "密码,8-16位数字字母";
                this.openModal(template);
            }
        }
    };
    LoginComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
        // if(this.loginState == this.logintrue){
        // 	this.modalRef.hide();
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "parentAttr", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/order-datagrid/order-datagrid.component.css":
/***/ (function(module, exports) {

module.exports = "\nul,li{text-decoration: none;list-style: none;}\n.table tbody td{\n    text-align: center;\n    vertical-align: middle;\n}\n.table thead tr th{\n    text-align: center;\n}\n.fenye{\n    position:absolute;\n    left:50%;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n}\n.actived{\n    background-color: #728691 !important;\n}\n.btn-info{\n    /*width:200px;*/\n}\n.Mask{\n    background:#000000;\n    position:absolute;\n    opacity:0.6;\n    display:none;\n    z-index: 900;\n}\n.Popup{\n    display:none;\n    position:absolute;\n    width: 500px;\n    height: 480px;\n    border:1px solid #ccc;\n    background: #fff;\n    z-index: 1000;\n}\n.P_head{\n    height:40px;\n    line-height:40px;\n    padding-left:10px;\n    border-bottom:1px solid #ccc;\n    position:relative;\n    font-family:'微软雅黑';\n    font-size:18px;\n    cursor:move;\n    margin:0;\n}\n.P_del{\n    position:absolute;\n    right:10px;\n    top:10px;\n    font-weight:bold;\n    font-size:14px;\n    height:19px;\n    line-height: 19px;\n    text-align:center;\n    width:19px;\n    border:1px dashed #000;\n    cursor:pointer;\n}\n.P_del:hover{\n    background: #f00;\n    color:#fff;\n}\n.main{margin:0 auto;}\n.form-horizontal{text-align: center;margin:5px;height: 20px;}\n/*li p{display:inline-block;width: 100px;text-align:right;}*/\n/*li input{width: 300px;height: 20px;}*/\n.form-control{\n    display: block;\n    width: 100%;\n    height: 34px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n}\n.alert-success{\n    display:none;\n}\n.hide{\n    display:none !important;\n}\n"

/***/ }),

/***/ "./src/app/components/order-datagrid/order-datagrid.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataset\">\r\n    <div class=\"alert alert-success alert-dismissible\" role=\"alert\" [style.display] = \"a_display\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      <strong>恭喜你！</strong> 删除成功\r\n    </div>\r\n    <div class=\"alert alert-success alert-dismissible\" role=\"alert\" [style.display] = \"add_display\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n      <strong>恭喜你！</strong> 增加订单成功\r\n    </div>\r\n    <div class=\"Mask\" [style.display] = \"m_display\" [style.width.px] = \"m_width\" [style.height.px] = \"m_height\"></div>\r\n    <!-- <button type=\"button\" class=\"btn btn-info\">添加商品</button> -->\r\n    <div class=\"btn-group\">\r\n        <button type=\"button\" class=\"btn btn-info add\" (click)=\"add($event)\">添加订单</button>\r\n        <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <span class=\"caret\"></span>\r\n            <span class=\"sr-only\">Toggle Dropdown</span>\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\">添加一个订单</a></li>\r\n            <li><a href=\"#\">添加多个订单</a></li>\r\n            <li><a href=\"#\">其他</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Separated link</a></li>\r\n        </ul>\r\n    </div>\r\n    <button class=\"btn btn-danger\" (click)=\"batchDelete($event)\">批量删除</button>\r\n    <table class=\"table table-striped table-hover table-condensed\">\r\n        <thead>\r\n            <tr>\r\n                <th *ngIf=\"multiple\"><input type=\"checkbox\" [checked]=\"currentTrIndexs.length == dataset.length\" (click)=\"selectAll()\" /></th>\r\n                <ng-template ngFor let-key [ngForOf]=\"getKeys(dataset[0])\">\r\n                    <th *ngIf=\"(!columns[0] || columns.indexOf(key) > -1) && filterColumns.indexOf(key) < 0\">{{privateDic[common.lanType] && privateDic[common.lanType][key] ? privateDic[common.lanType][key] : common.publicDic[common.lanType][key] || key}}</th>\r\n                </ng-template>\r\n                <th>编辑</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let obj of dataset; let idx = index\" [class.actived] = \"currentTrIndexs && currentTrIndexs.indexOf(idx) > -1\" (click)=\"selectTr(idx)\" [id] = \"idx\" [class.hide] = \"remove.indexOf(idx) > -1\">\r\n                <td *ngIf=\"multiple\"><input type=\"checkbox\" [checked]=\"currentTrIndexs && currentTrIndexs.indexOf(idx) > -1\"/></td>\r\n                <ng-template ngFor let-key [ngForOf]=\"getKeys(obj)\">\r\n                    <td *ngIf=\"(!columns[0] || columns.indexOf(key) > -1) && filterColumns.indexOf(key) < 0\">{{filterData(key,obj[key])}}</td>\r\n                </ng-template>\r\n                <td><button class=\"btn btn-primary\" (click)=\"edit(idx)\">编辑</button><button class=\"btn btn-danger\" (click)=\"removes($event)\">删除</button></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class=\"Popup\" [style.display] = \"p_display\" [style.top.px] = \"p_top\" [style.left.px] = \"p_left\">\r\n        <h3 class=\"P_head\" (click)=\"del($event)\">\r\n            添加订单\r\n            <span class=\"P_del\" >&times;</span>\r\n        </h3>\r\n        <!-- <ul class=\"main\"> -->\r\n            <!-- <li *ngFor=\"let key of getKeys(dataset[0])\"> -->\r\n                <!-- <p *ngIf=\"(!columns[0] || columns.indexOf(key) > -1) && filterColumns.indexOf(key) < 0\">{{privateDic[common.lanType] && privateDic[common.lanType][key] ? privateDic[common.lanType][key] : common.publicDic[common.lanType][key] || key}}</p> -->\r\n                <form class=\"form-horizontal\">\r\n                    <div class=\"form-group\" *ngFor=\"let key of getKeys(dataset[0]); let idx = index\" >\r\n                        <label class=\"col-sm-2 control-label\" *ngIf=\"(!columns[0] || columns.indexOf(key) > -1) && filterColumns.indexOf(key) < 0\">{{privateDic[common.lanType] && privateDic[common.lanType][key] ? privateDic[common.lanType][key] : common.publicDic[common.lanType][key] || key}}</label>\r\n                        <div class=\"col-sm-10\">\r\n                          <input type=\"text\" class=\"form-control input\" placeholder=\"请输入相应的数据\"  ng-minlength=\"1\" [id]=\"idx\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button class=\"conserve btn btn-success\" (click)=\"addOrder($event)\">保存</button>\r\n                    </div>\r\n                </form>\r\n                \r\n            <!-- </li> -->\r\n        <!-- </ul> -->\r\n    </div>\r\n    <div *ngIf=\"paginationConfig\" (click)=\"goto($event)\" class=\"btn-group fenye\">\r\n        <!-- <input type=\"button\" [value]=\"i\" *ngFor=\"let i of [] | range:pageCount\" class=\"btn btn-default\" /> -->\r\n        <pagination-disabled [pageCount]=\"pageCount\"></pagination-disabled>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/order-datagrid/order-datagrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDatagridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDatagridComponent = /** @class */ (function () {
    function OrderDatagridComponent(http, common) {
        this.http = http;
        this.common = common;
        this.dataset = null;
        this.columns = null;
        this.filterColumns = null;
        this.currentTrIndexs = [];
        this.filterDataConfig = {};
        this.pageCount = 0;
        this.searchConfig = {};
        this.orderArr = [];
        this.params = {};
        this.remove = [];
    }
    OrderDatagridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.config, {}).then(function (configRes) {
            console.log(configRes);
            var cols = configRes['cols'];
            _this.columns = !cols || cols == "*" ? [] : cols.split(',');
            var filterCols = configRes['filterCols'];
            _this.filterColumns = !filterCols ? [] : filterCols.split(',');
            var dic = configRes['dictionary'];
            _this.privateDic = dic ? dic : {};
            _this.multiple = configRes['multiple'];
            _this.filterDataConfig = configRes['filterData'] || {};
            _this.paginationConfig = configRes['pagination'] || {};
            _this.apiConfig = configRes['apiOpt']['orderList'];
            _this.del_s = configRes['apiOpt']['del_s'];
            _this.del_m = configRes['apiOpt']['del_m'];
            _this.addorder = configRes['apiOpt']['add'];
            _this.apiRequest();
            _this.Masked();
        });
    };
    // @HostListener('window:resize',['$event'])
    // onResize(event){
    //     this.Masked();
    //     this.centShow();
    // }
    //封一个登录框居中函数
    OrderDatagridComponent.prototype.centShow = function () {
        var Popup = document.querySelector('.Popup');
        var top = 140;
        var left = 500;
        this.p_top = top;
        this.p_left = left;
    };
    OrderDatagridComponent.prototype.Masked = function () {
        this.m_height = 560;
        this.m_width = 1100;
    };
    OrderDatagridComponent.prototype.del = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.classList.contains('P_del')) {
            this.m_display = 'none';
            this.p_display = 'none';
        }
    };
    OrderDatagridComponent.prototype.batchDelete = function (event) {
        var _this = this;
        this.multiple = true;
        event.target.innerText = '确认删除';
        var trs = document.querySelectorAll('tbody tr');
        if (this.currentTrIndexs.length >= 2) {
            this.orderArr = [];
            this.currentTrIndexs.map(function (item) {
                for (var i = 0; i < trs.length; i++) {
                    if (trs[i].id == item) {
                        var orderId = trs[i].children[1]['innerText'];
                        _this.orderArr.push(orderId);
                    }
                }
            });
            this.params['orderArr'] = this.orderArr;
            this.http.post(this.del_m, this.params).then(function (res) {
                console.log(res);
                _this.remove = _this.currentTrIndexs;
                _this.multiple = false;
                event.target.innerText = '批量删除';
            });
        }
        else {
            alert('请勾选至少两条要删除的数据');
        }
    };
    // window.onresize = function(){
    //     this.Masked()
    //     this.centShow()
    // }
    /*window.onresize = function(){
        this.Masked();
        this.centShow();
    }*/
    OrderDatagridComponent.prototype.add = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.classList.contains('add')) {
            this.m_display = 'block';
            this.p_display = 'block';
            this.centShow();
        }
    };
    OrderDatagridComponent.prototype.trackByFn = function (idx) {
        return idx;
    };
    OrderDatagridComponent.prototype.addOrder = function (event) {
        var _this = this;
        var inputs = document.querySelectorAll('.input');
        var order_id;
        var product_id;
        var cart_id;
        var order_status;
        var user_id;
        var product_qty;
        var size_type;
        var color;
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i]['value'] == '') {
                alert('输入的值不能为空');
            }
            else {
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
        console.log(inputs, order_id, product_id, cart_id, order_status, user_id, product_qty, size_type, color);
        var obj = {};
        var arr_item = [];
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
        this.http.post(this.addorder, { arr_item: arr_item }).then(function (res) {
            console.log(res);
            _this.m_display = 'none';
            _this.p_display = 'none';
            _this.add_display = 'block';
        });
    };
    OrderDatagridComponent.prototype.removes = function (event) {
        var _this = this;
        var target = event.target;
        var order_id = target.parentElement.parentElement.children[0].innerText;
        var orderParams = {};
        orderParams['order_id'] = order_id;
        // orderParams = JSON.stringify(orderParams);
        this.http.post(this.del_s, orderParams).then(function (res) {
            console.log(res);
            _this.a_display = 'block';
            var tr = target.parentElement.parentElement;
            tr.parentElement.removeChild(tr);
        });
    };
    OrderDatagridComponent.prototype.justify = function (event) {
        var val = event.target.value;
        // if(!/\S{1,}$/.test(val)){
        //     alert('输入不合法');
        // }
    };
    OrderDatagridComponent.prototype.edit = function (_idx) {
        // Mask.style.display = 'block';
        // Popup.style.display = 'block';
        // centShow();
    };
    OrderDatagridComponent.prototype.apiRequest = function (_page) {
        var _this = this;
        if (_page === void 0) { _page = 1; }
        var pageParams = {};
        if (this.paginationConfig) {
            pageParams['pageitems'] = this.paginationConfig['pageitems'];
            pageParams['page'] = _page;
        }
        //配置信息中的api
        this.http.get(this.apiConfig, pageParams).then(function (apiRes) {
            console.log(apiRes);
            if (apiRes['data']['results'].length <= 2) {
                _this.dataset = apiRes['data']['results'][0];
                var rowsCount = apiRes['data']['results'][1][0]['rowscount'];
                var pageItems = _this.paginationConfig['pageitems'];
                _this.pageCount = Math.ceil(rowsCount / pageItems);
                //console.log(this.pageCount)
            }
            else {
                _this.dataset = apiRes['data']['results'];
            }
            //console.log(pageItems,this.pageCount)
        });
    };
    OrderDatagridComponent.prototype.getKeys = function (item) {
        return Object.keys(item);
    };
    OrderDatagridComponent.prototype.selectTr = function (_idx) {
        if (this.multiple) {
            if (this.currentTrIndexs.indexOf(_idx) > -1) {
                this.currentTrIndexs.splice(this.currentTrIndexs.indexOf(_idx), 1);
            }
            else {
                this.currentTrIndexs.push(_idx);
            }
        }
        else {
            this.currentTrIndexs = [_idx];
        }
        console.log(this.currentTrIndexs);
    };
    OrderDatagridComponent.prototype.selectAll = function () {
        if (this.currentTrIndexs.length != this.dataset.length) {
            this.currentTrIndexs = [];
            for (var i = 0; i < this.dataset.length; i++) {
                this.currentTrIndexs.push(i);
            }
        }
        else {
            this.currentTrIndexs = [];
        }
    };
    OrderDatagridComponent.prototype.filterData = function (_key, _val) {
        //console.log(this.filterDataConfig);
        var _config = this.filterDataConfig[_key];
        if (!_config) {
            return _val;
        }
        else if (_config.type == "DateFormat") {
            //return Utils.dateFormat(new Date(_val), _config.format);
        }
        else if (_config.type == "Replace") {
            _val = String(_val);
            var reg = new RegExp(_config.reg);
            return _val.replace(reg, _config.replaceVal);
        }
    };
    OrderDatagridComponent.prototype.fanye = function (lis) {
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains('active')) {
                var page = parseInt(lis[i].children[0].innerText);
                this.apiRequest(page);
            }
        }
    };
    OrderDatagridComponent.prototype.goto = function (event) {
        var target = event.target;
        if (target.tagName.toLowerCase() == 'a' && !target.parentElement.classList.contains('disabled') && !target.getAttribute('aria-label')) {
            var page = parseInt(event.target.innerText);
            this.apiRequest(page);
        }
        else if (target.getAttribute('aria-hidden') == 'true' && target.innerText == '«' && !target.parentElement.parentElement.classList.contains('disabled')) {
            var lis = target.parentElement.parentElement.parentElement.children;
            console.log(lis);
            this.fanye(lis);
        }
        else if (target.getAttribute('aria-label') == 'Previous' && !target.parentElement.classList.contains('disabled')) {
            var lis = target.parentElement.parentElement.children;
            console.log(lis);
            this.fanye(lis);
        }
        else if (target.getAttribute('aria-hidden') == 'true' && target.innerText == '»' && !target.parentElement.parentElement.classList.contains('disabled')) {
            var lis = target.parentElement.parentElement.parentElement.children;
            console.log(lis);
            this.fanye(lis);
        }
        else if (target.getAttribute('aria-label') == 'Next' && !target.parentElement.classList.contains('disabled')) {
            var lis = target.parentElement.parentElement.children;
            console.log(lis);
            this.fanye(lis);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], OrderDatagridComponent.prototype, "config", void 0);
    OrderDatagridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'order-datagrid',
            template: __webpack_require__("./src/app/components/order-datagrid/order-datagrid.component.html"),
            styles: [__webpack_require__("./src/app/components/order-datagrid/order-datagrid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */]])
    ], OrderDatagridComponent);
    return OrderDatagridComponent;
}());



/***/ }),

/***/ "./src/app/components/order/order.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<order-datagrid config=\"config/order.txt\"></order-datagrid>\r\n"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderComponent = /** @class */ (function () {
    function OrderComponent(router) {
        this.router = router;
    }
    OrderComponent.prototype.ngOnInit = function () {
        console.log(localStorage['token'], this.router);
        if (!localStorage['token']) {
            this.router.navigate(['login']);
        }
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order',
            template: __webpack_require__("./src/app/components/order/order.component.html"),
            styles: [__webpack_require__("./src/app/components/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  pagenotfound works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagenotfound',
            template: __webpack_require__("./src/app/components/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__("./src/app/components/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/product-datagrid/product-datagrid.component.css":
/***/ (function(module, exports) {

module.exports = ".top-product{\r\n\twidth: 100%;\r\n\theight: 50px;\r\n}\r\n.pro-search{\r\n\tposition: absolute;\r\n\ttop: 60px;\r\n\tleft: 500px;\r\n}\r\n.product-add{\r\n\tposition: absolute;\r\n\ttop: 60px;\r\n\tright: 150px;\r\n\tz-index:2;\r\n}\r\n.product-delete-some{\r\n\tposition: absolute;\r\n\ttop: 60px;\r\n\tright: 250px;\r\n\tz-index:2;\r\n}\r\n.product-datagrid{\r\n\twidth: 1100px;\r\n\theight: 420px;\r\n\toverflow: hidden;\r\n}\r\n.product-datagrid table {\r\n\twidth: 100%;\r\n\theight: 400px;\r\n\tbackground: #fff;\r\n}\r\n.product-datagrid table thead tr th{\r\n\ttext-align: center;\r\n\tmax-height: 10px;\r\n}\r\n.product-datagrid table tr {\r\n\theight: 10px;\r\n}\r\n.product-datagrid table tbody tr td{\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\ttext-align: center;\r\n\theight: 10px;\r\n\twidth: 20px;\r\n\tpadding: 0;\t\r\n}\r\n.product-datagrid table tbody tr td img{\r\n\tdisplay: inline-block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n.product-datagrid tr.actived{\r\n\tbackground: #3c8dbc;\r\n}\r\n.product-pagination{\r\n\tmargin-top: 20px;\r\n}\r\n.product-msg{\r\n\tposition: absolute;\r\n\ttop: 25%;\r\n\tleft: 50%;\r\n\t/*transform: translate(-50%,-50%);*/\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/product-datagrid/product-datagrid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top-product\">\r\n\t<div class=\"product-add\">\r\n\t<button type=\"button\" data-toggle=\"modal\" data-target=\"#add-product\" class=\"btn btn-primary\">添加商品</button>\r\n\t</div>\r\n\t<div class=\"product-delete-some\">\r\n\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteSome()\">批量删除商品</button>\r\n\t</div>\r\n\t<div class=\"pro-search\">\r\n\t\t<form class=\"bs-example bs-example-form\" role=\"form\">\r\n\t        <div class=\"row\">\r\n\t            <div class=\"col-lg-6\">\r\n\t                <div class=\"input-group\">\r\n\t                    <input type=\"text\" class=\"form-control search-key\" placeholder=\"搜索商品名字，类型，品牌，介绍.....\">\r\n\t                    <span class=\"input-group-btn\">\r\n\t                        <button class=\"btn btn-default\" type=\"button\" (click)=\"searchProduct()\">查询</button>\r\n\t                    </span>\r\n\t                </div><!-- /input-group -->\r\n\t            </div><!-- /.col-lg-6 -->\r\n\t        </div><!-- /.row -->\r\n\t    </form>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"product-datagrid\" *ngIf=\"dataset\">\r\n\t<table  class=\"table table-bordered\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th *ngIf=\"multiple\"><input type=\"checkbox\" [checked]=\"currentTrs.length === dataset.length\" (click)=\"selectAll()\"/></th>\r\n\t\t\t\t<ng-template ngFor let-key let-idx=\"index\" [ngForOf]=\"getKeys(dataset[0])\" [ngForTrackBy]=\"trackByFn\"> \r\n\t\t\t\t\t<!--publicDic[store.lanType][key] || key字典中没有的字段就设置为数据的默认字段-->\r\n\t\t\t\t\t<th *ngIf=\"(!columns[0] || columns.indexOf(key) > -1) && filterColumns.indexOf(key) < 0\">{{privateDic[common.lanType] && privateDic[common.lanType][key]? privateDic[common.lanType][key] : common.publicDic[common.lanType][key] || key}}</th>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<th>操作</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor=\"let obj of dataset;trackBy:trackByFn\" [class.actived] = \"currentTrs && currentTrs.indexOf(obj[hideColumns])>-1\"  [attr.proid]=\"obj[hideColumns]\" (click)=\"selectTr(obj[hideColumns],$event)\">\r\n\t\t\t\t<td *ngIf=\"multiple\"><input type=\"checkbox\" [checked]=\"currentTrs && currentTrs.indexOf(obj[hideColumns])>-1\"/></td>\r\n\t\t\t\t<ng-template ngFor let-key [ngForOf]=\"getKeys(obj)\">\r\n\t\t\t\t\t<td *ngIf=\"((!columns[0] || columns.indexOf(key) > -1) && filterColumns.indexOf(key) < 0) && (key != 'product_img')\">{{filterData(key,obj[key])}}</td>\r\n\t\t\t\t\t<td *ngIf=\"((!columns[0] || columns.indexOf(key) > -1) && filterColumns.indexOf(key) < 0) && (key == 'product_img')\">\r\n\t\t\t\t\t\t<img [src]=\"obj['product_img']\" [alt]=\"obj['product_title']\" />\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<button class=\"btn btn-default btn-sm\" value=\"修改\" data-toggle=\"modal\" data-target=\"#change-product\" (click)=\"changeProduct($event)\">修改</button>\r\n\t\t\t\t\t<button class=\"btn btn-default btn-sm\" data-toggle=\"modal\" data-target=\"#delete-product\" value=\"删除\" (click)=\"getId($event)\">删除</button>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n<div class=\"product-pagination\" *ngIf=\"paginationConfig\">\r\n\t\t<nav aria-label=\"Page navigation\" class=\"clearfix\">\r\n     <ul class=\"pagination pagination-sm pagination1 fr\" style=\"margin: 0\">\r\n       <li [class.disabled]=\"page==1\">\r\n         <a href=\"javascript:void(0)\" aria-label=\"Previous\" (click)=\"sub(page-1<1?1:page-1)\">\r\n          <span aria-hidden=\"true\">&laquo;</span>\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"page >= pageNum && lastPage !== pageNum\" (click)=\"sub(1)\" [class.active]=\"item==1\">\r\n         <a href=\"javascript:void(0)\">1</a>\r\n       </li>\r\n       <li *ngIf=\"page >= pageNum && lastPage !== pageNum\">\r\n         <a href=\"javascript:void(0)\">...</a>\r\n       </li>\r\n      <li (click)=\"sub(item)\" [class.active]=\"item==page\" *ngFor=\"let item of pages\">\r\n         <a href=\"javascript:void(0)\">{{item}}</a>\r\n       </li>\r\n       <li *ngIf=\"lastPage > pageNum && firstPage <= lastPage - pageNum\">\r\n         <a href=\"javascript:void(0)\">...</a>\r\n       </li>\r\n       <li *ngIf=\"lastPage > pageNum && firstPage <= lastPage - pageNum\" (click)=\"sub(lastPage)\" [class.active]=\"item==page\">\r\n         <a href=\"javascript:void(0)\">{{lastPage}}</a>\r\n       </li>\r\n       <li [class.disabled]=\"page==lastPage\">\r\n         <a href=\"javascript:void(0)\" aria-label=\"Next\" (click)=\"sub(page+1>lastPage?page:page+1)\">\r\n          <span aria-hidden=\"true\">&raquo;</span>\r\n         </a>\r\n       </li>\r\n     </ul>\r\n     <span>共{{rowsCount}}件商品，{{pageCount}}页</span>\r\n  </nav>\r\n</div>\r\n<!--删除模态框-->\r\n<div class=\"modal fade\" id=\"delete-product\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">确认信息</h4>\r\n            </div>\r\n            <div class=\"modal-body\">确认要删除ID为'{{productID}}'的商品吗？</div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteProduct(productID)\">确定</button>\r\n            </div>\r\n        </div><!-- /.modal-content -->\r\n    </div><!-- /.modal -->\r\n</div>\r\n<!--请求成功后提示-->\r\n<div class=\"product-msg\" >\r\n\t<div *ngIf=\"productStatus.status\" class=\"alert alert-success\">\r\n\t    <a class=\"close\" data-dismiss=\"alert\">\r\n\t        &times;\r\n\t    </a>\r\n\t    <strong>成功！</strong>已删除商品。\r\n\t</div>\r\n\t<div *ngIf=\"productStatus['status'] == false\" class=\"alert alert-danger\">\r\n\t    <a class=\"close\" data-dismiss=\"alert\">\r\n\t        &times;\r\n\t    </a>\r\n\t    <strong>失败！</strong>请稍后重试。\r\n\t</div>\r\n\t<!--<div *ngIf=\"productStatus['status']\" class=\"alert alert-danger\">\r\n\t    <a class=\"close\" data-dismiss=\"alert\">\r\n\t        &times;\r\n\t    </a>\r\n\t    <strong>换个词吧，亲。</strong>无相关数据。\r\n\t</div>-->\r\n\t<div *ngIf=\"currentTrsStatus\" class=\"alert alert-danger\">\r\n\t    <a class=\"close\" data-dismiss=\"alert\">\r\n\t        &times;\r\n\t    </a>\r\n\t    <span>请至少选中1条数据。</span>\r\n\t</div>\r\n</div>\r\n<!--添加商品信息-->\r\n<div class=\"modal fade\" id=\"add-product\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n\t<app-productchangeform [api]=\"'productForm.txt'\" [handlePro]=\"'add'\"></app-productchangeform>\r\n</div>\r\n<!--修改商品信息-->\r\n<div class=\"modal fade\" id=\"change-product\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n\t<app-productchangeform [api]=\"'productForm.txt'\" [handlePro]=\"'change'\" [productChange]=\"productChange\"></app-productchangeform>\r\n<!--    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">修改商品信息</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n            \t<form role=\"form\" *ngFor=\"let obj of productChange;let idx = index;trackBy:trackByFn\">\r\n\t\t\t\t  <div class=\"form-group\" *ngFor=\"let key of getKeys(obj)\">\r\n\t\t\t\t    <label for=\"name\">{{key}}</label>\r\n\t\t\t\t    <input type=\"text\" class=\"form-control\" id=\"name\" [value]=\"obj[key]\"/>\r\n\t\t\t\t  </div>\r\n\t\t\t\t</form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">确定</button>\r\n            </div>\r\n        </div>\r\n    </div>-->\r\n</div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/components/product-datagrid/product-datagrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDatagridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__("./src/app/utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDatagridComponent = /** @class */ (function () {
    function ProductDatagridComponent(http, common) {
        this.http = http;
        this.common = common;
        this.dataset = null;
        this.columns = null;
        this.filterColumns = null;
        this.hideColumns = null;
        this.searchConfig = {};
        this.filterDataConfig = null;
        this.paginationConfig = {};
        this.currentTrs = [];
        this.privateDic = {};
        this.firstPage = 1;
        this.pageNum = 1;
        this.page = 1;
        this.productStatus = {};
        this.productChange = {};
        this.productStatusTwo = {};
        this.proidArr = [];
        this.pageParams = {};
        this.searchClick = false;
    }
    ProductDatagridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.config).then(function (configRes) {
            //需要显示的条件
            var cols = configRes['cols'];
            _this.columns = !cols || cols == '*' ? [] : cols.split(',');
            var filterCols = configRes['filterCols'];
            _this.filterColumns = !filterCols ? [] : filterCols.split(',');
            _this.hideColumns = configRes['hideCols'];
            _this.multiple = configRes['multiple'];
            _this.searchConfig = configRes['search'] || {};
            _this.filterDataConfig = configRes['filterData'] || {};
            _this.paginationConfig = configRes['pagination'] || {};
            var dic = configRes['dictionary'];
            _this.privateDic = dic || {};
            _this.apiConfig = configRes['api'];
            _this.apiRequest();
        });
    };
    ProductDatagridComponent.prototype.apiRequest = function (_page) {
        var _this = this;
        if (_page === void 0) { _page = 1; }
        this.pageParams = {};
        if (this.paginationConfig) {
            this.pageParams['pageitems'] = this.paginationConfig['pageitems'];
            this.pageParams['page'] = _page;
        }
        var keyword = $('.search-key').val() || '';
        this.pageParams['keyWords'] = keyword;
        //通过配置文件获取api
        this.http.get(this.apiConfig, this.pageParams).then(function (res) {
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
            if (res['status'] && res['data']['results'][0].length > 0) {
                _this.dataset = res['data']['results'][0];
                _this.productStatusTwo = { "status": res['status'] };
                _this.pageItems = _this.paginationConfig['pageitems'];
                _this.rowsCount = res['data']['results'][1][0]['rowsCount'];
                _this.pageCount = Math.ceil(_this.rowsCount / _this.pageItems);
                if (_this.pageCount <= 6) {
                    _this.pageNum = _this.pageCount;
                    _this.setPage(_this.rowsCount, _this.pageItems, _this.pageNum, _this.firstPage);
                }
                else if (_this.pageCount > 6) {
                    _this.pageNum = 6;
                    _this.setPage(_this.rowsCount, _this.pageItems, _this.pageNum, _this.firstPage);
                }
                if (_this.searchClick) {
                    console.log('是否走这里面看看罗');
                    _this.page = 1;
                    _this.lastPage = _this.pageCount;
                    _this.searchClick = false;
                }
                console.log('请求pagespagespagespagespages', _this.searchClick, _this.pages, _this.pageNum, _this.page, _this.lastPage);
            }
            else {
                _this.productStatusTwo = { "status": false };
            }
        });
    };
    ProductDatagridComponent.prototype.getKeys = function (item) {
        return Object.keys(item);
    };
    ProductDatagridComponent.prototype.trackByFn = function (idx) {
        return idx;
    };
    //选中tr
    ProductDatagridComponent.prototype.selectTr = function (_idx, event) {
        var target = event.target.tagName;
        if (target.toLowerCase() != 'button') {
            if (this.multiple) {
                if (this.currentTrs.indexOf(_idx) > -1) {
                    this.currentTrs.splice(this.currentTrs.indexOf(_idx), 1);
                }
                else {
                    this.currentTrs.push(_idx);
                }
            }
            else {
                this.currentTrs = [_idx];
            }
        }
    };
    //全选
    ProductDatagridComponent.prototype.selectAll = function () {
        if (this.currentTrs.length != this.dataset.length) {
            this.currentTrs = [];
            for (var i = 0; i < this.dataset.length; i++) {
                this.currentTrs.push(this.dataset[i]['product_id']);
            }
        }
        else {
            this.currentTrs = [];
        }
    };
    //格式化数据
    ProductDatagridComponent.prototype.filterData = function (_key, _val) {
        var _config = this.filterDataConfig[_key];
        if (!_config) {
            return _val;
        }
        else if (_config.type == 'DateFormat') {
            return __WEBPACK_IMPORTED_MODULE_2__utils_utils__["a" /* Utils */].dateFormat(new Date(_val), _config.format);
        }
        else if (_config.type == "Replace") {
            var reg = new RegExp(_config.reg);
            return _val.replace(reg, _config.replaceVal);
        }
    };
    ProductDatagridComponent.prototype.setPage = function (length, amount, num, first) {
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
    };
    ProductDatagridComponent.prototype.sub = function (page) {
        var amount = this.rowsCount; //数据总条数
        var each = this.pageItems; //每页显示的条数
        this.lastPage = Math.ceil(amount / each);
        if (page >= this.pageNum) {
            this.firstPage = page - Math.floor(this.pageNum / 2);
        }
        else {
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
        console.log('点击pagespagespagespagespages', this.searchClick, this.pages, this.pageNum, this.page, this.lastPage);
    };
    ProductDatagridComponent.prototype.getId = function (event) {
        event.preventDefault();
        var target = event.target;
        var product_id = target.parentElement.parentElement.getAttribute('proid');
        this.productID = product_id;
        return product_id;
    };
    //点击修改
    ProductDatagridComponent.prototype.changeProduct = function (event) {
        var _this = this;
        var pro_id = this.getId(event);
        this.http.get('product_id', { "product_id": pro_id }).then(function (res) {
            _this.productChange = res['data']['results'][0];
        });
    };
    ProductDatagridComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.http.post('deleteproduct', { "product_id": id }).then(function (res) {
            _this.productStatus = { "status": res['status'] };
        });
        //删除节点
        var len = this.dataset.length;
        for (var m = 0; m < len; m++) {
            if (this.dataset[m]['product_id'] == id) {
                this.dataset.splice(m, 1);
                break;
            }
        }
    };
    ProductDatagridComponent.prototype.deleteSome = function () {
        var _this = this;
        if (this.currentTrs.length <= 0) {
            this.currentTrsStatus = true;
        }
        else {
            var len1 = this.dataset.length;
            var len2 = this.currentTrs.length;
            var cutArr = [];
            for (var a = 0; a < len2; a++) {
                for (var b = 0; b < len1; b++) {
                    if (this.currentTrs[a] == this.dataset[b]['product_id']) {
                        cutArr.push(b);
                    }
                }
            }
            for (var c = 0; c < cutArr.length; c++) {
                this.dataset.splice(cutArr[c], 1);
            }
            console.log('currentTrscurrentTrscurrentTrs', typeof this.currentTrs);
            this.http.post('deleteproduct_some', { "product_id": this.currentTrs }).then(function (res) {
                _this.productStatus = { "status": res['status'] };
                console.log('productStatusproductStatusproductStatus', res, _this.productStatus);
                if (_this.productStatus) {
                    _this.currentTrs = [];
                }
            });
            if (len1 == len2) {
                this.apiRequest();
                //    	this.page = 1;
            }
        }
    };
    ProductDatagridComponent.prototype.searchProduct = function () {
        this.apiRequest();
        this.searchClick = true;
        console.log('搜索pagespagespagespagespages', this.searchClick, this.pages, this.pageNum, this.page, this.lastPage);
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProductDatagridComponent.prototype, "config", void 0);
    ProductDatagridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-datagrid',
            template: __webpack_require__("./src/app/components/product-datagrid/product-datagrid.component.html"),
            styles: [__webpack_require__("./src/app/components/product-datagrid/product-datagrid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */]])
    ], ProductDatagridComponent);
    return ProductDatagridComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-content\">\r\n\t<app-product-datagrid config=\"productConfig.txt\"></app-product-datagrid>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    ProductComponent.prototype.ngOnInit = function () {
        console.log(localStorage['token'], this.router);
        if (!localStorage['token']) {
            this.router.navigate(['login']);
        }
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/components/product/product.component.html"),
            styles: [__webpack_require__("./src/app/components/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/productchangeform/productchangeform.component.css":
/***/ (function(module, exports) {

module.exports = ".product-msg{\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 30%;\r\n}\r\n.product-img{\r\n\twidth: 80px;\r\n\theight: 80px;\r\n}\r\n.product-img img{\r\n\tdisplay: inline-block;\r\n\twidth: 80px;\r\n\theight: 80px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/productchangeform/productchangeform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            <h4 *ngIf=\"handlePro == 'add'\" class=\"modal-title\" id=\"myModalLabel\">添加商品信息</h4>\r\n            <h4 *ngIf=\"handlePro == 'change'\" class=\"modal-title\" id=\"myModalLabel\">修改商品信息</h4>\r\n        </div>\r\n        <form  class=\"add-form\" #proForm=\"ngForm\" (ngSubmit)=\"onSubmit(proForm.value)\">\r\n        \t<div class=\"modal-body\">\r\n        \t\t<div class=\"product-msg\" (click)=\"emptyForm()\">\r\n\t\t\t\t\t<div class=\"alert alert-success\" data-dismiss=\"modal\"  *ngIf=\"addproductStatus.status\">\r\n\t\t\t\t\t    <a class=\"close\" data-dismiss=\"alert\" >\r\n\t\t\t\t\t        &times;\r\n\t\t\t\t\t    </a>\r\n\t\t\t\t\t    <span *ngIf=\"handlePro == 'add'\"><strong >成功！</strong>已添加商品。</span>\r\n\t\t\t\t\t    <span *ngIf=\"handlePro == 'change'\"><strong >成功！</strong>已修改商品。</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"addproductStatus['status'] == false\" class=\"alert alert-danger\">\r\n\t\t\t\t\t    <a class=\"close\" data-dismiss=\"alert\">\r\n\t\t\t\t\t        &times;\r\n\t\t\t\t\t    </a>\r\n\t\t\t\t\t    <strong>失败！</strong>请稍后重试。\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n        \t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t    <label for=\"product_title\">产品名称</label>\r\n\t\t\t\t\t\t    <input *ngIf=\"handlePro == 'add'\" ng-minlength=\"1\" required type=\"text\" class=\"form-control\"  name=\"product_title\" ngModel  #product_title=\"ngModel\"/>\r\n\t\t\t\t\t\t    <input *ngIf=\"handlePro == 'change'\" [value]=\"productChange['product_title']\" ng-minlength=\"1\" required type=\"text\" class=\"form-control\"  name=\"product_title\" ngModel  #product_title=\"ngModel\"/>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t    <label for=\"price\">价钱</label>\r\n\t\t\t\t\t\t    <input *ngIf=\"handlePro == 'add'\" ng-minlength=\"1\" required type=\"text\" class=\"form-control\"  name=\"price\" ngModel  #price=\"ngModel\"/>\r\n\t\t\t\t\t\t    <input *ngIf=\"handlePro == 'change'\" [value]=\"productChange['price']\" ng-minlength=\"1\" required type=\"text\" class=\"form-control\"  name=\"price\" ngModel  #price=\"ngModel\"/>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t    <label for=\"postage\">邮费</label>\r\n\t\t\t\t\t\t    <input *ngIf=\"handlePro == 'add'\" ng-minlength=\"1\" required type=\"text\" class=\"form-control\" name=\"postage\" ngModel  #postage=\"ngModel\"/>\r\n\t\t\t\t\t\t    <input *ngIf=\"handlePro == 'change'\" [value]=\"productChange['postage']\" ng-minlength=\"1\" required type=\"text\" class=\"form-control\"  name=\"postage\" ngModel  #postage=\"ngModel\"/>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t    <label for=\"brand\">品牌</label>\r\n\t\t\t\t\t\t    <input *ngIf=\"handlePro == 'add'\" ng-minlength=\"1\" required type=\"text\" class=\"form-control\"  name=\"brand\" ngModel  #brand=\"ngModel\"/>\r\n\t\t\t\t\t\t    <input *ngIf=\"handlePro == 'change'\" [value]=\"productChange['brand']\" ng-minlength=\"1\" required type=\"text\" class=\"form-control\"  name=\"brand\" ngModel  #brand=\"ngModel\"/>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t    <label for=\"repertory\">库存</label>\r\n\t\t\t\t\t\t    <input *ngIf=\"handlePro == 'add'\" ng-minlength=\"1\" required type=\"text\" class=\"form-control\"  name=\"repertory\" ngModel  #repertory=\"ngModel\"/>\r\n\t\t\t\t\t\t    <input *ngIf=\"handlePro == 'change'\" [value]=\"productChange['repertory']\" ng-minlength=\"1\" required type=\"text\" class=\"form-control\"  name=\"repertory\" ngModel  #repertory=\"ngModel\"/>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <!--<div class=\"form-group\">\r\n\t\t\t\t\t\t    <label for=\"product_img\">产品图片</label>\r\n\t\t\t\t\t\t    <input type=\"file\" class=\"proimg\"  name=\"product_img\" ngModel  #product_img=\"ngModel\"/>\r\n\t\t\t\t\t\t  </div>-->\r\n\t\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t    <label for=\"descrition\">商品描述</label>\r\n\t\t\t\t\t\t    <textarea *ngIf=\"handlePro == 'add'\" required class=\"form-control\"  name=\"descrition\" ngModel  #descrition=\"ngModel\"></textarea>\r\n\t\t\t\t\t\t    <textarea *ngIf=\"handlePro == 'change'\" [value]=\"productChange['descrition']\" required class=\"form-control\"  name=\"descrition\" ngModel  #descrition=\"ngModel\"></textarea>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"checkbox\">\r\n\t\t\t\t\t\t    <label>\r\n\t\t\t\t\t\t      <input [checked]=\"productChange != {} && productChange['discount'] == '3'\" type=\"checkbox\" name=\"discount\" ngModel  #discount=\"ngModel\"/>折扣\r\n\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"checkbox\">\r\n\t\t\t\t\t\t    <label>\r\n\t\t\t\t\t\t      <input [checked]=\"productChange != {} && productChange['return_goods'] == '2'\" type=\"checkbox\" name=\"return_goods\" ngModel  #return_goods=\"ngModel\"/>可退货\r\n\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"checkbox\">\r\n\t\t\t\t\t\t    <label>\r\n\t\t\t\t\t\t      <input [checked]=\"productChange != {} && productChange['popurlar'] == '1'\" type=\"checkbox\" name=\"popurlar\" ngModel  #popurlar=\"ngModel\"/>热门商品\r\n\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"checkbox\">\r\n\t\t\t\t\t\t    <label>\r\n\t\t\t\t\t\t      <input [checked]=\"productChange != {} && productChange['delivery'] == '4'\" type=\"checkbox\" name=\"delivery\" ngModel  #delivery=\"ngModel\"/>快速发货\r\n\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t   <div class=\"form-group\">\r\n\t\t\t\t\t\t    <label for=\"type\">商品类型</label>\r\n\t\t\t\t\t\t    <select ng-minlength=\"1\" required class=\"form-control\" name=\"type\" ngModel  #type=\"ngModel\">\r\n\t\t\t\t\t\t      <option>女人</option>\r\n\t\t\t\t\t\t      <option>男人</option>\r\n\t\t\t\t\t\t      <option>生活家居</option>\r\n\t\t\t\t\t\t      <option>箱包</option>\r\n\t\t\t\t\t\t      <option>礼物</option>\r\n\t\t\t\t\t\t      <option>配饰</option>\r\n\t\t\t\t\t\t      <option>配件</option>\r\n\t\t\t\t\t\t      <option>美食</option>\r\n\t\t\t\t\t\t    </select>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\r\n\t        </div>\r\n\t        <div class=\"modal-footer\">\r\n\t            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\r\n\t            <button type=\"submit\" class=\"btn btn-primary\">确定</button>\r\n\t        </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--<div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            <h4 class=\"modal-title\" id=\"myModalLabel\">添加商品信息</h4>\r\n        </div>\r\n        <form role=\"form\" (change)=\"getVal($event)\">\r\n        <div class=\"modal-body\">\r\n\t        \t<div *ngFor=\"let col of colsConfig\" >\r\n\t\t\t\t\t\t\t<label *ngIf=\"colsAttributes[col]['type'] != 'checkbox'\">{{privateDic[common.lanType] && privateDic[common.lanType][col]? privateDic[common.lanType][col] : common.publicDic[common.lanType][col] || col}}</label>\r\n\t\t\t\t\t\t\t<div *ngIf=\"colsAttributes[col]\" [ngSwitch]=\"colsAttributes[col]['type']\">\r\n\t\t\t\t\t\t\t\t<select *ngSwitchCase=\"'select'\" class=\"form-control\" (change)=\"productType($event)\">-->\r\n\t\t\t\t\t\t\t\t\t<!--<option [value]=\"obj.value\" [selected]=\"obj.value == colsAttributes[col]['defaultValue']\" *ngFor=\"let obj of colsAttributes[col].data\">{{obj.text}}</option>-->\r\n\t\t\t\t\t\t\t\t\t<!--<ng-template ngFor let-obj let-idx=\"index\" [ngForOf]=\"colsAttributes[col]['data']\" [ngForTrackBy]=\"trackByFn\"> \r\n\t\t\t\t\t\t\t\t\t\t<option *ngIf=\"col == 'type'\" [value]=\"obj.text\">{{obj.text}}</option>-->\r\n\t\t\t\t\t\t\t\t\t\t<!--<option *ngIf=\"col == 'product_type'\" [value]=\"obj.value\">{{obj.text}}</option>-->\r\n<!--\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<select *ngSwitchCase=\"'select-two'\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let obj of proAttributes\" [value]=\"obj.text || obj.product_type\">{{obj.text || obj.product_type}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<input *ngSwitchCase=\"'text'\" type=\"text\" [attr.name]=\"col\" [name]=\"col\" ngModel #[col]=\"ngModel\" class=\"form-control\"/>\r\n\t\t\t\t\t\t\t\t<input *ngSwitchCase=\"'file'\" type=\"file\" name=\"img\" multiple/>\r\n\t\t\t\t\t\t\t\t<input *ngSwitchCase=\"'date'\" type=\"date\"/>\r\n\t\t\t\t\t\t\t\t<label *ngSwitchCase=\"'checkbox'\" class=\"checkbox-inline\">\r\n\t\t\t\t\t\t        <input type=\"checkbox\" id=\"inlineCheckbox1\" value=\"col\"> {{privateDic[common.lanType] && privateDic[common.lanType][col]? privateDic[common.lanType][col] : common.publicDic[common.lanType][col] || col}}\r\n\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t<textarea *ngSwitchCase=\"'textarea'\" class=\"form-control\"></textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"!colsAttributes[col]\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">取消</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addProduct($event)\">确定</button>\r\n        </div>\r\n        </form>\r\n    </div>\r\n</div>-->"

/***/ }),

/***/ "./src/app/components/productchangeform/productchangeform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductchangeformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductchangeformComponent = /** @class */ (function () {
    function ProductchangeformComponent(http, common) {
        this.http = http;
        this.common = common;
        this.productChange = {};
        this.addproductStatus = {};
        this.msgShow = false;
        this.privateDic = {};
        this.colsConfig = [];
        this.colsAttributes = {};
        this.proAttributes = [];
        this.selecApiDataSet = {};
        this.protype = "女人";
    }
    ProductchangeformComponent.prototype.ngOnInit = function () {
        /*this.http.get(this.api).then((configRes)=>{
            this.colsConfig = configRes['productFormCols'].split(',');
        this.colsAttributes = configRes['productFormColsAttributes'] || {};
        this.proAttributes = this.colsAttributes['product_type']['data'] || [];
        })*/
    };
    ProductchangeformComponent.prototype.getKeys = function (item) {
        return Object.keys(item);
    };
    ProductchangeformComponent.prototype.trackByFn = function (idx) {
        return idx;
    };
    ProductchangeformComponent.prototype.productType = function (event) {
        var _this = this;
        this.protype = event.target.value;
        this.http.get("producttype", { "type": this.protype }).then(function (res) {
            _this.proAttributes = res['data']['results'];
        });
    };
    ProductchangeformComponent.prototype.onSubmit = function (proform) {
        var _this = this;
        var proFile = $('#product_img');
        var proImg = proFile.val();
        proform['product_img'] = proImg;
        if (this.handlePro == 'add') {
            //			proform['product_img'] = this.productChange['product_img'];
            this.http.post('addproduct', proform).then(function (res) {
                _this.addproductStatus = { "status": res['status'] };
            });
        }
        else if (this.handlePro == 'change') {
            proform['product_id'] = this.productChange['product_id'];
            proform['product_img'] = proImg;
            this.http.post('updateproduct_pro', proform).then(function (res) {
                _this.addproductStatus = { "status": res['status'] };
            });
        }
    };
    ProductchangeformComponent.prototype.emptyForm = function () {
        if (this.addproductStatus && this.handlePro == 'add') {
            var addform = $('form.add-form');
            addform.find('input,select,textarea').each(function () {
                $(this).val('');
            });
            addform.find('input[type=checkbox]').each(function () {
                $(this).prop('checked', false);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProductchangeformComponent.prototype, "api", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProductchangeformComponent.prototype, "handlePro", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductchangeformComponent.prototype, "productChange", void 0);
    ProductchangeformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-productchangeform',
            template: __webpack_require__("./src/app/components/productchangeform/productchangeform.component.html"),
            styles: [__webpack_require__("./src/app/components/productchangeform/productchangeform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */]])
    ], ProductchangeformComponent);
    return ProductchangeformComponent;
}());



/***/ }),

/***/ "./src/app/components/productdataform/productdataform.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/productdataform/productdataform.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  productdataform works!\r\n</p>\r\n<div *ngFor=\"let col of colsConfig\">\r\n\r\n</div>\r\n<!--<div>\r\n\t<div *ngFor=\"let col of colsConfig\" >\r\n\t\t<label>{{privateDic[common.lanType] && privateDic[common.lanType][col]? privateDic[common.lanType][col] : common.publicDic[common.lanType][col] || col}}</label>\r\n\t\t<div *ngIf=\"colsAttributes[col]\" [ngSwitch]=\"colsAttributes[col].type\">\r\n\t\t\t<select *ngSwitchCase=\"'select'\">\r\n\t\t\t\t<option [value]=\"obj.value\" [selected]=\"obj.value == colsAttributes[col]['defaultValue']\" *ngFor=\"let obj of colsAttributes[col].data\">{{obj.text}}</option>\r\n\t\t\t</select>\r\n\t\t\t<select *ngSwitchCase=\"'select-api'\">\r\n\t\t\t\t<ng-template ngFor let-obj [ngForOf]=\"selecApiDataSet[col]\">\r\n\t\t\t\t\t<option [value]=\"obj[colsAttributes[col].match.value]\" *ngIf=\"obj[colsAttributes[col].match.value] == colsAttributes[col]['defaultValue']\" selected>{{obj[colsAttributes[col].match.text]}}</option>\r\n\t\t\t\t\t<option [value]=\"obj[colsAttributes[col].match.value]\" *ngIf=\"obj[colsAttributes[col].match.value] != colsAttributes[col]['defaultValue']\"s>{{obj[colsAttributes[col].match.text]}}</option>s\r\n\t\t\t\t</ng-template>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"!colsAttributes[col]\">\r\n\t\t\t<input type=\"text\" />\r\n\t\t</div>\r\n\t</div>\r\n</div>-->"

/***/ }),

/***/ "./src/app/components/productdataform/productdataform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdataformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__("./src/app/service/common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductdataformComponent = /** @class */ (function () {
    function ProductdataformComponent(http, common) {
        this.http = http;
        this.common = common;
        this.privateDic = {};
        this.colsConfig = [];
        this.colsAttributes = {};
        this.selecApiDataSet = {};
    }
    ProductdataformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.api).then(function (configRes) {
            _this.colsConfig = configRes['cols'].split(',');
            _this.colsAttributes = configRes['colsAttributes'] || {};
            /*for(let item in this.colsAttributes){
                if(this.colsAttributes[item]['type'] == 'select-api'){
                    let _api = this.colsAttributes[item]['api'];
                    this.http.get(_api).then((res)=>{
                        console.log(res['data']['results'][0])
                        this.selecApiDataSet[item] = res['data']['results'][0];
                    })
                }
            }*/
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProductdataformComponent.prototype, "api", void 0);
    ProductdataformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-productdataform',
            template: __webpack_require__("./src/app/components/productdataform/productdataform.component.html"),
            styles: [__webpack_require__("./src/app/components/productdataform/productdataform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */]])
    ], ProductdataformComponent);
    return ProductdataformComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  register works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/setting.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  setting works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setting',
            template: __webpack_require__("./src/app/components/setting/setting.component.html"),
            styles: [__webpack_require__("./src/app/components/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/router/router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_product_product_component__ = __webpack_require__("./src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_order_order_component__ = __webpack_require__("./src/app/components/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_designer_designer_component__ = __webpack_require__("./src/app/components/designer/designer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_setting_setting_component__ = __webpack_require__("./src/app/components/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pagenotfound_pagenotfound_component__ = __webpack_require__("./src/app/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/common/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stock_stock_form_stock_form_component__ = __webpack_require__("./src/app/stock/stock-form/stock-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stock_stock_manage_stock_manage_component__ = __webpack_require__("./src/app/stock/stock-manage/stock-manage.component.ts");












var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "app", component: __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__components_common_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'stock', component: __WEBPACK_IMPORTED_MODULE_11__stock_stock_manage_stock_manage_component__["a" /* StockManageComponent */] },
    { path: 'stock/:id', component: __WEBPACK_IMPORTED_MODULE_10__stock_stock_form_stock_form_component__["a" /* StockFormComponent */] },
    { path: "product", component: __WEBPACK_IMPORTED_MODULE_2__components_product_product_component__["a" /* ProductComponent */] },
    { path: "order", component: __WEBPACK_IMPORTED_MODULE_3__components_order_order_component__["a" /* OrderComponent */] },
    { path: "designer", component: __WEBPACK_IMPORTED_MODULE_4__components_designer_designer_component__["a" /* DesignerComponent */] },
    { path: "setting", component: __WEBPACK_IMPORTED_MODULE_5__components_setting_setting_component__["a" /* SettingComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_8__components_pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] }
];
var RootRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { enableTracing: false });


/***/ }),

/***/ "./src/app/service/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = /** @class */ (function () {
    function CommonService(http) {
        var _this = this;
        this.http = http;
        this.lanType = "cn";
        this.publicDic = {};
        http.get('http://localhost:1997/config/dictionary.txt').subscribe(function (dicRes) {
            _this.publicDic = dicRes.json();
            console.log(_this.publicDic);
        });
    }
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/service/designersetconfig.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_service__ = __webpack_require__("./src/app/service/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesignerService = /** @class */ (function () {
    function DesignerService(http) {
        this.http = http;
    }
    DesignerService.prototype.getDesignerConfig = function () {
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
    };
    DesignerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_service__["a" /* HttpService */]])
    ], DesignerService);
    return DesignerService;
}());



/***/ }),

/***/ "./src/app/service/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:1997/";
    }
    HttpService.prototype.getUrl = function (_url) {
        if (_url.startsWith('http')) {
            return _url;
        }
        return this.baseUrl + _url;
    };
    HttpService.prototype.get = function (api, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        params['_'] = Math.random();
        return new Promise(function (resolve, reject) {
            params['_'] = Math.random();
            console.log(_this.getUrl(api));
            _this.http.get(_this.getUrl(api), new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestOptions */]({
                method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestMethod */].Get,
                search: params,
            })).toPromise().then(function (res) {
                console.log("get", res.json());
                resolve(res.json());
            });
        });
    };
    HttpService.prototype.post = function (api, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            function str(data) {
                if (data === void 0) { data = {}; }
                var ret = '';
                for (var it_1 in data) {
                    ret += encodeURIComponent(it_1) + '=' + encodeURIComponent(data[it_1]) + '&';
                }
                return ret;
            }
            _this.http.request(_this.getUrl(api), new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestOptions */]({
                method: __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestMethod */].Post,
                body: str(params),
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                })
            })).toPromise().then(function (res) {
                // console.log("post", res.json());
                resolve(res.json());
            }).catch(function (error) {
                resolve(error);
            });
        });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/service/productConfig.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("./src/app/service/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    //获取公共字典库
    function ProductService(http) {
        this.http = http;
        this.lanType = 'cn';
        this.publicDic = {};
        this.http.get('productDicConfig.txt').then(function (dicRes) {
            console.log(dicRes);
            //			this.publicDic = dicRes.json();
        });
    }
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/service/range.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RangePipe = /** @class */ (function () {
    function RangePipe() {
    }
    RangePipe.prototype.transform = function (arg1, arg2) {
        arg1 = [];
        for (var i = 1; i <= arg2; i++) {
            arg1.push(i);
        }
        return arg1;
    };
    RangePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: "range"
        })
    ], RangePipe);
    return RangePipe;
}());



/***/ }),

/***/ "./src/app/stock/stars/stars.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stock/stars/stars.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let star of stars; let i = index\" (click)=\"confirmStar(i)\" class=\"glyphicon glyphicon-star\" [class.glyphicon-star-empty]=\"star\"></span>\r\n"

/***/ }),

/***/ "./src/app/stock/stars/stars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.rating = 0; // 接收父组件传递值
        this.readOnly = true;
        this.clickRating = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    StarsComponent.prototype.ngOnInit = function () {
    };
    /**
     * ngOnchanges 钩子，在输入属性发生变化时，会被自动调起
     */
    StarsComponent.prototype.ngOnChanges = function (changes) {
        // 生成一个boolean数组， 返回stars
        // 实星返回false， 空星返回true
        this.stars = [];
        for (var i = 1; i <= 5; i++) {
            // 非常好的实现方式
            this.stars.push(i > this.rating);
        }
    };
    StarsComponent.prototype.confirmStar = function (index) {
        if (!this.readOnly) {
            // 修改输入属性， angular会调用ngOnChanges钩子函数
            this.rating = index + 1;
            // 通知父组件
            this.clickRating.emit(this.rating);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], StarsComponent.prototype, "rating", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], StarsComponent.prototype, "readOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], StarsComponent.prototype, "clickRating", void 0);
    StarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stars',
            template: __webpack_require__("./src/app/stock/stars/stars.component.html"),
            styles: [__webpack_require__("./src/app/stock/stars/stars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarsComponent);
    return StarsComponent;
}());



/***/ }),

/***/ "./src/app/stock/stock-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StockFilterPipe = /** @class */ (function () {
    function StockFilterPipe() {
    }
    StockFilterPipe.prototype.transform = function (list, field, search) {
        if (!field || !search)
            return list;
        return list.filter(function (item) {
            var itemFieldValue = item[field];
            return itemFieldValue.indexOf(search) > -1;
        });
    };
    StockFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'stockFilter'
        })
    ], StockFilterPipe);
    return StockFilterPipe;
}());



/***/ }),

/***/ "./src/app/stock/stock-form/stock-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stock/stock-form/stock-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">\r\n\t<div class=\"box-header with-border\">\r\n\t\t<h3 class=\"box-title\">修改股票信息</h3>\r\n\t</div>\r\n\t<!-- /.box-header -->\r\n\t<!-- form start -->\r\n\t<form class=\"form-horizontal\">\r\n\t\t<div class=\"box-body\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"inputEmail3\" class=\"col-sm-2 control-label\">股票名称</label>\r\n\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<input type=\"text\" [value]=\"stock.name\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"股票名称\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"inputPassword3\" class=\"col-sm-2 control-label\">股票价格</label>\r\n\r\n\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t<input type=\"number\" [value]=\"stock.price\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"股票价格\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-sm-2 control-label\">股票星级</label>\r\n\r\n\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t<app-stars [(rating)]=\"stock.rating\" [readOnly]=\"false\" (clickRating)=\"updateRating($event)\"></app-stars>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-sm-2 control-label\">股票描述</label>\r\n\r\n\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t<textarea class=\"form-control\" name=\"\" id=\"\" cols=\"100%\" rows=\"5\">{{stock.desc}}</textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label class=\"col-sm-2 control-label\">股票类型</label>\r\n\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-3\" *ngFor=\"let cat of stock.categories\">\r\n\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"> {{cat}}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- /.box-body -->\r\n\t\t<div class=\"box-footer\">\r\n\t\t\t<button (click)=\"save()\" type=\"submit\" class=\"btn btn-info pull-right\">保存</button>\r\n\t\t\t<button (click)=\"cancel()\" type=\"submit\" class=\"btn btn-default pull-right\" style=\"margin-right: 10px;\">取消</button>\r\n\t\t</div>\r\n\t\t<!-- /.box-footer -->\r\n\t</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/stock/stock-form/stock-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock_service__ = __webpack_require__("./src/app/stock/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockFormComponent = /** @class */ (function () {
    function StockFormComponent(router, stockService, route) {
        this.router = router;
        this.stockService = stockService;
        this.route = route;
    }
    StockFormComponent.prototype.ngOnInit = function () {
        var id;
        this.router.params.subscribe(function (param) {
            id = param["id"];
        });
        this.stock = this.stockService.getStock(id);
    };
    StockFormComponent.prototype.updateRating = function (account) {
        console.log('rating: ', account);
        this.stock.rating = account;
    };
    StockFormComponent.prototype.cancel = function () {
        this.route.navigateByUrl('/stock');
    };
    StockFormComponent.prototype.save = function () {
        this.route.navigateByUrl('/stock');
    };
    StockFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stock-form',
            template: __webpack_require__("./src/app/stock/stock-form/stock-form.component.html"),
            styles: [__webpack_require__("./src/app/stock/stock-form/stock-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__stock_service__["a" /* StockService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], StockFormComponent);
    return StockFormComponent;
}());



/***/ }),

/***/ "./src/app/stock/stock-manage/stock-manage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stock/stock-manage/stock-manage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <div class=\"box-header with-border\">\r\n    <a href=\"javascript:;\" (click)=\"create()\" class=\"btn btn-success btn-sm\"><span class=\"glyphicon glyphicon-plus\">创建</span></a>\r\n    <div class=\"box-tools\" style=\"top: 10px;\">\r\n      <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n        <input [formControl]=\"nameField\" name=\"table_search\" class=\"form-control pull-right\" placeholder=\"股票搜索\">\r\n\r\n        <div class=\"input-group-btn\">\r\n          <button class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.box-header -->\r\n  <div class=\"box-body\">\r\n    <table class=\"table table-bordered\">\r\n      <tr>\r\n        <th style=\"width: 10px\">#</th>\r\n        <th>股票名称</th>\r\n        <th>股票价格</th>\r\n        <th>股票评级</th>\r\n        <th>操作</th>\r\n      </tr>\r\n      <tr *ngFor=\"let item of stocks | stockFilter:'name':keywords; let i = index\">\r\n        <td>{{ i + 1 }}</td>\r\n        <td>{{item.name}}</td>\r\n        <td>{{item.price}}</td>\r\n\t\t    <td><app-stars [rating]=\"item.rating\"></app-stars></td>\r\n        <td>\r\n          <a class=\"btn btn-info btn-xs\" href=\"javascript:;\" (click)=\"update(item)\"><span class=\"glyphicon glyphicon-pencil\"></span>修改</a>\r\n          <a class=\"btn btn-danger btn-xs\" href=\"\"><span class=\"glyphicon glyphicon-warning-sign\"></span>删除</a>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <!-- /.box-body -->\r\n  <div class=\"box-footer clearfix\">\r\n    <ul class=\"pagination pagination-sm no-margin pull-right\">\r\n      <li><a href=\"#\">&laquo;</a></li>\r\n      <li><a href=\"#\">1</a></li>\r\n      <li><a href=\"#\">2</a></li>\r\n      <li><a href=\"#\">3</a></li>\r\n      <li><a href=\"#\">&raquo;</a></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/stock/stock-manage/stock-manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockManageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_service__ = __webpack_require__("./src/app/stock/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockManageComponent = /** @class */ (function () {
    function StockManageComponent(router, stockService) {
        this.router = router;
        this.stockService = stockService;
        // formControl, 搜索响应式编程
        this.nameField = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
    }
    StockManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stocks = this.stockService.getStocks();
        this.nameField.valueChanges
            .debounceTime(500)
            .subscribe(function (value) {
            _this.keywords = value;
        });
    };
    StockManageComponent.prototype.create = function () {
        this.router.navigateByUrl('/stock/0');
    };
    StockManageComponent.prototype.update = function (stock) {
        this.router.navigateByUrl('/stock/' + stock.id);
    };
    StockManageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stock-manage',
            template: __webpack_require__("./src/app/stock/stock-manage/stock-manage.component.html"),
            styles: [__webpack_require__("./src/app/stock/stock-manage/stock-manage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__stock_service__["a" /* StockService */]])
    ], StockManageComponent);
    return StockManageComponent;
}());



/***/ }),

/***/ "./src/app/stock/stock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockService; });
/* unused harmony export Stock */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StockService = /** @class */ (function () {
    function StockService() {
        this.stocks = [
            new Stock(1, "第一只股票", 1.00, 3.1, "我是来描述第一只股票的", ["SMM", "铜金属"]),
            new Stock(2, "第二只股票", 4.00, 2.1, "我是来描述第二只股票的", ["淘宝随机数", "铝金属"]),
            new Stock(3, "第三只股票", 7.00, 4.1, "我是来描述第三只股票的", ["阿里巴巴", "镍金属"]),
            new Stock(4, "第四只股票", 20.00, 5.1, "我是来描述第四只股票的", ["百度集团", "了不起的公司"]),
            new Stock(5, "第五只股票", 12.00, 1.1, "我是来描述第五只股票的", ["碧桂园", "买房子的"]),
            new Stock(6, "第六只股票", 3.00, 0.1, "我是来描述第六只股票的", ["卖房子的", "安徽理工"]),
            new Stock(7, "第七只股票", 6.00, 3.1, "我是来描述第七只股票的", ["美国人民", "世界和平"]),
            new Stock(8, "第八只股票", 2.00, 4.1, "我是来描述第八只股票的", ["肥肉一坨", "该减肥了"]),
        ];
    }
    StockService.prototype.getStocks = function () {
        return this.stocks;
    };
    StockService.prototype.getStock = function (id) {
        // TODO ??? 了解find的用法
        var stock = this.stocks.find(function (stock) { return stock.id == id; });
        if (!stock) {
            return new Stock(0, "", 0, 0, "", []);
        }
        return stock;
    };
    StockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StockService);
    return StockService;
}());

var Stock = /** @class */ (function () {
    function Stock(id, name, price, rating, // 评级
    desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());



/***/ }),

/***/ "./src/app/utils/productRange.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productRangePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var productRangePipe = /** @class */ (function () {
    //两个参数,是|后的参数个数 ,1+1是表达式,这里是3个参数{{1+1 | range : 10 : "a"}}
    function productRangePipe() {
    }
    productRangePipe.prototype.transform = function (arg1, arg2) {
        arg1 = [];
        for (var i = 1; i <= arg2; i++) {
            arg1.push(i);
        }
        return arg1;
    };
    productRangePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: "productRange" })
        //两个参数,是|后的参数个数 ,1+1是表达式,这里是3个参数{{1+1 | range : 10 : "a"}}
    ], productRangePipe);
    return productRangePipe;
}());



/***/ }),

/***/ "./src/app/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/**
 * 工具
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 是否为空
     * @param value 值
     */
    Utils.isEmpty = function (value) {
        return value == null || typeof value === 'string' && value.length === 0;
    };
    /**
     * 是否不为空
     * @param value 值
     */
    Utils.isNotEmpty = function (value) {
        return !Utils.isEmpty(value);
    };
    /**
     * 是否数组
     * @param vaue 值
     */
    Utils.isArray = function (value) {
        return Array.isArray(value);
    };
    /**
     * 是否对象
     * @param vaue 值
     */
    Utils.isObject = function (value) {
        return typeof value === 'object' && !Utils.isArray(value);
    };
    /**
    * url中如果有双斜杠替换为单斜杠
    * @param url
    * @returns {string}
    */
    Utils.replaceUrl = function (url) {
        if (-1 != url.indexOf('http://')) {
            return 'http://' + url.substring(7).replace(/\/\//g, '/');
        }
        else if (-1 != url.indexOf('https://')) {
            return 'https://' + url.substring(8).replace(/\/\//g, '/');
        }
        else {
            return url;
        }
    };
    /**
  * 日期对象转为日期字符串
  * @param date 需要格式化的日期对象
  * @param sFormat 输出格式,默认为yyyy-MM-dd                         年：y，月：M，日：d，时：h，分：m，秒：s
  * @example  dateFormat(new Date())                                "2017-02-28"
  * @example  dateFormat(new Date(),'yyyy-MM-dd')                   "2017-02-28"
  * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 09:24:00"
  * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
  * @example  dateFormat(new Date(),'yyyy-MM-ddThh:mm:ss+08:00')   "2017-02-28T09:24:00+08:00"
  * @returns {string}
  */
    Utils.dateFormat = function (date, sFormat) {
        if (sFormat === void 0) { sFormat = 'yyyy-MM-dd'; }
        var time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond));
    };
    /**
     *  UUID生成
     *  @returns {string}
     */
    Utils.UUID = function () {
        return 'xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    /**
     *  短UUID生成
     *  @returns {string}
     */
    Utils.shortUUID = function () {
        return 'xx-6xy'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(6);
        });
    };
    /**
     * 获得绝对位置
     * @param element
     * @param target
     */
    Utils.absolutePosition = function (element, target) {
        var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport = this.getViewport();
        var top, left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            if (top < 0) {
                top = 0 + windowScrollTop;
            }
        }
        else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
        }
        if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width)
            left = targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth;
        else
            left = targetOffset.left + windowScrollLeft;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };
    /**
     * 获得尺寸
     * @param element
     */
    Utils.getHiddenElementDimensions = function (element) {
        var dimensions = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return dimensions;
    };
    /**
     * 获得视图大小
     */
    Utils.getViewport = function () {
        var win = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
        return { width: w, height: h };
    };
    /**
     * 获得窗口滚动高度
     */
    Utils.getWindowScrollTop = function () {
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    };
    /**
     * 获得窗口滚动宽度
     */
    Utils.getWindowScrollLeft = function () {
        var doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    };
    /**
    * 获得实际位置
    * @param element
    * @param target
    */
    Utils.relativePosition = function (element, target) {
        var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var viewport = this.getViewport();
        var top, left;
        if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
            top = -1 * (elementDimensions.height);
            if (targetOffset.top + top < 0) {
                top = 0;
            }
        }
        else {
            top = targetHeight;
        }
        if ((targetOffset.left + elementDimensions.width) > viewport.width)
            left = targetWidth - elementDimensions.width;
        else
            left = 0;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };
    return Utils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map