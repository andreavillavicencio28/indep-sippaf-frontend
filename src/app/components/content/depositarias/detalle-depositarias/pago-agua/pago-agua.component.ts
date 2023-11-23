import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { informeMensualData, informeMensualHistorico, pagoAgua } from '../../datosDepositaria';

@Component({
  selector: 'sg-pago-agua',
  templateUrl: './pago-agua.component.html',
  styleUrls: ['./pago-agua.component.scss']
})
export class PagoAguaComponent {
  anioSelect: number = 0;
  dataInforme = pagoAgua;
  showVistaPrevia: boolean = false;
  idElement: number = 0;
  pdfSrc:string = '';
  mesInforme: string = '';
  objetoDetalle: any = {};
  showPdf:boolean = false;
  tipoInforme: string = '';
  showButton: boolean = false;
  tipoModal: string = 'true';
  accionDetalle: number = 1;
  showDetalle: boolean = false;
  documentoNombre: string = '';
  tituloObs: string = '';
  showObs: boolean = false;
  listaImagenes: any[] = [];
  indiceActivoImagenes = 0;
  tipoAccion: boolean = false;
  documentos = [
    {
      id: 1,
      tipoDocumento: 'Oficio de solicitud de O. T.',
      tipoFirma: false,
      firmaElectronica: false,
      firma: false,
      vistaPrevia: true,
      downloadDoc: false,
      upDocumento: false,
      eliminar: false,
    },
    {
      id: 2,
      tipoDocumento: 'Opinión Técnica',
      tipoFirma: true,
      firmaElectronica: false,
      firma: true,
      vistaPrevia: true,
      downloadDoc: true,
      upDocumento: true,
      eliminar: true,
    },
    {
      id: 3,
      tipoDocumento: 'Documento REPUVE',
      tipoFirma: false,
      firmaElectronica: false,
      firma: false,
      vistaPrevia: true,
      downloadDoc: true,
      upDocumento: true,
      eliminar: true,
    },
  ]


  constructor(
    private toastrService: ToastrService,
    private confirmarModalService: ConfirmarModalService,
  ) {
    this.anioSelect = (new Date().getFullYear());


  }

  changeAnio() {
    if(this.anioSelect == 2023) {
      this.dataInforme = informeMensualData
    } else {
      this.dataInforme = informeMensualHistorico
    }
  }
  selectYear(): number[] {
    const year = (new Date()).getFullYear() + 1;
    const selectYear: number[] = []

    for (let index = year; index >= 2000; index--) {
      selectYear.push(index);
    }
    return selectYear;
  }
  openVistaPrevia(id: number, accion: string = '', mes: string = '', tipoInforme: string = '') {
    this.idElement = id;
    this.mesInforme = mes;
    this.tipoInforme = tipoInforme;
    this.showButton = accion ? true : false;

    this.showVistaPrevia = true;
  }
  cambioAccionDetalle(accion: number) {
    this.accionDetalle = accion;
  }
  cerrarCamvasObs() {
    console.log('cierro el canvas');
    this.showObs = false;
  }
  cerrarCamvasObsConfirmar() {

    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    let mensaje = this.tipoAccion ? '¿Estas seguro que quieres aprobar el pago del agua?' : '¿Estas seguro que quieres rechazar el pago del agua?';
    let titulomsm = this.tipoAccion ? 'Se aprobo correctamente el pago del agua ' : 'Se rechazo correctamente el pago del agua';
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        // El usuario aceptó
        if(this.tipoAccion ) {
          this.dataInforme.find( el => {
            if(el.id == this.idElement) {
              el.estatus = 'Validado'
            }
          });
        } else {
          this.dataInforme.find( el => {
            if(el.id == this.idElement) {
              el.estatus = 'Rechazado'
            }
          });
        }

        this.cerrarCamvasObs();
        this.showVistaPrevia = false;
        // this.respuestaCofirmarModal.emit(true);
        this.toastrService.success(titulomsm);
      } else {
        // El usuario canceló
        //this.valorRespuestaComfirmarModal.emit(false);
      }

    });
  }
  rechazar() {
    // VALIDACIONES
    this.abrirCamvasObs(false);
    this.tituloObs = 'Rechazar';
  }
  abrirCamvasObs(tipoAccion: boolean) {
    this.showObs = true;
    this.tipoAccion = tipoAccion;
  }
  aprobar() {
    // VALIDACIONES
    this.abrirCamvasObs(true);
    this.tituloObs = 'Aprobar';
  }
  closeOffCanvas() {
    this.showVistaPrevia = false;
  }

  descarga() {
    const downloadLink = document.createElement('a');
    const fileName = 'Vistaprevia.pdf';

    downloadLink.href = this.pdfSrc;
    downloadLink.download = fileName;
    downloadLink.click();
  }


  verDocumento(documentoNombre: string = '',  tipo: string) {
    console.log(documentoNombre);
    this.documentoNombre = documentoNombre;
    if (documentoNombre.includes('Oficio')) {
      this.pdfSrc = "../../../../../assets/Recibo_Agua.pdf";
      this.abrarPdf();
    } else if (documentoNombre.includes('Opinión')) {
      this.pdfSrc = "../../../../../assets/opinion-tecnica.pdf";
      this.abrarPdf();
    } else {
      this.showDetalle = true;
      this.tipoModal = tipo;
    }
  }
  abrarPdf(){
    this.showPdf = true
  }

  cerrarPdf(){
    // this.descarga();
    this.showPdf = false
  }
  cambiarImagen(paso: number) {
    this.indiceActivoImagenes += paso;

    if (this.indiceActivoImagenes < 0) {
      this.indiceActivoImagenes = this.listaImagenes.length - 1;
    } else if (this.indiceActivoImagenes >= this.listaImagenes.length) {
      this.indiceActivoImagenes = 0;
    }
  }
  cerrarDetalle() {
    this.showDetalle = false;
  }



}

