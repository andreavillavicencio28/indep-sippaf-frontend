import { Component } from '@angular/core';
import { datos } from './datosDepositaria';

@Component({
  selector: 'sg-depositarias',
  templateUrl: './depositarias.component.html',
  styleUrls: ['./depositarias.component.scss']
})
export class DepositariasComponent {
  datos = datos;
  tipoInforme: number = 0;

  showInformacion: boolean = false;
  nombreTipoPago: string = '';

  constructor() {}

  buscar(filtro: number | null) {

    if (filtro == null) {
      // this.solicitudes = this.listaA;
    } else {
      // this.solicitudes = this.lista.filter(item => item.status === filtro);
    }

  }

  accion(nombramiento: string = '') {

  }

  openOffCanvas(tipoPago: number, nombreTipoPago: string) {
    this.tipoInforme = tipoPago;
    this.showInformacion = true;

    if ( nombreTipoPago === 'Mueble' ) {
      this.nombreTipoPago = 'Tenencia';
    } else if (  nombreTipoPago === 'Inmueble' ) {
      this.nombreTipoPago = 'Predial';
    } else {
      this.nombreTipoPago = nombreTipoPago;
    }
  }

  closeOffCanvas() {
    this.showInformacion = false;
  }

}
