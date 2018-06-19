import {RouterModule,Routes} from "@angular/router"



import { AppComponent } from '../app.component';
import { ProductComponent } from '../components/product/product.component';
import { OrderComponent } from '../components/order/order.component';
import { DesignerComponent } from '../components/designer/designer.component';
import { SettingComponent } from '../components/setting/setting.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';

import { DashboardComponent } from '../components/common/dashboard/dashboard.component';
import { StockFormComponent } from '../stock/stock-form/stock-form.component';
import { StockManageComponent } from '../stock/stock-manage/stock-manage.component';

const appRoutes: Routes = [
		{path: '', redirectTo: '/login', pathMatch: 'full'},
		{path:"app",component:AppComponent},
		{path: 'dashboard', component: DashboardComponent},
		{path: 'stock', component: StockManageComponent},
		{path: 'stock/:id', component: StockFormComponent},
		{path:"product",component:ProductComponent},
		{path:"order",component:OrderComponent},
		{path:"designer",component:DesignerComponent},
		{path:"setting",component:SettingComponent},
		{path:"login",component:LoginComponent},
		{path:"register",component:RegisterComponent},
		{path:"**",component:PagenotfoundComponent}
]


export const RootRouter = RouterModule.forRoot(
    appRoutes,
    {enableTracing: false}
)