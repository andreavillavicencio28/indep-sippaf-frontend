import { Component } from '@angular/core';
import { administracion2 } from '../datosAdministracion';
import { NgbAlertModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sg-configuracion',
  templateUrl: './configuracion.component.html',
  standalone: true,
  styleUrls: ['./configuracion.component.scss'],
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, CommonModule, SharedModule],
})
export class ConfiguracionComponent {
  dataInforme = administracion2;
  mesInforme: string = '';
  tipoInforme: string = '';
  showVistaPrevia: boolean = false;
  showButton: boolean = false;
  idElement: number = 0;
  showDocument: Boolean = false;
  textoAcccion:string = "Guardar";
  showFormulario : boolean = false;
  mostrarMensaje:boolean = true;

  openVistaPrevia(id: number, accion: string = '', mes: string = '', tipoInforme: string = '') {
    this.idElement = id;
    this.mesInforme = mes;
    this.tipoInforme = tipoInforme;
    this.showButton = accion ? true : false;

    this.showVistaPrevia = true;
    this.showDocument = true;
  }
  addCatologo() {
    this.showFormulario = true;
    this.textoAcccion = "Guardar";
  }
  ocultarMensaje(){
    this.mostrarMensaje = false;
  }
}
