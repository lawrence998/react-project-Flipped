import { Component, OnInit,EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() parentAttr = new EventEmitter<String>();

  constructor() { }

	  ngOnInit() {
	  	  this.childrenEvent("dashboard");
	  }

	 childrenEvent(val: String){
	    this.parentAttr.emit(val);
	  }
}
