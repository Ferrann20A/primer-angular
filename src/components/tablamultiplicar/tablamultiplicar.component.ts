import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector:"app-tabla-multiplicar",
    templateUrl:"./tablamultiplicar.component.html"
})

export class TablaMultiplicar{
    @ViewChild("cajanum") cajanum!: ElementRef;
    public numeros: Array<number>;
    public numero!: number;
    constructor(){
        this.numeros = new Array<number>();
    }
    
    generarTablaMultiplicar(): void{
        this.numero = parseInt(this.cajanum.nativeElement.value);
        let aux = new Array<number>();
        for(let i = 1; i <= 10; i++){
            let op = this.numero * i;
            aux.push(op);
        }
        this.numeros = aux;
    }
}