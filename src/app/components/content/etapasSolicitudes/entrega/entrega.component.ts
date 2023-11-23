import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Bienes} from '../opinion-tecnica/propuesta-bien-datos';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmarModalService} from 'src/app/services/confirmar-modal/confirmar-modal.service';
import {ToastrService} from 'ngx-toastr';
import {CONSTANTES} from 'src/app/shared/constantes/constantes';

@Component({selector: 'sg-entrega', templateUrl: './entrega.component.html', styleUrls: ['./entrega.component.scss']})
export class EntregaComponent {
    @Input()id_solicitud : number = 0;
    @Input()solicitante = '';

    tipoAccion : boolean = false;
    accion : number = 1; // accion de edicion
    accionDetalle : number = 1; // accion de detalle

    listaBienesPropuestos : any[] = Bienes;
    listaImagenes : any[] = [];
    indiceActivoImagenes = 0;

    showObs : boolean = false;
    showFirma : boolean = false;
    tituloObs : string = '';

    tipoSolicitante = '';

    FormularioConfirma !: FormGroup;
    certFileName : string = "Ubicación del certificado";
    keyFileName : string = "Ubicación de la llave privada";

    showDetalle : boolean = false;
    tipoModal : string = 'true';
    documentoNombre : string = '';
    showCargaDocumento: boolean = false;


    @Input()tipo : number = 0;
    // TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTE OUTPUT
    @Output()respuestaCofirmarModal = new EventEmitter<boolean>();

    constructor(private confirmarModalService : ConfirmarModalService, public toastrService : ToastrService, private fb : FormBuilder,) {
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

    // TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTAS FUNCONES
    aprobar() { // VALIDACIONES
        this.abrirCamvasObs(true);
        this.tituloObs = 'Aprobar';
    }

    rechazar() { // VALIDACIONES
        this.abrirCamvasObs(false);
        this.tituloObs = 'Rechazar';
    }

    cambioAccionDetalle(accion : number) {
        this.accionDetalle = accion;
    }

    // #################################################################################
    abrirCamvasObs(tipoAccion : boolean) {
        this.showObs = true;
        this.tipoAccion = tipoAccion;
    }

    cerrarCamvasObsConfirmar() { // VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
        let mensaje = this.tipoAccion ? '¿Estas seguro que quieres aprobar la entrega?' : '¿Estas seguro que quieres rechazar la entrega?';
        let titulomsm = this.tipoAccion ? 'Se aprobo correctamente la entrega' : 'Se rechazo correctamente la entrega';
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

    cerrarDetalle() {
        this.showDetalle = false;
    }

    openFirma() {
        this.showFirma = true;
    }

    cerrarFirma() {
        this.showFirma = false;
    }

    firmar() { // VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
        let titulomsm = 'Se firmó correctamente la entrega';
        this.cerrarFirma();
        this.toastrService.success(titulomsm);
        console.log('firmar');

    }
    validarFirma() {}


    onCertFileChange(event : any) {
        this.certFileName = event.target.files[0].name;
    }

    onKeyFileChange(event : any) {
        this.keyFileName = event.target.files[0].name;
    }

    verDocumento(documentoNombre : string = '', tipo : string) {
        this.showDetalle = true;
        this.tipoModal = tipo;
        this.documentoNombre = documentoNombre;
    }

    descargarDocumento(documento : string) { // VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
        this.documentoNombre = documento;
        let mensaje = `¿Estas seguro que quieres descargar el documento ${
            this.documentoNombre
        }?`;
        let titulomsm = `Se descargó correctamente la ${
            this.documentoNombre
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

    abrirPdf(documentoNombre : string = '') {
        this.documentoNombre = documentoNombre;
        this.showDetalle = true;
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
  
}
