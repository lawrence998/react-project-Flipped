import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { MainData } from './main-model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Array<Menu>;
  private currentMenuId: number = 1; // 当前选中id
 
    //用户数据
  mainData: MainData = {
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
  }

  constructor(private router: Router) { }

  ngOnInit() {
  	this.menus = [
  		new Menu(1, '商品管理', 'product'),
		  new Menu(2, '订单管理', 'order'),
      new Menu(3, '设计师', 'designer'),
      new Menu(4, '设置', 'setting')
	]
  }

  nav(menu: Menu) {
  	this.router.navigateByUrl(menu.link);
  	this.currentMenuId = menu.id;
  }
}

export class Menu {
	constructor(
		public id: number,
		public name: string,
		public link: string
	) {

	}
}
