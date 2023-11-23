import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { ToastrService } from 'ngx-toastr';
import { Bienes } from '../opinion-tecnica/propuesta-bien-datos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONSTANTES } from 'src/app/shared/constantes/constantes';

@Component({
  selector: 'sg-nombramiento',
  templateUrl: './nombramiento.component.html',
  styleUrls: ['./nombramiento.component.scss']
})

export class NombramientoComponent {
  accionEditar: boolean = false;
  tipoAccion: boolean = false;
  accion: number = 1; // accion de edicion
  accionDetalle: number = 1; // accion de detalle

  listaBienesPropuestos: any[] = Bienes;
  listaImagenes: any[] = [];
  indiceActivoImagenes = 0;

  showEditar: boolean = false;
  showObs: boolean = false;
  showFirma: boolean = false;
  showPdf: boolean = false;
  tituloObs: string = '';

  objetoDetalle: any = {};
  indiceObjetoDetalle: any = {};
  tipoModal: string = 'true';

  FormularioConfirma!: FormGroup;
  certFileName: string = "Ubicación del certificado";
  keyFileName: string = "Ubicación de la llave privada";
  pdfSrc: string = '';

  documentos = [
    {
      id: 1,
      tipoDocumento: 'Nombramiento',
      tipoFirma: false,
      firmaElectronica: true,
      firma: false,
      vistaPrevia: true,
      downloadDoc: true,
      upDocumento: true,
      eliminar: true,
    },
    {
      id: 2,
      tipoDocumento: 'Cédula de valor',
      tipoFirma: true,
      firmaElectronica: true,
      firma: true,
      vistaPrevia: true,
      downloadDoc: true,
      upDocumento: true,
      eliminar: true,
    },
    {
      id: 3,
      tipoDocumento: 'Listado de menaje',
      tipoFirma: false,
      firmaElectronica: true,
      firma: false,
      vistaPrevia: true,
      downloadDoc: true,
      upDocumento: true,
      eliminar: true,
    },
    {
      id: 4,
      tipoDocumento: 'Cédula para uso INDEP',
      tipoFirma: false,
      firmaElectronica: true,
      firma: false,
      vistaPrevia: true,
      downloadDoc: true,
      upDocumento: true,
      eliminar: true,
    },
    {
      id: 5,
      tipoDocumento: 'Vehículos blindado',
      tipoFirma: false,
      firmaElectronica: true,
      firma: false,
      vistaPrevia: true,
      downloadDoc: true,
      upDocumento: true,
      eliminar: true,
    },
    {
      id: 6,
      tipoDocumento: 'Otro',
      tipoFirma: false,
      firmaElectronica: true,
      firma: false,
      vistaPrevia: true,
      downloadDoc: true,
      upDocumento: true,
      eliminar: true,
    },
  ]

  @Input() datosNombramiento: any;
  @Input() tipo:number = 0;
  @Input() tipoNombramiento = '';

  id_solicitud: number = 0;
  solicitante: string = '';
  //TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTE OUTPUT
  @Output() respuestaCofirmarModal = new EventEmitter<boolean>();
  showCargaDocumento: boolean = false;
  documentoNombre: string = '';

  constructor(
    private confirmarModalService: ConfirmarModalService,
    public toastrService: ToastrService,
    private fb: FormBuilder,
  ) {

    this.crearFormularioConFirma();
    this.FormularioConfirma.controls['rfc'].disable();
  }

  crearFormularioConFirma() {
    this.FormularioConfirma = this.fb.group({
      key: ['', [Validators.required]],
      cer: ['', [Validators.required]],
      contra: ['', [Validators.required]],
      rfc: ['', [Validators.required, Validators.pattern(CONSTANTES.EXP_RFC)]],
    });
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

  cambioAccionDetalle(accion: number) {
    this.accionDetalle = accion;
  }

  //#################################################################################
  abrirCamvasObs(tipoAccion: boolean) {
    this.showObs = true;
    this.tipoAccion = tipoAccion;
  }


  cerrarCamvasObsConfirmar() {

    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    let mensaje = this.tipoAccion ? '¿Estas seguro que quieres aprobar el nombramiento?' : '¿Estas seguro que quieres rechazar el nombramiento?';
    let titulomsm = this.tipoAccion ? 'Se aprobo correctamente el nombramiento' : 'Se rechazo correctamente el nombramiento';
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

  guardarNombramiento() {
    this.showEditar = false;
    this.toastrService.success("Se guardó correctamente el nombramiento");
  }

  cerrarEditar() {
    this.confirmarModalService.abriraModal('¿Seguro quieres salir sin guardar cambios?').subscribe(result => {
      if (result) {
        // El usuario aceptó
        this.showEditar = false;
      }

    });
    this.tipoNombramiento = '';

  }

  abrirEditar() {
    this.showEditar = true;
    this.accion = 1;
  }

  openFirma() {
    this.showFirma = true;
  }

  cerrarFirma() {
    this.showFirma = false;
  }

  firmar() {
    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    let titulomsm = 'Se firmó correctamente la opinión técnica ';
    this.cerrarFirma();
    this.toastrService.success(titulomsm);
    console.log('firmar');

  }
  validarFirma() {

  }

  onCertFileChange(event: any) {
    this.certFileName = event.target.files[0].name;
  }

  onKeyFileChange(event: any) {
    this.keyFileName = event.target.files[0].name;
  }

  abrirPdf(documento: string) {
    console.log(documento);
    this.pdfSrc = '';
    if(documento.includes('Nombramiento')) {
      this.pdfSrc = "../../../../../assets/PDF_NOMBRAMIENTOS/NOMBRAMIENTO_DEPOSITARIA_PRODUCTIVA.pdf";
    } else if(documento.includes('valor')) {
      this.pdfSrc = "../../../../../assets/PDF_NOMBRAMIENTOS/CEDULA_DE_VALOR.pdf";
    } else if(documento.includes('INDEP')) {
      this.pdfSrc = "../../../../../assets/PDF_NOMBRAMIENTOS/CEDULA_PARA_USO_INDEP.pdf";
    } else if(documento.includes('blindado')) {
      this.pdfSrc = "../../../../../assets/PDF_NOMBRAMIENTOS/NOMBRAMIENTO_VEHICULO_BLINDADO.pdf";
    } else if(documento.includes('menaje')) {
      this.pdfSrc = "../../../../../assets/PDF_NOMBRAMIENTOS/LISTADO_DE_MENAJE.pdf";
    } else if(documento.includes('Otro')){
      this.pdfSrc = "../../../../../assets/Solicitud_Opinion_tecnica.pdf";
    }
    this.showPdf = true
  }

  cerrarPdf() {
    this.showPdf = false
  }

  descarga(id: number) {
    const downloadLink = document.createElement('a');
    const fileName = 'sampleNombramiento.pdf';

    downloadLink.href = this.pdfSrc;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  verDocumento(documentoNombre: string = '', accion: string) {
    // this.showCargaDocumento = true;
    console.log(documentoNombre);
    
  }

  cargarDocumento(documentoNombre: string = '', accion: string) {
    this.documentoNombre = documentoNombre
    this.showCargaDocumento = true;
  }

  cerrarCargaDocumentos() {
    this.showCargaDocumento = false;
  }

  eliminarDocumento(documento: string) {
     //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
     this.documentoNombre = documento;
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

  uploadDocumento() {
    this.toastrService.success(`Se ha subido el documento ${this.documentoNombre} exitosamente.`);
    this.showCargaDocumento = false;
  }
}
