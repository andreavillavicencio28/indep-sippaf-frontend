import { Component, Input } from '@angular/core';
import { datosAcreditado, documentos } from './datosAcreditado'

@Component({
  selector: 'sg-detalle-acreditado',
  templateUrl: './detalle-acreditado.component.html',
  styleUrls: ['./detalle-acreditado.component.scss']
})
export class DetalleAcreditadoComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';

  showDetalleAcreditado: boolean = false;
  showDocumento: boolean = false;
  accionDetalle: number = 1; // accion de detalle
  nombreDocumento: string = '';

  datosAcreditado = datosAcreditado;
  documentos = documentos;

  constructor() {


  }

  mostrarDetalle() {
    this.showDetalleAcreditado = true;    
  }

  cerrarCanvas(tipo: string) {
    if (tipo === 'detalle') {
      this.showDetalleAcreditado = false;
    } else if (tipo === 'documento') {
      this.showDocumento = false;
    }
  }

  verDocumento(filename: string) {
    this.showDocumento = true;
    this.nombreDocumento = filename;    
  }

}
