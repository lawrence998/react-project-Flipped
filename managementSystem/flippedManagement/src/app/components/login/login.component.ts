import { Component, OnInit, Output, EventEmitter,TemplateRef} from '@angular/core';
import {HttpService} from "../../service/http.service"
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	loginState:string;
	logintrue:string;
	name:string;
	pword:string;
	singleModel:string;
	modalRef: BsModalRef;
	@Output() parentAttr = new EventEmitter<String>();

  constructor(private http:HttpService , private modalService: BsModalService ,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.childrenEvent("dashboard");
  }

  childrenEvent(val: String){
    this.parentAttr.emit(val);
  }

  loginIn(template){
  	//如果存在用户,跳转到主页
  	var token = localStorage.getItem("token");
  	if(token){
  		this.router.navigate(['/product']);
  		return;
  	}

  	let user = this.name;
  	let paw = this.pword;

  	this.http.post("manageLoginIn",{username:user,password:paw}).then(loginfn => {
  	 		if(loginfn["status"] == true){

  	 			localStorage.setItem("token",JSON.stringify({username:user,password:paw}));
  	 			this.loginState = loginfn["data"];
    			console.log(this.router);
    			this.childrenEvent("dashboard");
  	 			this.router.navigate(['/product']);
  	 			// this.openModal(template);
  	 			
  	 		} else{
  	 			this.loginState = loginfn["data"];
  	 			this.openModal(template)
  	 		}
	 })
  }



  testInput(template){
  	this.input(template);
  }

  input(template){
  	let user = this.name;
  	let paw = this.pword;
  	var customerReg = /^[a-zA-Z0-9]{6,16}$/;
  	var passwordReg = /^[a-zA-Z0-9]{8,16}$/;
  	if(user){
	  	if(!customerReg.test(user)){
	  		this.loginState = "用户名,6-16位数字字母";
	  	 	this.openModal(template);
	  	}
  	}

  	if(paw){
	  	if(!passwordReg.test(paw)){
	  		this.loginState = "密码,8-16位数字字母";
	  	 	this.openModal(template);
	  	}
  	}

  }



   openModal(template: TemplateRef<any>) {
    	
    	this.modalRef = this.modalService.show(template);
    	// if(this.loginState == this.logintrue){
    	// 	this.modalRef.hide();
    	// }
    }

}
