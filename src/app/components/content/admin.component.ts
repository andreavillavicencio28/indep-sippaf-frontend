import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { ProlongaSesionService } from "src/app/services/prolonga-sesion/prolonga-sesion.service";
// import { TiempoSesionService } from "src/app/shared/tiempo-sesion/tiempo-sesion.service";

@Component({
    selector: "us-admin",
    template: `
        <sg-menu></sg-menu>
        <sg-sidebar></sg-sidebar>
        <div class="row tamaño-contenedor contenedor-principal">
            <sg-breadcrumbs style="padding:0px;"></sg-breadcrumbs>
            <router-outlet></router-outlet>
        </div> 
       
	`,
    // styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnChanges {
    
    constructor(private prolongaSesionService: ProlongaSesionService) {
        this.prolongaSesionService.iniciarIntervalo();
    }

    ngOnChanges(changes: SimpleChanges): void {

    }

}
