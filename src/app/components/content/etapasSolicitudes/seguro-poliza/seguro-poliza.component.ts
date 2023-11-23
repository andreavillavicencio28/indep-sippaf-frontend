import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { Bienes } from '../opinion-tecnica/propuesta-bien-datos';

@Component({
  selector: 'sg-seguro-poliza',
  templateUrl: './seguro-poliza.component.html',
  styleUrls: ['./seguro-poliza.component.scss']
})
export class SeguroPolizaComponent {
  accionEditar: boolean = false;
  tipoAccion: boolean = false;
  accion: number = 1; // accion de edicion
  accionDetalle: number = 1; // accion de detalle
  @Input() id_solicitud: number = 0;
  @Input() solicitante = '';
  listaBienesPropuestos: any[] = Bienes;
  listaImagenes: any[] = [];
  indiceActivoImagenes = 0;

  showEditar: boolean = false;
  showObs: boolean = false;
  showFirma: boolean = false;
  tituloObs: string = '';
  showDetalle: boolean = false;

  objetoDetalle: any = {};
  indiceObjetoDetalle: any = {};
  tipoModal: string = 'true';

  certFileName: string = "Ubicación del certificado";
  keyFileName: string = "Ubicación de la llave privada";

  documentoNombre: string = '';

  @Input() tipo: number = 0;
  //TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTE OUTPUT
  @Output() respuestaCofirmarModal = new EventEmitter<boolean>();

  constructor(
    private confirmarModalService: ConfirmarModalService,
    public toastrService: ToastrService,
  ) { }

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
    let mensaje = this.tipoAccion ? '¿Estas seguro que quieres aprobar la póliza de seguro?' : '¿Estas seguro que quieres rechazar la póliza de seguro?';
    let titulomsm = this.tipoAccion ? 'Se aprobo correctamente la póliza de seguro' : 'Se rechazo correctamente la póliza de seguro';
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        // El usuario aceptó
        this.cerrarCamvasObs();
        // this.respuestaCofirmarModal.emit(true);
        this.toastrService.success(titulomsm);
      } else {
        // El usuario canceló
        //this.valorRespuestaComfirmarModal.emit(false);
      }

    });
  }


  cerrarCamvasObs() {
    this.showObs = false;
  }

  cerrarDetalle() {
    this.showDetalle = false;
  }


  abrirDetalle(datos: any, indice: number, tipo: string) {
    console.log(tipo);

    this.listaImagenes = [{ imagen: '../../../../assets/imgen/casa.jpg' },
    { imagen: '../../../../assets/imgen/casa2.png' },
    { imagen: '../../../../assets/imgen/casa3.jpg' }];

    //LO IDEAL SERIA OBTENER DATOS COMPLETOS                    
    this.objetoDetalle = datos;
    this.indiceObjetoDetalle = indice;
    this.tipoModal = tipo;
    this.showDetalle = true;
  }

  cambiarImagen(paso: number) {
    this.indiceActivoImagenes += paso;

    if (this.indiceActivoImagenes < 0) {
      this.indiceActivoImagenes = this.listaImagenes.length - 1;
    } else if (this.indiceActivoImagenes >= this.listaImagenes.length) {
      this.indiceActivoImagenes = 0;
    }
  }

  guardarPolizaSeguro() {
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
  }

  abrirEditar() {
    this.showEditar = true;
    this.accion = 1;
  }

  verDocumento(documentoNombre: string = '', tipo: string) {
    this.showDetalle = true;
    this.tipoModal = tipo;
    this.documentoNombre = documentoNombre;
  }

  descargarDocumento(documento: string) {
    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    this.documentoNombre = documento;
    let mensaje = `¿Estas seguro que quieres descargar el documento ${this.documentoNombre}?`;
    let titulomsm = `Se descargó correctamente la ${this.documentoNombre}`;
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        // El usuario aceptó
        //  this.cerrarCamvasObs();
        // this.respuestaCofirmarModal.emit(true);
        this.toastrService.success(titulomsm);
      } else {
        // El usuario canceló
        //this.valorRespuestaComfirmarModal.emit(false);
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
}
