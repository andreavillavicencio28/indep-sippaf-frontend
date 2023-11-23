import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONSTANTES } from 'src/app/shared/constantes/constantes';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AdminModule } from '../../admin.module';


@Component({
  selector: 'sg-remocion',
  templateUrl: './remocion.component.html',
  styleUrls: ['./remocion.component.scss']
})
export class RemocionComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante = '';

  tipoAccion: boolean = false;
  accion: number = 1; // accion de edicion
  accionDetalle: number = 1; // accion de detalle

  accionDetalleModalEdicion: number = 1;


  tituloObs: string = '';
  documentoNombre: string = '';
  showCargaDocumento: boolean = false;
  tipoModal: string = 'true';

  showObs: boolean = false;
  showDetalle: boolean = false;
  showFirma: boolean = false;
  showEditar: boolean = false;

  showPrimasNoDevengadas: boolean = false;
  notificacionPrim: boolean = false;
  notificacionSeg: boolean = false;
  visitaVerificacion: boolean = false;
  adeudosContraprestacion: boolean = false;


  FormularioConfirma !: FormGroup;
  certFileName: string = "Ubicación del certificado";
  keyFileName: string = "Ubicación de la llave privada";

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

  selectOrdenRemocion = [
    {
      id: 1,
      descripcion: 'Orden judicial'
    },
    {
      id: 2,
      descripcion: 'Orden ministerial'
    },
    {
      id: 3,
      descripcion: 'Atribuciones del INDEP'
    },
    {
      id: 4,
      descripcion: 'A petición del depositario'
    },
    {
      id: 5,
      descripcion: 'Incumplimiento de obligaciones'
    },
    {
      id: 6,
      descripcion: 'Siniestro'
    }  
  ]


  @Input() tipo: number = 0;
  // TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTE OUTPUT
  @Output() respuestaCofirmarModal = new EventEmitter<boolean>();

  constructor(
    private confirmarModalService: ConfirmarModalService,
    public toastrService: ToastrService,
    private fb: FormBuilder
  ) {
    this.crearFormularioConFirma();
    this.FormularioConfirma.controls['rfc'].disable();
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

  cambioAccionDetalleModalEdicion(accion: number) {
    this.accionDetalleModalEdicion = accion;
  }
  // TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTAS FUNCONES
  aprobar() { // VALIDACIONES
    this.abrirCamvasObs(true);
    this.tituloObs = 'Aprobar';
  }

  rechazar() { // VALIDACIONES
    this.abrirCamvasObs(false);
    this.tituloObs = 'Rechazar';
  }

  cambioAccionDetalle(accion: number) {
    this.accionDetalle = accion;
  }

  editar() {
    this.showEditar = true;

  }

  // #################################################################################
  abrirCamvasObs(tipoAccion: boolean) {
    this.showObs = true;
    this.tipoAccion = tipoAccion;
  }


  cerrarCamvasObsConfirmar() { // VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    let mensaje = this.tipoAccion ? '¿Estas seguro que quieres aprobar la remoción?' : '¿Estas seguro que quieres rechazar la remoción?';
    let titulomsm = this.tipoAccion ? 'Se aprobo correctamente la remoción' : 'Se rechazo correctamente la remoción';
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) { // El usuario aceptó
        this.cerrarCamvasObs();
        this.respuestaCofirmarModal.emit(true);
        this.toastrService.success(titulomsm);
      } else {
        // El usuario canceló
        // this.valorRespuestaComfirmarModal.emit(false);
      }

    });
  }

  cerrarCamvasObs() {
    console.log('cierro el canvas');
    this.showObs = false;
  }

  // Acciones en la tabla de documentos
  cerrarDetalle() {
    this.showDetalle = false;
  }


  verDocumento(documentoNombre: string = '', tipo: string) {
    this.showDetalle = true;
    this.tipoModal = tipo;
    this.documentoNombre = documentoNombre;
  }

  abrirPdf(documentoNombre: string = '') {
    this.documentoNombre = documentoNombre;
    this.showDetalle = true;
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

  cargarDocumento(documentoNombre: string = '', accion: string) {
    this.documentoNombre = documentoNombre
    this.showCargaDocumento = true;
  }

  cerrarCargaDocumentos() {
    this.showCargaDocumento = false;
  }

  uploadDocumento() {
    this.toastrService.success(`Se ha subido el documento ${this.documentoNombre} exitosamente.`);
    this.showCargaDocumento = false;
  }

  openFirma(nombre: string) {
    this.documentoNombre = nombre;
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

  onCertFileChange(event: any) {
    this.certFileName = event.target.files[0].name;
  }

  onKeyFileChange(event: any) {
    this.keyFileName = event.target.files[0].name;
  }

  guardarEdicion() {
    this.showEditar = false;
    this.toastrService.success('Se han guardado correctamente los cambios.')

  }

  cerrarEditar() {
    this.confirmarModalService.abriraModal('¿Seguro quieres salir sin guardar cambios?').subscribe(result => {
      if (result) {
        // El usuario aceptó
        this.showEditar = false;
      }

    });

  }

  primasNoDevengadas() {
    this.showPrimasNoDevengadas = !this.showPrimasNoDevengadas;
  }

  primeraNotificacionDatos() {
    this.notificacionPrim = !this.notificacionPrim
  }

  segundaNotificacionDatos() {
    this.notificacionSeg = !this.notificacionSeg
  }

  changeVisitaVerificacion() {
    this.visitaVerificacion = !this.visitaVerificacion;
  }

  
  changeAdeudosContraprestacion() {
    this.adeudosContraprestacion = !this.adeudosContraprestacion;
  }
}
