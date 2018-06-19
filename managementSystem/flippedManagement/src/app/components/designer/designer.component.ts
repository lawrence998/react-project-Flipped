
import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

import { DesignerService } from "../../service/designersetconfig.service"
import { HttpService } from "../../service/http.service"
import * as $  from 'jquery'


@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})


export class DesignerComponent implements OnInit {
  txtConfigApi:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.txtConfigApi = this.route.routeConfig.path;
    if(!localStorage['token']){
        this.route["navigate"](['login']);
    }
  }

}
