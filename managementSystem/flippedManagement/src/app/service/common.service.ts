import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CommonService{
    lanType: string = "cn";
    publicDic: Object = {};

    constructor(private http: Http){
        http.get('http://localhost:1997/config/dictionary.txt').subscribe((dicRes)=>{
            this.publicDic = dicRes.json();console.log(this.publicDic)
        })
    }
}