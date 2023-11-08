import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector:"app-sumar-numeros",
    templateUrl:"./sumarnumeros.component.html"
})

export class SumarNumeros{
    //Declaramos variables que hacen referencia al ID de angular de los controles HTML
    @ViewChild("cajanumero1") cajaNumero1Ref!: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2Ref!: ElementRef;
    public suma!:number;
    //En angular todas las propiedades deben ser instanciadas/iniciadas con un valor
    //Los objetos de referencia deben indicar que son un nuevo objeto y un valor por 
    //defecto para dicho objeto.
    //ObjetoRef = new ElementRef(VALUE POR DEFECTO)
    constructor(){
        // this.suma = 0;
        // this.cajaNumero1Ref = new ElementRef(0);
        // this.cajaNumero2Ref = new ElementRef(0);
    }

    sumarNums(): void{
        let num1 = parseInt(this.cajaNumero1Ref.nativeElement.value);
        let num2 = parseInt(this.cajaNumero2Ref.nativeElement.value);
        this.suma = num1 + num2;
    }
}