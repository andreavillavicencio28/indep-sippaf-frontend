import { Component } from '@angular/core';

@Component({
  selector: 'sg-informe-mensual',
  templateUrl: './informe-mensual.component.html',
  styleUrls: ['./informe-mensual.component.scss']
})
export class InformeMensualComponent {
  valor:number = 0;

  seguro:boolean = false;
  mensaje:boolean = false;

  firma:boolean = false;

  permitirFirmar:boolean = false;

  guardar(){
  this.permitirFirmar = true;
  }

}
