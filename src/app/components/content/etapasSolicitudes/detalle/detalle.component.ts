import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {

  @Input() tipo:number = 0;
  @Input() tipoNombramiento = '';

  listaBienesPropuestos:any = [];
  objetoDetalle: any = {};
  indiceObjetoDetalle: any = {};

  listaImagenes: any[] = [];
  showDetalle: boolean = false;
  tipoModal: string = '';

  indiceActivoImagenes = 0;

  id_solicitud: number = 0;
  solicitante: string = '';


  constructor(){
      this.listaBienesPropuestos = [ {
        id: 2,
        coor_reg: 'Jalisco',
        t_bien: 'Bienes Inmuebles',
        subtipo: 'Departamento',
        b_numero: 7894,
        b_descripcion: 'Departamento en Av. Revolución No. 502, Col. Moderna, Guadalajara, Jalisco.',
        ubicacion_almacen: 'Guadalajara',
        seleccionado: true,
        imagen: '../../../../assets/imgen/casa.jpg',
    }]

  }

  abrirDetalle(datos: any, indice: number, tipo: string) {
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

  cerrarDetalle() {
    this.showDetalle = false;
  }


}
