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
  nombreDocumento: string = '';
  documentoFileName: string = "Ubicación del documento";
  prevDocumento: boolean = false;
  accionDetalle: number = 1;
  dataAnexos: any[] = [];
  prevAnexo: boolean = false;
  notificacionPrim: boolean = false;
  notificacionSeg: boolean = false;
  notificacionTerc: boolean = false;
  documentoNombre: string = '';
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

  onDocumentoFileChange(event: any){
    this.documentoFileName = event.target.files[0].name;
  }
  previsualizarDocumento() {
    this.prevDocumento = true;
  }
  guardarDocumento() {
    this.toastrService.success('Se ha guardado exitosamente el documento.')
    this.showAgregarDocumento = false;
  }
  cambioAccionDetalle(accion : number) {
    this.accionDetalle = accion;
  }
  guardarOficio() {
    this.toastrService.success('Se ha guardado exitosamente el oficio.')
    this.showGenerarOficio = false;
  }  

  openVistaPreviaAnexo(documentoNombre: string = '',  tipo: string) {
    console.log(documentoNombre);
    this.documentoNombre = documentoNombre;
    if (documentoNombre.includes('anexo')) {
      this.pdfSrc = "../../../../../assets/nombre.pdf";
      this.abrirPdf();
    }
  }
  abrirPdf(){
    this.prevAnexo = true
  }
  descargarAnexo() {
    this.toastrService.success('Se ha descargado correctamente el anexo.')
  }

  primeraNotificacionDatos() {
    this.notificacionPrim = !this.notificacionPrim
  }

  segundaNotificacionDatos() {
    this.notificacionSeg = !this.notificacionSeg
  }

  terceraNotificacionDatos() {
    this.notificacionTerc = !this.notificacionTerc
  }

}
  

