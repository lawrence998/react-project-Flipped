import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "range"
})

export class RangePipe implements PipeTransform{
    transform(arg1: Array<number>, arg2: number): Array<number>{
        arg1 = [];
        for(let i=1;i<=arg2;i++){
            arg1.push(i);
        }

        return arg1;
    }
}