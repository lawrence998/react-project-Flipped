import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  hideCOM:string = "";
  hideLogin:string = "";
  hideRegister:string = "";

  constructor(private route:ActivatedRoute, private router:Router){

  }

  ngOnInit(){
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

  }

  parentEvent(val: String){
    console.log(val);
    if(val !== "login" || val !== "regiister"){
          this.hideLogin = "hideActive";
          this.hideRegister = "hideActive";
          this.hideCOM = "";
    }
  }
}
