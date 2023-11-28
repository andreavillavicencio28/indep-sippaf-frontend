import { Component, Input } from '@angular/core';
import { datosSolicitud, documentos } from './datosSolicitud'

@Component({
  selector: 'sg-detalle-propuesta',
  templateUrl: './detalle-propuesta.component.html',
  styleUrls: ['./detalle-propuesta.component.scss']
})
export class DetallePropuestaComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';

  showDetalleSolicitud: boolean = false;
  showDocumento: boolean = false;

  nombreDocumento: string = '';

  datosSolicitud = datosSolicitud;
  documentos = documentos;

  constructor() {


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

  verDocumento(filename: string) {
    this.showDocumento = true;
    this.nombreDocumento = filename;    
  }

}
