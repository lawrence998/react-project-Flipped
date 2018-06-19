import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {HttpService} from '../../service/http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpService,private router: Router) { }

  ngOnInit() {
  	console.log(localStorage['token'],this.router)
  	if(!localStorage['token']){
  		this.router.navigate(['login']);
  	}
  }

}
