import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector: "hooks-angular",
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit{
    public mensaje:string;
    constructor(){
        console.log("Soy el constructor de angular");
        this.mensaje = "Soy hooks de angular"
    }

    ngOnInit(): void {
        console.log("Ejecutando el metodo OnInit");
    }

    ngDoCheck(): void {
        console.log("Ejecutnando el metodo DoCheck");   
    }

    //Creamos un metodo personalizado
    cambiarMensaje() :void{
        this.mensaje = "Cambiando el mensaje..."
    }
}