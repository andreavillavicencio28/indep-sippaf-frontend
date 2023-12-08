import { Component, ViewChild, Input } from '@angular/core';
import { DetalleBitacoraComponent } from './etapasBitacoras/detalle-bitacora.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sg-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.scss']
})
export class BitacoraComponent {
  @Input() id_bitacora: number = 0;
  @Input() acreditado: string = '';
 
  tipoVista: boolean = true;
  Seleccionado: number = 0;
  showCamvasPrincipal: boolean = false;
  listaDatos: any[] = [];
  fInicio: string='';
  fFin:string='';
  resultado: string = '';
  error:boolean = false;


  @ViewChild(DetalleBitacoraComponent) DetalleBitacoraComponent!: DetalleBitacoraComponent;
  constructor(public toastrService: ToastrService){
    
  }
  
  cambioSeleccion() {
    this.listaDatos = [{
      Propuesta:'Propuesta',
      idPropuesta: '001',
      Acreditado: 'Juan Pérez',
      Estatus: 'Acompletada'
    },
    {
      Propuesta:'Propuesta',
      idPropuesta: '002',
      Acreditado: 'Maria Rodrigez',
      Estatus: 'Pendiente'  
    },
    {
      Propuesta:'Propuesta',
      idPropuesta: '003',
      Acreditado: 'Carlos López',
      Estatus: 'Cancelada'
    }]
  }  
  
  cambioTipoVista(){
    this.tipoVista = !this.tipoVista
  }
  abrirCamvasPrincipal() {
    this.showCamvasPrincipal = true;
  }

  cerrarCamvasPrincipal() {
    this.showCamvasPrincipal = false;
  }
  
  comparaFechas() {
    const fechaInicioDate = new Date(this.fInicio);
    const fechaFinDate = new Date(this.fFin);

    if (fechaInicioDate > fechaFinDate) {
      this.toastrService.error('La fecha de inicio no puede ser mayor a la fecha final');
      this.fInicio='';
      this.fFin='';
    }
    if(fechaInicioDate < fechaFinDate){
      this.cambioSeleccion();      
    }
  }
}  
