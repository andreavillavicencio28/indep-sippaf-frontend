import { Component } from '@angular/core';
import { data } from './dataDummyBuzon';

@Component({
  selector: 'sg-buzon',
  templateUrl: './buzon.component.html',
  styleUrls: ['./buzon.component.scss']
})
export class BuzonComponent {
  dataTabla = data;
  busqueda: string = '';

  constructor() {}

  marcarLeido(id: number) {
    this.dataTabla.find(el => {
      if (el.id == id) {
        el.leido = true;
      }
    })    
  }

  changeTipoBusqueda() {
    console.log(this.busqueda);
    

  }

  busquedaMensajes() {
    if (this.busqueda) {
      let busquedaARR : any= [];
      this.dataTabla.find(el => {
        if (el.leido === true) {
          busquedaARR.push(el);
        }
      });
      this.dataTabla = [];
      this.dataTabla = busquedaARR;
      console.log(busquedaARR);
    } else {
      this.dataTabla = data;
    }
  }
}
