import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';

@Component({
  selector: 'sg-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.scss']
})
export class ValidacionComponent {
  observaciones: boolean = false;
  showObs: boolean = false;
  tituloObs: string = '';
  tipoAccion: boolean = false;



  //TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTE OUTPUT
  @Output() respuestaCofirmarModal = new EventEmitter<boolean>();
  @Input() id_solicitud: number = 0;
  @Input() solicitante = '';
  
  tipo:number = 0;

  constructor(
    private confirmarModalService: ConfirmarModalService,
    public toastrService: ToastrService
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

  abrirCamvasObs(tipoAccion: boolean) {
    this.showObs = true;
    this.tipoAccion = tipoAccion;
  }

  cerrarCamvasObs() {
    console.log('cierro el canvas');
    this.showObs = false;
  }

  cerrarCamvasObsConfirmar() {

    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    let mensaje = this.tipoAccion ? '¿Estas seguro que quieres aprobar la validación?' : '¿Estas seguro que quieres rechazar la validación?';
    let titulomsm = this.tipoAccion ? 'Se aprobo correctamente la validación ' : 'Se rechazo correctamente la validación';
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

  mostrarObservaciones(respuesta: string = '') {
    this.observaciones = (respuesta === 'si') ? false : true;
  }



}
