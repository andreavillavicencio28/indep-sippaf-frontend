import { Component, Input } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'sg-encabezado-detalle',
  templateUrl: './encabezado-detalle.component.html',
  styleUrls: ['./encabezado-detalle.component.scss']
})
export class EncabezadoDetalleComponent {
  @Input() fecha: string = '';
  @Input() tipoInforme = '';
  fechaActual:string = '';


  constructor() {
    this.fechaActual = moment().format('DD/MM/YYYY');
  }


}
