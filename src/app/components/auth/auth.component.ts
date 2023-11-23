import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { ProlongaSesionService } from "src/app/services/prolonga-sesion/prolonga-sesion.service";
// import { TiempoSesionService } from "src/app/shared/tiempo-sesion/tiempo-sesion.service";

@Component({
    selector: "us-auth",
    template: `
        <sg-menu></sg-menu>
        <div class="row tamaño-contenedor contenedor-principal">
            <router-outlet ></router-outlet>
        </div> 
       
	`,
    // styleUrls: ['./admin.component.css']
})


export class AuthComponent {
    
    constructor() {
    }
}