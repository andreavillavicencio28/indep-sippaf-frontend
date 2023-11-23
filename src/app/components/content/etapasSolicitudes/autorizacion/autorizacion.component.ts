import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';

@Component({
  selector: 'sg-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.scss']
})
export class AutorizacionComponent {
  @Output() respuestaCofirmarModal = new EventEmitter<boolean>();
  @Input() tipo:number = 0;
  @Input() id_solicitud: number = 0;
  @Input() solicitante = '';
  
  showObs:boolean = false;
  tituloObs:string = '';

  tipoAccion:boolean =  false;

  constructor(private confirmarModalService: ConfirmarModalService,
    public toastrService: ToastrService){

      
  }
    //TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTAS FUNCONES
    aprobar(){
      // VALIDACIONES
      this.abrirCamvasObs(true);
      this.tituloObs = 'Aprobar';
    }
  
    rechazar(){
       // VALIDACIONES
      this.abrirCamvasObs(false);
      this.tituloObs = 'Rechazar';
      console.log("rechazar")
    }
  
    //#################################################################################
  

    abrirCamvasObs(tipoAccion:boolean){
      this.tipoAccion = tipoAccion;
      this.showObs = true;
    }

    cerrarCamvasObs(){
      this.showObs = false;
    }

    cerrarCamvasObsConfirmar(){

      //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
      let mensaje = this.tipoAccion? '¿Estas seguro que quieres aprobar?':'¿Estas seguro que quieres rechazar?';
      let titulomsm = this.tipoAccion? 'Aprobación realizada con exito':'Rechazo realizado con exito';
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
  
}
