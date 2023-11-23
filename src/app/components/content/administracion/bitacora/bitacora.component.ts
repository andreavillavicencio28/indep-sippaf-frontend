import { Component } from '@angular/core';
import { datosEtapasSolicitud } from 'src/app/models/datosEtapasSolicitud.model';

@Component({
  selector: 'sg-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.scss']
})
export class BitacoraComponent {
  tipoVista: boolean = true;
  Seleccionado: number = 0;
  listadoSolicitudes: datosEtapasSolicitud[];
  administracion: any[] = [];
  idElement: number = 0;
  mesInforme: string = '';
  tipoInforme: string = '';
  showVistaPrevia: boolean = false;
  showButton: boolean = false;
  showDocument: Boolean = false;
  isDropdownBienesSusceptibles: boolean = false;
  isDropdownAtencionRegional: boolean = false;

  constructor() {
    this.Seleccionado = 1;
    this.listadoSolicitudes = [
    ]
  }
  cambioSeleccion(num: number) {
    this.Seleccionado = num;
    this.listadoSolicitudes.forEach(solicitud => {
      solicitud.activo = false;
    });
    this.listadoSolicitudes.forEach(solicitud => {
      if (solicitud.indice == num) {
        solicitud.activo = true;
      }
    });
    this.administracion = [
      {
          catalogo: 1,
          solicitante: 'Juan Perez',
          pais: 'Mexico',
          fecha: '07/11/2023',
          proceso: 'activo'
      },
      {
          catalogo: 2,
          solicitante: 'Rober Ortiz',
          pais: 'Mexico',
          fecha: '07/11/2023',
          proceso: 'activo'
      },
      {
          catalogo: 3,
          solicitante: 'Yael Velasco',
          pais: 'Mexico',
          fecha: '07/11/2023',
          proceso: 'activo'
      }


    ];

  }
  cambioTipoVista() {
    this.tipoVista = !this.tipoVista
  }
  openVistaPrevia(id: number, accion: string = '', mes: string = '', tipoInforme: string = '') {
    this.idElement = id;
    this.mesInforme = mes;
    this.tipoInforme = tipoInforme;
    this.showButton = accion ? true : false;

    this.showVistaPrevia = true;
    this.showDocument = true;
  }
  showDropdownBienesSusceptibles() {
    this.isDropdownBienesSusceptibles = this.isDropdownBienesSusceptibles? false: true;
  }
  hideDropdownBienesSusceptibles() {
    this.isDropdownBienesSusceptibles = false;
  }

  showDropdownAtencionRegional() {
    this.isDropdownAtencionRegional = this.isDropdownAtencionRegional? false: true;
  }
  hideDropdownAtencionRegional() {
    this.isDropdownAtencionRegional = false;
  }
}
