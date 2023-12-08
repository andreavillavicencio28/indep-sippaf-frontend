import { Component } from '@angular/core';
import { administracion2, datosCurpValidacion } from './datosAdministracion';
import { datosEtapasSolicitud } from 'src/app/models/datosEtapasSolicitud.model';

@Component({
  selector: 'sg-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent {
  dataInforme = administracion2;
  administracion: any[] = [];
  mesInforme: string = '';
  tipoInforme: string = '';
  showVistaPrevia: boolean = false;
  showButton: boolean = false;
  accionDetalle: number = 1;
  idElement: number = 0;
  showFormulario : boolean = false;
  showDocument: Boolean = false;
  textoAcccion:string = "Guardar";
  tablaDatosBien: any[] = datosCurpValidacion;
  Seleccionado: number = 0;
  tituloSeleccionado: string = '';
  listadoSolicitudes: datosEtapasSolicitud[];
  tipoAutorizacion: string = '';

  showAgregarCatalogo: boolean = false;


  constructor() {
    this.Seleccionado = 1;
    this.listadoSolicitudes = [
    ]
  }

  cambioAccionDetalle(accion: number) {
    this.accionDetalle = accion;
  }

  agregarCatalogo() {
    this.showAgregarCatalogo = true;
  }

  openVistaPrevia(id: number, accion: string = '', mes: string = '', tipoInforme: string = '') {
    this.idElement = id;
    this.mesInforme = mes;
    this.tipoInforme = tipoInforme;
    this.showButton = accion ? true : false;

    this.showVistaPrevia = true;
    this.showDocument = true;
  }

  cerrarOffCanvas( numero: number) {
    switch (numero) {
      case 1:
        this.showAgregarCatalogo = false;
        break;

    }
  }

}
