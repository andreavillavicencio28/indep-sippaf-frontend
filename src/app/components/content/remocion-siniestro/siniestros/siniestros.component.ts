import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-siniestros',
  templateUrl: './siniestros.component.html',
  styleUrls: ['./siniestros.component.scss']
})
export class SiniestrosComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante = '';

  tipoAccion: boolean = false;
  accion: number = 1; // accion de edicion
  accionDetalle: number = 1; // accion de detalle

  cambioAccionDetalle(accion: number) {
    this.accionDetalle = accion;
  }

}
