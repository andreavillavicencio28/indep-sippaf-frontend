import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-detalle-prevalidacion',
  templateUrl: './detalle-prevalidacion.component.html',
  styleUrls: ['./detalle-prevalidacion.component.scss']
})
export class DetallePrevalidacionComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';

  showDetalle: boolean = false;

  mostrarDetalle() {
    this.showDetalle = !this.showDetalle;
  }

  cerrarCanvas() {
    this.showDetalle = false;

  }

}
