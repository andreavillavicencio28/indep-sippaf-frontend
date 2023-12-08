import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sg-detalle-juridico',
  templateUrl: './detalle-juridico.component.html',
  styleUrls: ['./detalle-juridico.component.scss']
})
export class DetalleJuridicoComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';

  showDetalleSolicitud: boolean = false;
  showDocumento: boolean = false;
  showGenerarOficio: boolean = false;
  showAgregarDocumento:  boolean = false;
  showAgregarAnexo: boolean = false;
  nombreDocumento: string = '';
  documentoFileName: string = "Ubicación del documento";
  anexoFileName: string = "Ubicación del anexo";
  prevDocumento: boolean = false;
  accionDetalle: number = 1;
  dataAnexos: any[] = [];
  dataDocumentos: any[] = [];
  prevAnexo: boolean = false;
  documentoNombre: string = '';
  anexoNombre: string = '';
  pdfSrc:string = '';
  pdfSrc2:string = '';
  showDetalle: boolean = false;
  tipoModal: string = 'true';
  showPdf:boolean = false;

  constructor(
    private toastrService : ToastrService,    
  ) {
    this.dataAnexos = [
      {
        name: "Cedula Juridica",
      },
      {
        name: "Recordatorio",
      },
      {
        name: "Oficio Solicitud",
      },
      {
        name: "Otro",
      },
    ];
    this.dataDocumentos = [
      {
        name: "Solicitud Información",
      },
      {
        name: "Recordatorio",
      },
      {
        name: "Oficio Solicitud",
      },
      {
        name: "Otro",
      },
    ]
  }

  mostrarDetalle() {
    this.showDetalleSolicitud = true;    
  }

  cerrarCanvas(tipo: string) {
    switch (tipo) {
      case 'oficio':
        this.showGenerarOficio = false;
        break;
      case 'documento':
        this.showAgregarDocumento = false;
        break;       
      case 'prevDocumento':
        this.prevDocumento = false;
        break;
      case 'prevAnexo':
        this.prevAnexo = false;
        break;
      case 'showAgregarAnexo':
        this.showAgregarAnexo = false;
        break;
      default:
        break;
    }
  }

  verDocumento(filename: string) {
    this.showDocumento = true;
    this.nombreDocumento = filename;    
  }

  generarOficio() {
    this.showGenerarOficio = true;
  }
  agregarDocumento() {
    this.showAgregarDocumento = true;
  }
  agregarAnexo() {
    this.showAgregarAnexo = true;
  }
  onDocumentoFileChange(event: any){
    this.documentoFileName = event.target.files[0].name;
  }
  onAnexoFileChange(event: any) {
    this.anexoFileName = event.target.files[0].name;
  }
  previsualizarDocumento() {
    this.prevDocumento = true;
  }
  previsualizarAnexo() {
    this.prevAnexo = true;
  }
  guardarDocumento() {
    this.toastrService.success('Se ha guardado exitosamente el documento.')
    this.showAgregarDocumento = false;
  }
  guardarAnexo() {
    this.toastrService.success('Se ha guardado exitosamente el anexo.')
    this.showAgregarAnexo = false;
  }
  cambioAccionDetalle(accion : number) {
    this.accionDetalle = accion;
  }
  guardarOficio() {
    this.toastrService.success('Se ha guardado exitosamente el oficio.')
    this.showGenerarOficio = false;
  }  

  openVistaPreviaDocumento(documentoNombre: string = '',  tipo: string) {
    this.documentoNombre = documentoNombre;
    if (documentoNombre.includes('documento')) {
      this.pdfSrc = "../../../../../assets/nombre.pdf";
      this.abrirPdfDocummento();
    }
  }

  openVistaPreviaAnexo(anexoNombre: string = '',  tipo: string) {
    this.anexoNombre = anexoNombre;
    if (anexoNombre.includes('anexo')) {
      this.pdfSrc = "../../../../../assets/nombre.pdf";
      this.abrirPdf();
    }
  }

  abrirPdf(){
    this.prevAnexo = true
  }

  abrirPdfDocummento() {
    this.prevDocumento = true;
  }

  descargasArchivos(tipoArchivo: string = '') {
    if (tipoArchivo == 'documento') {
      this.toastrService.success(`Se ha descargado correctamente el ${tipoArchivo}.`)
    } else {
      this.toastrService.success(`Se ha descargado correctamente el ${tipoArchivo}.`)
    }
  }

  descargarAnexo() {
    this.toastrService.success('Se ha descargado correctamente el anexo.')
  }

  descargarDocumento(documentoNombre: string = '', accion: string) {
    console.log("DESCARGAR DOCUMENTO");
  }

}
  

