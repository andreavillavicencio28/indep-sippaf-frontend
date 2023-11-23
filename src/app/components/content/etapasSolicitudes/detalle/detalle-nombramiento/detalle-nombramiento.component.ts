import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-detalle-nombramiento',
  templateUrl: './detalle-nombramiento.component.html',
  styleUrls: ['./detalle-nombramiento.component.scss']
})
export class DetalleNombramientoComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';

  verDetalle: boolean = false;

  showDetalleSolicitud: boolean = false;
  showDocumento: boolean = false;

  constructor() {


  }

  // mostrarDetalle() {
  //   this.verDetalle = !this.verDetalle;
  //   console.log('Muestra el detalle');

  // }
  cerrarDetalle(){
    this.verDetalle = false;
  }

  mostrarDetalle() {
    this.showDetalleSolicitud = true;    
  }

  cerrarCanvas(tipo: string) {
    if (tipo === 'detalle') {
      this.showDetalleSolicitud = false;
    } else if (tipo === 'documento') {
      this.showDocumento = false;
    }
  }

}
