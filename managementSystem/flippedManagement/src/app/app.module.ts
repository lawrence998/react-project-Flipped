import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpService} from "./service/http.service";

import {CommonService} from './service/common.service';
import {RootRouter} from "./router/router";

import { DesignerService } from "./service/designersetconfig.service";
import { ModalModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PopoverModule } from 'ngx-bootstrap';
import { ProductService } from "./service/productConfig.service";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { ContentComponent } from './components/common/content/content.component';

import { DashboardComponent } from './components/common/dashboard/dashboard.component';

import { TreeviewMenuComponent } from './components/common/treeview/treeview-menu.component';
import { SidebarMenuComponent } from './components/common/sidermenu/sidebar-menu.component';

import { ProductComponent } from './components/product/product.component';

import { OrderComponent } from './components/order/order.component';
import { DesignerComponent } from './components/designer/designer.component';
import { SettingComponent } from './components/setting/setting.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import {productRangePipe} from './utils/productRange.pipe';


import { StarsComponent } from './stock/stars/stars.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import { StockManageComponent } from './stock/stock-manage/stock-manage.component';
import {StockService} from "./stock/stock.service";
import { StockFilterPipe } from './stock/stock-filter.pipe';
import { DesdatagridComponent } from './components/common/desdatagrid/desdatagrid.component';
import { ProductDatagridComponent } from './components/product-datagrid/product-datagrid.component';
import { ProductdataformComponent } from './components/productdataform/productdataform.component';
import { ProductchangeformComponent } from './components/productchangeform/productchangeform.component';



import { DesignerdatagridComponent } from './components/common/designerdatagrid/designerdatagrid.component';


import { OrderDatagridComponent } from './components/order-datagrid/order-datagrid.component';

import {RangePipe} from './service/range.pipe';

import { PaginationComponent } from './components/common/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    ContentComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe,
    ProductComponent,
    OrderComponent,
    DesignerComponent,
    SettingComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    OrderDatagridComponent,
    RangePipe,
    DesdatagridComponent,
    TreeviewMenuComponent,
    SidebarMenuComponent,
    ProductDatagridComponent,
    productRangePipe,
    ProductdataformComponent,
    ProductchangeformComponent,
    PaginationComponent,
    DesignerdatagridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RootRouter,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [
  StockService,
  HttpService,
  DesignerService,
  ProductService,
    StockService,
    HttpService,
    CommonService,
    DesignerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
