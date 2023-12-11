import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CONSTANTES } from 'src/app/shared/constantes/constantes';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { datosPropuesta, documentos } from '../detalle-solicitud/datosPropuesta'

@Component({
  selector: 'sg-validacionPro',
  templateUrl: './validacionPro.component.html',
  styleUrls: ['./validacionPro.component.scss']
})
export class ValidacionProComponent {
  @Input() tipo: number = 0;
  @Input() id_solicitud: number = 0;
  @Input() solicitante = '';

  datosPropuesta = datosPropuesta;
  
  observaciones: boolean = false;
  accionEditar: boolean = false;
  tipoAccion: boolean = false;
  accion: number = 1; // accion de edicion
  accionDetalle: number = 1; // accion de detalle

  showEditar: boolean = false;
  showObs: boolean = false;
  tituloObs: string = '';
  showDetalle: boolean = false;
  showFirma: boolean = false;
  showCargaDocumento:boolean = false;
  showGenerarOficio:boolean=false;
  pdfSrc: string = '';
  prevAnexo: boolean = false;

  objetoDetalle: any = {};
  indiceObjetoDetalle: any = {};
  tipoModal: string = 'true';

  mostrarMensaje: boolean = true;

  documentoNombre: string = '';
  FormularioConfirma !: FormGroup;
  certFileName: string = "Ubicación del certificado";
  keyFileName: string = "Ubicación de la llave privada";
  formFile:number=0;
  
   //TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTE OUTPUT
   @Output() respuestaCofirmarModal = new EventEmitter<boolean>();

   constructor(
    private confirmarModalService: ConfirmarModalService,
    private fb: FormBuilder,
    public toastrService: ToastrService
  ) {
    this.crearFormularioConFirma();
    this.FormularioConfirma.controls['rfc'].disable();
  }

   //TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTAS FUNCONES
   aprobar() {
    // VALIDACIONES
    this.abrirCamvasObs(true);
    this.tituloObs = 'Aprobar';
  }

  rechazar() {
    // VALIDACIONES
    this.abrirCamvasObs(false);
    this.tituloObs = 'Rechazar';
  }

  editar() {
    this.abrirEditar();
  }
  
  abrirEditar() {
    this.showEditar = true;
    this.accion = 1;
  }

  cerrarEditar() {
    this.confirmarModalService.abriraModal('¿Seguro quieres salir sin guardar cambios?').subscribe(result => {
      if (result) {
        // El usuario aceptó
        this.showEditar = false;
      }

    });
  }

  abrirDetalle(datos: any, indice: number, tipo: string) {
    //LO IDEAL SERIA OBTENER DATOS COMPLETOS                    
    this.objetoDetalle = datos;
    this.indiceObjetoDetalle = indice;
    this.tipoModal = tipo;
    this.showDetalle = true;
  }

  cerrarDetalle() {
    this.showDetalle = false;
  }

  cambioAccion(accion: number) {
    this.accion = accion;
  }


  cambioAccionDetalle(accion: number) {
    this.accionDetalle = accion;
  }

  ocultarMensaje() {
    this.mostrarMensaje = false;
  }

  abrirCamvasObs(tipoAccion: boolean) {
    this.showObs = true;
    this.tipoAccion = tipoAccion;
  }

