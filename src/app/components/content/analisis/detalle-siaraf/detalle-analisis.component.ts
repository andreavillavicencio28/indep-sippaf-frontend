import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { dataCartera, tiposDemandado } from './dataAnalisis';

@Component({
  selector: 'sg-detalle-analisis',
  templateUrl: './detalle-analisis.component.html',
  styleUrls: ['./detalle-analisis.component.scss']
})
export class DetalleAnalisisComponent {
  @Input() tipo: number = 0;
  @Input() id_analisis: number = 0;
  @Input() solicitante = '';  


  tipoVista: boolean = true;
  showCamvasPrincipal: boolean = false;
  carteras = dataCartera;
  montoPendiente: number = 0;
  tipoCarteraId: number = 0;
  inputDemandado: boolean = false;
  resultadoCalculo: string = '';
  btnCalcular: boolean = true;
  inputGastos: boolean = true;
  dataDemandado = tiposDemandado;
  cardResultado: boolean = false;

  changeSubseccion(event: any) {
       
    this.tipoCarteraId = event.target.value;    

    if (this.tipoCarteraId == 1) {
      this.montoPendiente = this.carteras[0].montoPendiente;
      this.inputDemandado = false;      
      this.btnCalcular = true;
      this.cardResultado = false;
    } else if (this.tipoCarteraId == 2) {
      this.inputDemandado = true;
      this.montoPendiente = this.carteras[1].montoPendiente;
      this.btnCalcular = false;
      this.inputGastos = false;
      this.cardResultado = true;
    } else {
      this.montoPendiente = this.carteras[2].montoPendiente;
    }
    
  }

  changeSubseccionDemandado(event: any) {

  }

  calcular() {
    
  }

  agenda() {

  }

}
