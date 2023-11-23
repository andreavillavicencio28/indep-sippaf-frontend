import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-detalle-opinion-tenica',
  templateUrl: './detalle-opinion-tenica.component.html',
  styleUrls: ['./detalle-opinion-tenica.component.scss']
})
export class DetalleOpinionTenicaComponent {

  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';

  verDetalle: boolean = false;


  constructor() {


  }
  mostrarDetalle() {
    this.verDetalle = !this.verDetalle;
    console.log('Muestra el detalle');

  }

  cerrarDetalle(){
    this.verDetalle = false;
  }
}