  cerrarCamvasObsConfirmar() {

    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    let mensaje = this.tipoAccion ? '¿Estas seguro que quieres aprobar la prevalidación?' : '¿Estas seguro que quieres rechazar la prevalidación?';
    let titulomsm = this.tipoAccion ? 'Se aprobo correctamente la prevalidación ' : 'Se rechazo correctamente la prevalidación';
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        // El usuario aceptó
        this.cerrarCamvasObs();
        this.respuestaCofirmarModal.emit(true);
        this.toastrService.success(titulomsm);
      } else {
        // El usuario canceló
        //this.valorRespuestaComfirmarModal.emit(false);
      }

    });
  }

  cerrarCamvasObs() {
    console.log('cierro el canvas');
    this.showObs = false;
  }

  mostrarObservaciones(respuesta: string = '') {
    this.observaciones = (respuesta === 'si') ? false : true;
  }

  guardarCambios() {
    this.confirmarModalService.abriraModal('Al guardar esta información se marcara como tarea completada').subscribe(result => {
      if (result) {
        // El usuario aceptó
        this.showEditar = false;
        this.toastrService.success("Se guardó correctamente la información");
  
      }

    });
   // this.showEditar = false;
   // this.toastrService.success("Se guardó correctamente la prevalidación");
  
  }
  documentosCarga = [
    {
      id: 1,
      nombreDocumento: 'Acta de Hechos',
    },
    {
      id: 2,
      nombreDocumento: 'Archivo Notificación',
    },
    {
      id: 3,
      nombreDocumento: 'Acta de Transferencia',
    },
    {
      id: 4,
      nombreDocumento: 'Acuerdo de aseguramiento',
    },
    {
      id: 5,
      nombreDocumento: 'Anexo G',
    },
  ]

  openFirma() {
   // this.documentoNombre = nombre;
    this.showFirma = true;
  }

  cerrarFirma() {
    this.showFirma = false;
  }

  firmar() { // VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    let titulomsm = `Se firmó correctamente ${this.documentoNombre}`;
    this.cerrarFirma();
    this.toastrService.success(titulomsm);
    console.log('firmar');

  }

  abrirPdf(documentoNombre: string = '') {
    //this.prevAnexo = true
    this.documentoNombre = documentoNombre;
    this.showDetalle = true;
  }

  cargarDocumento(documentoNombre: string = '', accion: string) {
    this.documentoNombre = documentoNombre
    this.showCargaDocumento = true;
  }

  cerrarCargaDocumentos() {
    this.showCargaDocumento = false;
  }

  uploadDocumento() {
    this.toastrService.success(`Anexo y/o documentación guardada correctamente`);
    this.showCargaDocumento = false;
  }

  descargarDocumento(documento: string) { // VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    this.documentoNombre = documento;
    let mensaje = `¿Estas seguro que quieres descargar el documento ${this.documentoNombre
      }?`;
    let titulomsm = `Se descargó correctamente la ${this.documentoNombre
      }`;
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        // El usuario aceptó
        // this.cerrarCamvasObs();
        this.respuestaCofirmarModal.emit(true);
        this.toastrService.success(titulomsm);
      } else {
        // El usuario canceló
        // this.valorRespuestaComfirmarModal.emit(false);
      }

    });
  }

  descargarOficio(documento: string) { // VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    this.documentoNombre = documento;
    let mensaje = `¿Estas seguro que quieres descargar el documento ${this.documentoNombre
      }?`;
    let titulomsm = `Se descargó correctamente la ${this.documentoNombre
      }`;
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        // El usuario aceptó
        // this.cerrarCamvasObs();
        this.cerrarOficio();
        this.respuestaCofirmarModal.emit(true);
        const downloadLink = document.createElement('a');
        const fileName = 'Oficio.pdf';
    
        downloadLink.href = this.pdfSrc;
        downloadLink.download = fileName;
        downloadLink.click();
        this.toastrService.success(titulomsm);
        
      } else {
        // El usuario canceló
        //this.respuestaCofirmarModal.emit(false);
      }

    });
  }


  
  eliminarDocumento(nombreDoc: string = '') {
    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    this.documentoNombre = nombreDoc;
    let mensaje = `¿Estas seguro que quieres eliminar el documento ${this.documentoNombre}?`;
    let titulomsm = `Se eliminó correctamente el ${this.documentoNombre}`;
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        // El usuario aceptó
        //  this.cerrarCamvasObs();
        //  this.respuestaCofirmarModal.emit(true);
        this.toastrService.success(titulomsm);
      } else {
        // El usuario canceló
        //this.valorRespuestaComfirmarModal.emit(false);
      }

    });

  }
  crearFormularioConFirma() {
    this.FormularioConfirma = this.fb.group({
      key: [
        '',
        [Validators.required]
      ],
      cer: [
        '',
        [Validators.required]
      ],
      contra: [
        '',
        [Validators.required]
      ],
      rfc: [
        '',
        [
          Validators.required, Validators.pattern(CONSTANTES.EXP_RFC)
        ]
      ]
    });
  }

  onCertFileChange(event: any) {
    this.certFileName = event.target.files[0].name;
  }

  onKeyFileChange(event: any) {
    this.keyFileName = event.target.files[0].name;
  }
  openOficio() {
    // this.documentoNombre = nombre;
     this.showGenerarOficio = true;
   }
 
  cerrarOficio() {
    //this.confirmarModalService.abriraModal('¿Seguro quieres salir?').subscribe(result => {
    //  if (result) {
        // El usuario aceptó
        this.showGenerarOficio = false;
    //  }

   // });
  }

  openVistaPreviaAnexo(documentoNombre: string = '',  tipo: string) {
    this.documentoNombre = documentoNombre;
    if (documentoNombre.includes('anexo')) {
      this.pdfSrc = "../../../../../assets/pdf2.pdf";
      this.abrirPdf();
    }
  }
  
}
