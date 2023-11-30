import { Component, Input } from '@angular/core';
import { datosPropuesta, documentos } from './datosPropuesta'

@Component({
  selector: 'sg-detalle-propuesta',
  templateUrl: './detalle-propuesta.component.html',
  styleUrls: ['./detalle-propuesta.component.scss']
})
export class DetallePropuestaComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';

  showDetallePropuesta: boolean = false;
  showDocumento: boolean = false;

  nombreDocumento: string = '';

  datosPropuesta = datosPropuesta;
  documentos = documentos;

  constructor() {


  }

  mostrarDetalle() {
    this.showDetallePropuesta = true;    
  }

  cerrarCanvas(tipo: string) {
    if (tipo === 'detalle') {
      this.showDetallePropuesta = false;
    } else if (tipo === 'documento') {
      this.showDocumento = false;
    }
  }

  verDocumento(filename: string) {
    this.showDocumento = true;
    this.nombreDocumento = filename;    
  }

}
