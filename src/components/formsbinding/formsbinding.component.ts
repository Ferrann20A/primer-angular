import { Component } from "@angular/core";

@Component({
    selector:"app-forms-binding",
    templateUrl:"./formsbinding.component.html"
})

export  class FormsBinding{
    //Declaramos un obejto para trabajar con el formulario y hacer un binding
    public user:any;
    public mensaje:string;
    constructor(){
        this.mensaje = "";
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        }
    }
    //Creamos un metodo para cuando pulsemos un boton
    recibirDatos(): void{
        this.mensaje = "Datos recibidos";
    }
}