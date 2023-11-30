import { Component, Input } from '@angular/core';
import { datosAtencion, documentos } from './datosAtencion'

@Component({
  selector: 'sg-detalle-atencion',
  templateUrl: './detalle-atencion.component.html',
  styleUrls: ['./detalle-atencion.component.scss']
})
export class DetalleAtencionComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';

  showDetalleAtencion: boolean = false;
  showDocumento: boolean = false;

  nombreDocumento: string = '';

  datosAtencion = datosAtencion;
  documentos = documentos;
  accionDetalle: number = 1; // accion de detalle

  constructor() {


  }

  cambioAccionDetalle(accion: number) {
    this.accionDetalle = accion;
  }

  mostrarDetalle() {
    this.showDetalleAtencion = true;    
  }

  cerrarCanvas(tipo: string) {
    if (tipo === 'detalle') {
      this.showDetalleAtencion = false;
    } else if (tipo === 'documento') {
      this.showDocumento = false;
    }
  }

  verDocumento(filename: string) {
    this.showDocumento = true;
    this.nombreDocumento = filename;    
  }

}
