import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { datosEtapasSolicitud } from 'src/app/models/datosEtapasSolicitud.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { administracion2, diasAsueto } from '../datosAdministracion';

@Component({
  selector: 'sg-dias-asueto',
  templateUrl: './dias-asueto.component.html',
  standalone: true,
  styleUrls: ['./dias-asueto.component.scss'],
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, CommonModule, SharedModule],
})
export class DiasAsuetoComponent {
  mostrarMensaje:boolean = true;
  administracion: any[] = [];
  idElement: number = 0;
  mesInforme: string = '';
  tipoInforme: string = '';
  showVistaPrevia: boolean = false;
  showButton: boolean = false;
  showDocument: Boolean = false;
  Seleccionado: number = 0;
  listadoSolicitudes: datosEtapasSolicitud[];
  showFormulario : boolean = false;
  textoAcccion: string = "Guardar";
  dataInforme = diasAsueto;

  constructor() {
    this.Seleccionado = 1;
    this.listadoSolicitudes = [
    ]
  }

  ocultarMensaje(){
    this.mostrarMensaje = false;
  }
  openVistaPrevia(id: number, accion: string = '', mes: string = '', tipoInforme: string = '') {
    this.idElement = id;
    this.mesInforme = mes;
    this.tipoInforme = tipoInforme;
    this.showButton = accion ? true : false;

    this.showVistaPrevia = true;
    this.showDocument = true;
  }

  addDias() {
    this.showFormulario = true;
    this.textoAcccion = "Guardar";
  }
}
