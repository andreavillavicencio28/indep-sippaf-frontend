import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-detalle-entrega-bien',
  templateUrl: './detalle-entrega-bien.component.html',
  styleUrls: ['./detalle-entrega-bien.component.scss']
})
export class DetalleEntregaBienComponent {

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
