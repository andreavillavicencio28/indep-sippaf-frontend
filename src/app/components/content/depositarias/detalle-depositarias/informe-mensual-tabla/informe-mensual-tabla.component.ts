import { Component } from '@angular/core';
import { informeMensualData, informeMensualHistorico } from '../../datosDepositaria';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';

@Component({
  selector: 'sg-informe-mensual-tabla',
  templateUrl: './informe-mensual-tabla.component.html',
  styleUrls: ['./informe-mensual-tabla.component.scss']
})
export class InformeMensualTablaComponent {
  dataInforme = informeMensualData;
  tipoAccion: boolean = false;

  mesInforme: string = '';
  tipoInforme: string = '';


  accionDetalle: number = 1; // accion de detalle

  showVistaPrevia: boolean = false;
  idElement: number = 0;

  showButton: boolean = false;
  showObs: boolean = false;
  tituloObs: string = '';

  anioSelect: number = 0;

  constructor(
    private toastrService: ToastrService,
    private confirmarModalService: ConfirmarModalService,
  ) {
    this.anioSelect = (new Date().getFullYear());


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

  abrirCamvasObs(tipoAccion: boolean) {
    this.showObs = true;
    this.tipoAccion = tipoAccion;
  }

  cerrarCamvasObsConfirmar() {

    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    let mensaje = this.tipoAccion ? '¿Estas seguro que quieres aprobar el informe mensual?' : '¿Estas seguro que quieres rechazar el informe mensual?';
    let titulomsm = this.tipoAccion ? 'Se aprobo correctamente el informe mensual ' : 'Se rechazo correctamente el informe mensual';
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        // El usuario aceptó
        if(this.tipoAccion ) {
          this.dataInforme.find( el => {
            if(el.id == this.idElement) {
              el.estatus = 'Validado'
            }
          });
        } else {
          this.dataInforme.find( el => {
            if(el.id == this.idElement) {
              el.estatus = 'Rechazado'
            }
          });
        }

        this.cerrarCamvasObs();
        this.showVistaPrevia = false;
        // this.respuestaCofirmarModal.emit(true);
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

  changeAnio() {
    if(this.anioSelect == 2023) {
      this.dataInforme = informeMensualData
    } else {
      this.dataInforme = informeMensualHistorico
    }
  }

  selectYear(): number[] {
    const year = (new Date()).getFullYear() + 1;
    const selectYear: number[] = []

    for (let index = year; index >= 2000; index--) {
      selectYear.push(index);
    }
    return selectYear;
  }

  cambioAccionDetalle(accion: number) {
    this.accionDetalle = accion;
  }

  closeOffCanvas() {
    this.showVistaPrevia = false;
  }

  openVistaPrevia(id: number, accion: string = '', mes: string = '', tipoInforme: string = '') {
    this.idElement = id;
    this.mesInforme = mes;
    this.tipoInforme = tipoInforme;
    this.showButton = accion ? true : false;
    
    this.showVistaPrevia = true;
  } 

  eliminarInforme(id: number) {
    const mensaje = '¿Esta seguro que desea eliminar el informe mensual?';
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if(result) {
        const index = this.dataInforme.findIndex(el => el.id == id);
        this.dataInforme.splice(index, 1);

      }
    })
  }

}
