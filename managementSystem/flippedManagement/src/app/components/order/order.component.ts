import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(localStorage['token'],this.router)
    if(!localStorage['token']){
        this.router.navigate(['login']);
    }
  }

}
