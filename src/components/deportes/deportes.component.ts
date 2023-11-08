import {Component} from '@angular/core';

@Component({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrls:["./deportes.component.css"]
})

export class DeportesComponent{
    public sports:Array<string>;
    public numeros:Array<number>;

    constructor(){
        this.sports = ["Futbol","Padel","Tenis","Balocesto","Badminton","Petanca"];
        this.numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    }
}