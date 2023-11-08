import { Component } from "@angular/core";

@Component({
    //Debemos indicar el nombre del component mediante selector.
    //Se utilizan guiones para sperar cada palabra del nombre component
    selector: "primer-component",
    //Como no queremos un fichero HTML de template, se utiliza la plabra 'template'
    //indicar todo el dibujo aqui
    templateUrl: "./primer.component.html",
    styleUrls:["./primer.component.css"]
})

//Todo component debe ser declarado como clase
//Dicho nombre de la clase sera utlizado posteriormente en 'app.module.ts'
export class PrimerComponent{
    //Las propiedades de un component se peuden usar en su dibujo, dichas propieades son tipadas
    public titulo:string;
    public descripcion:string;
    public anyo:number;
    //El constructor de una clase es el primer metodo por el que entra cualquier component
    //Aqui podemos inicializar los valores de las propiedades
    constructor(){
        //Para acceder a las propiedades de una clase se utiliza la palabra 'this'
        this.titulo = "Miércoles de puente";
        this.descripcion = "Aprendiendo Angular a tope";
        this.anyo = 2023;
    }
}