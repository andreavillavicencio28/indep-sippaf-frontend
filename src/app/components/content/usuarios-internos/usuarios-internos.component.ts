import { Component } from '@angular/core';
import { TDEP005_CATCORREG, TDEP043_CATOFATREG } from './dataDummyUI';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sg-usuarios-internos',
  templateUrl: './usuarios-internos.component.html',
  styleUrls: ['./usuarios-internos.component.scss']
})
export class UsuariosInternosComponent {
  data = TDEP005_CATCORREG;
  dataTableOficina = TDEP043_CATOFATREG;

  datosCoordinador: any;

  coordinador: string = '';
  correo: string = '';

  oficina: string = '';
  correoOfna: string = '';

  showCanvasDetalle: boolean = false;
  showCanvasEdicionOfna: boolean = false;

  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService
  ) { }

  editarCoordinador(id: number, content: any) {
    this.modalService.open(content, { size: 'lg' });
    this.data.find((el: any) => {
      if (el.cd_catcorreg == id) {
        console.log(el);

        this.coordinador = el.tx_nomcorrreg;
        this.correo = el.tx_email;
      }
    })
  }

  cerrarEditarCoordinador() {
    this.modalService.dismissAll();
    this.toastrService.success('Se han guardado los cambios exitosamente.');
  }

  abrirOffCanvas(tipoCanva: number, id: number) {
    switch (tipoCanva) {
      case 1:
        this.showCanvasDetalle = true;
        break;
      case 2:
        this.dataTableOficina.find((el: any) => {
          if (el.idOfna == id) {
            this.oficina = el.tx_ofnareg;
            this.correoOfna = el.tx_email;
          }
        })
        this.showCanvasEdicionOfna = true;

        break;

      default:
        break;
    }
  }

  cerrarCanvas(tipoCanvas: number) {
    switch (tipoCanvas) {
      case 1:
        this.showCanvasDetalle = false;
        break;
      case 2:
        this.showCanvasEdicionOfna = false;
        this.toastrService.success('Se han guardado los cambios exitosamente.');

        break;

    }

  }

  cerrarCanvasCancelar(){
    this.showCanvasEdicionOfna = false;


  }

}
