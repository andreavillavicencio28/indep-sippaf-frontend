import { Component } from '@angular/core';
import { datosEstadoCuenta } from './datosEstadosCuentas';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sg-estados-cuenta',
  templateUrl: './estados-cuenta.component.html',
  styleUrls: ['./estados-cuenta.component.scss']
})
export class EstadosCuentaComponent {

  accionDetalle: number = 1; // accion de detalle
  tablaEstadoCuenta: any[] = datosEstadoCuenta;
  showFormulario : boolean = false;
  textoAcccion: string = "Guardar";
  showEditar:boolean = false;

  constructor(
    private ConfirmarModalService: ConfirmarModalService,
    private router: Router,
    private toastrService: ToastrService,
    private modal: NgbModal

  ) {

  }

  addInforme() {
    this.showFormulario = true;
    this.textoAcccion = "Guardar";
  }

  enviar() {
    this.ConfirmarModalService.abriraModal('¿Estas seguro de enviar los pagos al SIB?').subscribe(result => {
      if (result) {
        // El usuario aceptó
        this.showEditar = false;
        this.toastrService.success('Pago enviado correctamente');
      }

    });

    // this.router.navigate(['/content/inicio']);
  }
}
