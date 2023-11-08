import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector:"app-tabla-multiplicar",
    templateUrl:"./tablamultiplicar.component.html"
})

export class TablaMultiplicar{
    @ViewChild("cajanum") cajanum!: ElementRef;
    getTablaMultiplicar(): String{
        let num = parseInt(this.cajanum.nativeElement.value);
        let op = ""
        for(let i = 1; i >= 10; i++){
            op += `${num} x ${i} = ${num * i}`;
        }
        return op;
    }
}