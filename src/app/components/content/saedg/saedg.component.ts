import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';

@Component({
  selector: 'sg-saedg',
  templateUrl: './saedg.component.html',
  styleUrls: ['./saedg.component.scss']
})
export class SaedgComponent {
  

  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';


  accionDetalle: number = 1; // accion de detalle
  documentoNombre: string = '';
  showDetalle: boolean = false;
  showGenerarOficio: boolean = false;
  showAgregarDocumento:  boolean = false;
  prevDocumento: boolean = false;
  prevAnexo: boolean = false;
  documentoFileName: string = "Ubicación del documento";



  constructor(
    private confirmarModalService: ConfirmarModalService,
    private fb: FormBuilder,
    public toastrService: ToastrService
  ) {
    
  }

  datosDocumentos: any[] = [
    {
      nombreDoc: 'Acta'
    },
    {
      nombreDoc: 'CURP'
    },
    {
      nombreDoc: 'Identificacion Oficial'
    }
  ];
 


  abrirPdf(documentoNombre: string = '') {
    this.documentoNombre = documentoNombre;
    this.showDetalle = true;
  }


  cambioAccionDetalle(accion: number) {
    this.accionDetalle = accion;
  }

  generarOficio() {
    this.showGenerarOficio = true;
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


  guardarOficio() {
    this.toastrService.success('Se ha guardado exitosamente el oficio.')
    this.showGenerarOficio = false;
  }  

  agregarDocumento() {
    this.showAgregarDocumento = true;
  }

  onDocumentoFileChange(event: any){
    this.documentoFileName = event.target.files[0].name;
  }

  guardarDocumentos() {
    this.toastrService.success("Se ha guardado exitosamente el documento.")
    console.log('Documentos guardados:', this.datosDocumentos);
  }

  completarTarea() {
    this.toastrService.success("Se ha completado la tarea exitosamente")
    console.log('Tarea completada');
  }

}
