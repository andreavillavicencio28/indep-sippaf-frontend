import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-detalle-bien',
  templateUrl: './detalle-bien.component.html',
  styleUrls: ['./detalle-bien.component.scss']
})
export class DetalleBienComponent {

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
