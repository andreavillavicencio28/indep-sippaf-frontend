import { Component } from '@angular/core';
import {
  data, dataInformesArray, meses, tipoBien, subTipoMueble, subSubtipoMueble, subTipoInmueble, subSubtipoInmueble, tipoSolicitante,
  tipoDepositaria,
  estatusSolicitud,
  etapa, 
  tipoDocumentoAutorizacion, 
  tipoDocumentoSeguimiento
} from './datos-solicitudes-descarga';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'sg-solicitudes-descarga',
  templateUrl: './solicitudes-descarga.component.html',
  styleUrls: ['./solicitudes-descarga.component.scss']
})
export class SolicitudesDescargaComponent {
  data = data;
  showBtnDescarga: boolean = false;
  dataTable: any = [];
  buscar: string = '';

  showCamvasPrincipal: boolean = false;
  showSeguimiento: boolean = false;
  tituloSeleccionado: string = '';

  masterSelectedServicios: boolean = false;
  showDownloadServicios: boolean = false;

  documentosTabla: any = [];
  checkedList: any = [];

  informesArray = dataInformesArray;

  pago: number = 1;
  anioSelect: number = 2023;

  meses = meses;

  tipoBien = tipoBien;
  tipoBienSelect: string = 'Elige una opción';

  subTipoBien: any = [];
  subTipoBienSelect: string = 'Elige una opción';

  subSubTipoBien = subTipoInmueble;
  subSubTipoBienSelect: string = 'Elige una opción';

  tipoSolicitante = tipoSolicitante;
  tipoSolicitanteSelect: string = 'Elige una opción';

  tipoDepositaria = tipoDepositaria;
  tipoDepositariaSelect: string = 'Elige una opción';

  estatusSolicitud = estatusSolicitud;
  estatusSolicitudSelect: string = 'Elige una opción';

  etapa: any = etapa;
  etapaSelect: string = 'Elige una opción';

  tipoObligacion = tipoDocumentoAutorizacion;
  tipoObligacionSelect: string = 'Elige una opción';

  tipoBusqueda: string = '1';

  showResultZsearch: boolean = false;

 
  constructor(
    private toastrService: ToastrService,
  ) {
    this.dataTable = [...data];

  }


  changePago() {
    console.log(this.pago);

  }

  changeTipoBusqueda() {
    this.tipoObligacion = (this.tipoBusqueda == '1') ? tipoDocumentoAutorizacion : tipoDocumentoSeguimiento;    
  }

  changeTipoBienSelect() {
    console.log(this.tipoBienSelect);
    if (this.tipoBienSelect == 'Mueble') {
      this.subTipoBien = subTipoMueble;
      this.subSubTipoBien = subSubtipoMueble;
    } else if (this.tipoBienSelect == 'Inmueble') {
      this.subTipoBien = subTipoInmueble;
      this.subSubTipoBien = subSubtipoInmueble
    }
  }

  changeAnio() { }


  selectYear(): number[] {
    const year = (new Date()).getFullYear();
    const selectYear: number[] = []

    for (let index = year; index >= 2000; index--) {
      selectYear.push(index);
    }
    return selectYear;
  }


  busquedaNombramientos() {
    this.showResultZsearch = true;
  }

  descargaArchivos() {
    this.toastrService.success('Se han descargado los archivos exitosamente');

  }

  // Logica para los checks
  checkUncheckAll() {
    this.dataTable.forEach((el: any) => {
      el.isSelected = this.masterSelectedServicios;
    })
    this.showBtnDescarga = this.masterSelectedServicios;
  }

  isAllSelected() {
    this.masterSelectedServicios =this.dataTable.every((item: any) => {
      item.isSelected ===true
    });
    
    this.showBtnDescarga = this.dataTable.some((item: any) => item.isSelected === true);    
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (let i = 0; i < this.checkedList.length; i++) {
      if (this.checkedList[i].isSelected)
        this.checkedList.push(this.checkedList[i]);
    }
  }
}
