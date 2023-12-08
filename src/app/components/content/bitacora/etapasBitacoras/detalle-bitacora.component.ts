import { Component, Input } from '@angular/core';
import { datosBitacora,documentos } from './datosBitacora'

@Component({
  selector: 'sg-detalle-bitacora',
  templateUrl: './detalle-bitacora.component.html',
  styleUrls: ['./detalle-bitacora.component.scss']
})
export class DetalleBitacoraComponent {
  @Input() id_bitacora: number = 0;
  @Input() acreditado: string = '';

  showDetalleBitacora: boolean = false;
  showDocumento: boolean = false;
  nombreDocumento: string = '';
  datosBitacora = datosBitacora;
  documentos = documentos;
  pdfSrc:string = '';
  pdfSrc2:string = '';
  documentoNombre: string = '';
  prevAnexo: boolean = false;
  showPdf:boolean = false;
  
  showDocumentoJurico: boolean = false;

  mostrarDetalle() {
    this.showDetalleBitacora = true;    
  }
  verDocumento(filename: string) {
    this.showDocumento = true;
    this.nombreDocumento = filename;    
  }
  cerrarPDF() {
    this.prevAnexo = false;
  }

  openVistaPreviaAnexo(documentoNombre: string = '',  tipo: string) {
    this.documentoNombre = documentoNombre;
    if (documentoNombre.includes('anexo')) {
      this.pdfSrc = "../../../../../assets/pdf2.pdf";
      this.abrirPdf();
    }
  }
  abrirPdf(){
    this.prevAnexo = true
  }
  downloadDocJuridico() {
    const downloadLink = document.createElement('a');
    const fileName = 'Escaneado 1234.pdf';

    downloadLink.href = this.pdfSrc;
    downloadLink.download = fileName;
    downloadLink.click();
  }

}
