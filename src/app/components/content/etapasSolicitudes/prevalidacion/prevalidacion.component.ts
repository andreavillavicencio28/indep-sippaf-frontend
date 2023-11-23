import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';

@Component({
  selector: 'sg-prevalidacion',
  templateUrl: './prevalidacion.component.html',
  styleUrls: ['./prevalidacion.component.scss']
})
export class PrevalidacionComponent {
  @Input() tipo: number = 0;
  @Input() id_solicitud: number = 0;
  @Input() solicitante = '';

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


  objetoDetalle: any = {};
  indiceObjetoDetalle: any = {};
  tipoModal: string = 'true';

  mostrarMensaje: boolean = true;

  documentoNombre: string = '';

   //TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTE OUTPUT
   @Output() respuestaCofirmarModal = new EventEmitter<boolean>();

   constructor(
    private confirmarModalService: ConfirmarModalService,
    private fb: FormBuilder,
    public toastrService: ToastrService
  ) {
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
    this.showEditar = false;
    this.toastrService.success("Se guardó correctamente la prevalidación");
  
  }
}
