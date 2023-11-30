import { Component, ViewChild } from '@angular/core';
import { datosEtapasPropuestas } from 'src/app/models/datosEtapasPropuesta.model';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sg-propuestas',
  templateUrl: './propuestas.component.html',
  styleUrls: ['./propuestas.component.scss']
})

export class PropuestasComponent {

  decicion: boolean = false;
  tipoAccion: boolean = false;
  tipoVista: boolean = true;
  Seleccionado: number = 0;
  tituloSeleccionado: string = '';
  respuesta: boolean = false;

  listadoPropuestas: datosEtapasPropuestas[];
  listaDatos: any[] = [];

  // offcanvasInstance: any;
  //private offcanvasService: NgbOffcanvas, private modal: NgbModal, private config: NgbModalConfig,  config.backdrop = 'static'; config.keyboard = false;

  showCamvasPrincipal: boolean = false;
  datosNombramiento: any;
  tipoAutorizacion: string = '';

  //Acciones de los componentes por estatus
  /*@ViewChild(OpinionTecnicaComponent) opinionTecnicaComponent!: OpinionTecnicaComponent;*/
  
  constructor(
    private confirmarModalService: ConfirmarModalService,
    private toastrService: ToastrService,
  ) {    
    this.Seleccionado = 1;
    this.listadoPropuestas = [
      //=========================ESTATUS ASIGNADOS A ACCION DEL USUARIO===============================
      // { indice: 1, titulo: 'Cancelados', activo: true, title: 'Solicitudes canceladas' ,noReg:25},
      // { indice: 2, titulo: 'Acción solicitante', activo: false, title: 'Solicitudes pendientes de acción del usuario' ,noReg:25},
      //=========================FIN ESTATUS ASIGNADOS A ACCION DEL USUARIO===============================
      { indice: 1, titulo: 'Validación', activo: false, title: '', noReg: 25 },
      { indice: 2, titulo: 'SIARAF', activo: false, title: '', noReg: 30 },
      { indice: 3, titulo: 'SAEDG', activo: false, title: '', noReg: 0 },
      { indice: 4, titulo: 'Juridico', activo: false, title: '', noReg: 15 },
      { indice: 5, titulo: 'Capa', activo: false, title: '', noReg: 1 },
      { indice: 6, titulo: 'SIAB', activo: false, title: '', noReg: 0 },
      { indice: 7, titulo: 'AMACISIS', activo: false, title: '', noReg: 5 },
      { indice: 8, titulo: 'COPER', activo: false, title: '', noReg: 15 },
      { indice: 9, titulo: 'ACUERDOS', activo: false, title: '', noReg: 3 },
    ]
  }

  //########################  FUNCIONES  OBLIGATORIAS###################################
  //Aqui Agregar el indice  que corresponda al estatus => componente  y ejecutarsu evento aprobar, rechazar, editar,
  // Todos los componentes que representan un estatus deben tener aaprobar, rechazar, editar
  aprobar() {
   //FUNCION APROBAR
  }

  rechazar() {
    //FUNCION RECHAZAR
  }

  editar() {
   //FUNCIÒN EDITAR
  }

  imprimir() {
    console.log("imprimiendo...");
  }


  // SI AL FINAL CONFIRMA  EL ULTIMO MODAL ENTONCES CERRAMOS TODO, INCLUIDO EL CAMVAS ACTUAL Y ACTUALIZAMOS  LOS DATOS DEL ESTATUS DONDE ESTEMOS
  respuestaCofirmarModal(respuesta: boolean) {    
    this.confirmarModalService.abriraModal("Al guardar está info se marcara completada la tarea").subscribe(result => {
      if (result) {
        this.toastrService.success("Se guardo correctamente el registro ");
        if (respuesta) this.cerrarCamvasPrincipal();
      }
    })        
  }

  confirmGuardar() {
    let mensaje = this.respuesta ? '¿Estas seguro que quieres aprobar el informe mensual?' : '¿Estas seguro que quieres rechazar el informe mensual?';
    let titulomsm = this.respuesta ? 'Se aprobo correctamente el informe mensual ' : 'Se rechazo correctamente el informe mensual';
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        this.toastrService.success(titulomsm);
        if(this.tipoAccion ) {
          console.log("LLEGASTE");          
        }
      }
    })    
  }

  //######################## FIN  FUNCIONES  OBLIGATORIAS ###################################


  cambioSeleccion(num: number) {
    this.Seleccionado = num;
    this.listadoPropuestas.forEach(solicitud => {
      solicitud.activo = false;
    });
    this.listadoPropuestas.forEach(solicitud => {
      if (solicitud.indice == num) {
        solicitud.activo = true;
      }
    });

    switch (this.Seleccionado) {
      case 1: {
        this.tituloSeleccionado = 'Validación';
        break;
      }
      case 2: {
        this.tituloSeleccionado = 'SIARAF';
        break;
      }
      case 3: {
        this.tituloSeleccionado = 'SAEDG';
        break;
      }
      case 4: {
        this.tituloSeleccionado = 'Juridico';
        break;
      }
      case 5: {        
        this.tituloSeleccionado = 'Capa';
        break;
      }
      case 6: {        
        this.tituloSeleccionado = 'SIAB';
        break;
      }
      case 7: {
        this.tituloSeleccionado = 'AMACISIS';
        break;
      }
      case 8: {
        this.tituloSeleccionado = 'COPER';
        break;
      }
      case 9: {
        this.tituloSeleccionado = 'Acuerdos';
        break;
      }     
      default: {
        break;
      }
    }

    this.listaDatos = [{
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,
      noVolante: 1,      
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,    
      noVolante: 1,  
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,      
      noVolante: 1,
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,   
      noVolante: 1,   
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2, 
      noVolante: 1,     
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,      
      noVolante: 1,
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,     
      noVolante: 1, 
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,     
      noVolante: 1, 
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,    
      noVolante: 1,  
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,     
      noVolante: 1, 
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,      
      noVolante: 1,
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,      
      noVolante: 1,
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,    
      noVolante: 1,  
      estatus: 1,
      tiempoAtencion: 5
    },
    {
      idPropuesta: '1',
      remitente: 'Acreditado',      
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta: '',
      montoMxn: 1200,
      MontoUs: 10,
      propuestaDacion: '',
      pagos: 2,
      plazoSolicitado: '5',
      capturista: 'Angel Saldivar',
      fechaCaptura: '01/05/2022',
      idResponsableCaso: 2,     
      noVolante: 1, 
      estatus: 1,
      tiempoAtencion: 5
    }]
  }

  cambioTipoVista() {
    this.tipoVista = !this.tipoVista
  }

  abrirCamvasPrincipal(datos: any) {    
    this.showCamvasPrincipal = true;
  }

  cerrarCamvasPrincipal() {    
    this.showCamvasPrincipal = false;
  }
}
