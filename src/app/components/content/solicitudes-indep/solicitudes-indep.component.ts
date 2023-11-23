import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbAlertModule, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import * as e from 'express';
import { ToastrService } from 'ngx-toastr';
import { DatosRetornoWizard } from 'src/app/models/datosRetornoWizard.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { WizardComponent } from 'src/app/shared/wizard/wizard.component';
import * as moment from 'moment';

@Component({
  selector: 'sg-solicitudes-indep',
  templateUrl: './solicitudes-indep.component.html',
  standalone: true,
  styleUrls: ['./solicitudes-indep.component.scss'],
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, CommonModule, SharedModule],
})

export class SolicitudesIndepComponent {
  @Input() fecha: string = '';
  fechaActual:string = '';
  //VARIABLES INDISPERNSABLES DE WIZARD
  @ViewChild(WizardComponent) wizardComponent!: WizardComponent;
  Indice:number;
  IndiceMax:number;
  listaPasos:string[] = [];



  mostrar:boolean = false;
  conFirmaElectronica:boolean = false;
  contenidoUno:boolean = false;
  contenidoDos:boolean = false;
  seleccion: number = 0;
  tipoSeleccion: string = '';
  tipoPersona: string = 'fisica';
  cuenta: boolean = true;

  constructor(private router: Router,
     private toastrService: ToastrService,

    ){

      //INICIALIZAR VALORES del wizard
      // this.listaPasos = ['Tipo de persona','Registro de datos','Información de contacto','Documentos digitales','Vista Previa', 'Confirmación'];
      this.listaPasos = ['Registro de solicitud','Vista previa'];
      this.Indice = 0;
      this.IndiceMax = this.listaPasos.length;
      this.fechaActual = moment().format('DD/MM/YYYY');

  }


  //FUNCION REUQERIDA PARA EL FUNCIONAMIENTO DEL WIZARD
  recibeIndice(valores:DatosRetornoWizard){
    this.Indice =  valores.indice;
    this.IndiceMax =  valores.indiceMax;
  }

  siguiente(){
    // PARA EJECUTAR ESTE EVENTO HAY QUE  VALIDAR QUE EL FORMULARIO O SECCION DEL FORMULARIO ESTE CORRECTO
    this.wizardComponent.siguiente();
  }

  atras(){
    this.wizardComponent.atras()
  }

  confirmar(){
    this.wizardComponent.siguiente();
    this.toastrService.success('Registro guardado correctamente');
  }



  conFirma(){
    this.conFirmaElectronica = this.conFirmaElectronica? false:true;
  }

  seleccionTipo() {
    console.log(this.seleccion);

  }

  mostrarContenido(){
    this.mostrar = !this.mostrar
  }

  mostrarContenidoUno(){
    this.contenidoUno = !this.contenidoUno
  }


  mostrarContenidoDos(){
    this.contenidoDos = !this.contenidoDos
  }

  buscar() {
    if(this.seleccion == 0) {
      this.tipoSeleccion ='oficialia';
    } else if(this.seleccion == 1) {
      this.tipoSeleccion ='curp';
    } else if(this.seleccion == 2) {
      this.tipoSeleccion ='rfc';
    } else {
      this.tipoSeleccion = 'otros';
    }

  }



}

