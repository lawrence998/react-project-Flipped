import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:"productRange"})

//两个参数,是|后的参数个数 ,1+1是表达式,这里是3个参数{{1+1 | range : 10 : "a"}}

export class productRangePipe implements PipeTransform{
	transform(arg1:Array<any>,arg2:number) : Array<number>{
		arg1 = [];
		for(let i = 1;i <= arg2; i++){
			arg1.push(i);
		}
		return arg1;
	}
}