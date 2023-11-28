import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { datosEtapasSolicitud } from 'src/app/models/datosEtapasSolicitud.model';

import { PropuestaDelBienComponent } from '../etapasSolicitudes/propuesta-del-bien/propuesta-del-bien.component';
import { OpinionTecnicaComponent } from '../etapasSolicitudes/opinion-tecnica/opinion-tecnica.component';
import { PrevalidacionComponent } from '../etapasSolicitudes/prevalidacion/prevalidacion.component';
import { ValidacionComponent } from '../etapasSolicitudes/validacion/validacion.component';
import { AutorizacionComponent } from '../etapasSolicitudes/autorizacion/autorizacion.component';
import { NombramientoComponent } from '../etapasSolicitudes/nombramiento/nombramiento.component';
import { SeguroPolizaComponent } from '../etapasSolicitudes/seguro-poliza/seguro-poliza.component';
@Component({
  selector: 'sg-propuesta',
  templateUrl: './propuestas.component.html',
  styleUrls: ['./propuestas.component.scss']
})
export class PropuestasComponent {

  decicion: boolean = false;

  tipoVista: boolean = true;
  Seleccionado: number = 0;
  tituloSeleccionado: string = '';

  listadoSolicitudes: datosEtapasSolicitud[];
  listaDatos: any[] = [];

  // offcanvasInstance: any;
  //private offcanvasService: NgbOffcanvas, private modal: NgbModal, private config: NgbModalConfig,  config.backdrop = 'static'; config.keyboard = false;

  showCamvasPrincipal: boolean = false;
  datosNombramiento: any;
  tipoAutorizacion: string = '';

  //Agergar archivo
  showAgregarArchivo: boolean = false;




  //Acciones de los componentes por estatus
  @ViewChild(PropuestaDelBienComponent) propuestaDelBienComponent!: PropuestaDelBienComponent;
  @ViewChild(OpinionTecnicaComponent) opinionTecnicaComponent!: OpinionTecnicaComponent;
  @ViewChild(PrevalidacionComponent) prevalidacionComponent!: PrevalidacionComponent;
  @ViewChild(ValidacionComponent) validacionComponent!: ValidacionComponent;
  @ViewChild(AutorizacionComponent) autorizacionComponent!: AutorizacionComponent;
  @ViewChild(NombramientoComponent) nombramientoComponent!: NombramientoComponent;
  @ViewChild(SeguroPolizaComponent) seguroPolizaComponent!: SeguroPolizaComponent;


  constructor(
    private toastrService : ToastrService,
  ) {
    
    this.Seleccionado = 1;
    this.listadoSolicitudes = [
      //=========================ESTATUS ASIGNADOS A ACCION DEL USUARIO===============================
      // { indice: 1, titulo: 'Cancelados', activo: true, title: 'Solicitudes canceladas' ,noReg:25},
      // { indice: 2, titulo: 'Acción solicitante', activo: false, title: 'Solicitudes pendientes de acción del usuario' ,noReg:25},
      //=========================FIN ESTATUS ASIGNADOS A ACCION DEL USUARIO===============================
      { indice: 1, titulo: 'Pre-validación', activo: false, title: '', noReg: 25 },
      { indice: 2, titulo: 'Propuesta bien', activo: false, title: '', noReg: 30 },
      { indice: 3, titulo: 'Validación', activo: false, title: '', noReg: 0 },
      { indice: 4, titulo: 'Opinión técnica', activo: false, title: '', noReg: 15 },
      { indice: 5, titulo: 'Aut. DEBI', activo: false, title: '', noReg: 1 },
      { indice: 6, titulo: 'Aut. DCB', activo: false, title: '', noReg: 0 },
      { indice: 7, titulo: 'Aut. DG', activo: false, title: '', noReg: 5 },
      { indice: 8, titulo: 'Nombramiento', activo: false, title: '', noReg: 15 },
      { indice: 9, titulo: 'Seguros', activo: false, title: '', noReg: 3 },
      { indice: 10, titulo: 'Entrega', activo: false, title: '', noReg: 45 },
      // { indice: 11, titulo: 'Remoción', activo: false, title: '', noReg: 10 },
      // { indice: 12, titulo: 'Siniestros', activo: false, title: '', noReg: 5 },


      //{ indice: 4, titulo: 'Pre-validación rezhazada', activo: false, title: '' , noReg:25}, regresa a (2)
      //{ indice: 6, titulo: 'Vo.Bo. Rechazado',  activo: false, title: '' ,noReg:5}, // regres a (2)
      //{ indice: 8, titulo: 'Rechazo Propuesta bien',  activo: false, title: '' ,noReg:30},  // regresa a (2)
      //{ indice: 9, titulo: 'Confirmacion de bien',  activo: false, title: '' ,noReg:30},  // regresa a (2)
      //{ indice: 10, titulo: 'Desestimacion de Bien',  activo: false, title: '' ,noReg:30},  // regresa a (2)
      //{ indice: 12, titulo: 'Opinión técnica rechazada',  activo: false, title: '' ,noReg:2}, regresa a (5)
      //{ indice: 14, titulo: 'Rechazo Nombramiento',  activo: false, title: '' ,noReg:2},  REgresa a (2)


      //{ indice: 17, titulo: 'Rechazo autoerrización DEBI',  activo: false, title: '' ,noReg:45}, // regresa a  (5)
      //{ indice: 19, titulo: 'Rechazo Autoerrización DCB',  activo: false, title: '' ,noReg:0}, // regrersa a (13)
      //{ indice: 21, titulo: 'Rechazo Autorización DG',  activo: false, title: '' , noReg:30}, regresa a (15)

      // { indice: 22, titulo: 'Aut. DG',  activo: false, title: '' ,noReg:5},
      //{ indice: 23, titulo: 'Rechazo Nombramiento DG',  activo: false, title: '' , noReg:30}, regresa a (15)

      //{ indice: 24,titulo: 'Poliza Seguro',  activo: false, title: '' ,noReg:1},  regresa a (2)
      // { indice: 25, titulo: 'Revicioón poliza',  activo: false, title: '' ,noReg:45},
      // { indice: 26, titulo: 'Rechazo poliza',  activo: false, title: '' ,noReg:45}, regresa a (2)
      //{ indice: 28, titulo: 'Rechazo entrega bien',  activo: false, title: '' ,noReg:45}, regresa a (2)
      // { indice: 29, titulo: 'Notificación aut. uso',  activo: false, title: '' ,noReg:45}
    ]
  }

  //########################  FUNCIONES  OBLIGATORIAS###################################
  //Aqui Agregar el indice  que corresponda al estatus => componente  y ejecutarsu evento aprobar, rechazar, editar,
  // Todos los componentes que representan un estatus deben tener aaprobar, rechazar, editar
  aprobar() {
    switch (this.Seleccionado) {
      case 1: {
        this.prevalidacionComponent.aprobar();
        break;
      }
      case 2: {
        this.propuestaDelBienComponent.aprobar();
        break;
      }
      case 3: {
        this.validacionComponent.aprobar();
        break;
      }
      case 4: {
        this.opinionTecnicaComponent.aprobar();
        break;
      }
      case 5: {
        this.autorizacionComponent.aprobar();
        break;
      }
      case 6: {
        this.autorizacionComponent.aprobar();
        break;
      }
      case 7: {
        this.autorizacionComponent.aprobar();
        break;
      }
      case 8: {
        this.nombramientoComponent.aprobar();
        break;
      }
      case 9: {
        this.seguroPolizaComponent.aprobar();
        break;
      }
      default: {
        break;
      }
    }
  }

  rechazar() {
    switch (this.Seleccionado) {
      case 1: {
        this.prevalidacionComponent.rechazar();
        break;
      }
      case 2: {
        this.propuestaDelBienComponent.rechazar();
        break;
      }
      case 3: {
        this.validacionComponent.rechazar();
        break;
      }
      case 4: {
        this.opinionTecnicaComponent.rechazar();
        break;
      }
      case 5: {
        this.autorizacionComponent.rechazar();
        break;
      }
      case 6: {
        this.autorizacionComponent.rechazar();
        break;
      }
      case 7: {
        this.autorizacionComponent.rechazar();
        break;
      }
      case 8: {
        this.nombramientoComponent.rechazar();
        break;
      }
      case 9: {
        this.seguroPolizaComponent.rechazar();
        break;
      }
      default: {
        break;
      }
    }
  }

  editar() {
    switch (this.Seleccionado) {
      case 1: {
        this.prevalidacionComponent.editar();
        break;
      }
      case 2: {
        this.propuestaDelBienComponent.editar();
        break;
      }
      case 4: {
        this.opinionTecnicaComponent.editar();
        break;
      }
      case 8: {
        this.nombramientoComponent.editar();
        break;
      }
      case 9: {
        this.seguroPolizaComponent.editar();
        break;
      }
      default: {
        break;
      }
    }
  }

  imprimir() {
    console.log("imprimiendo...");
  }

  // SI AL FINAL CONFIRMA  EL ULTIMO MODAL ENTONCES CERRAMOS TODO, INCLUIDO EL CAMVAS ACTUAL Y ACTUALIZAMOS  LOS DATOS DEL ESTATUS DONDE ESTEMOS
  respuestaCofirmarModal(respuesta: boolean) {
    if (respuesta) this.cerrarCamvasPrincipal();

  }

  //######################## FIN  FUNCIONES  OBLIGATORIAS ###################################


  cambioSeleccion(num: number) {
    this.Seleccionado = num;
    this.listadoSolicitudes.forEach(solicitud => {
      solicitud.activo = false;
    });
    this.listadoSolicitudes.forEach(solicitud => {
      if (solicitud.indice == num) {
        solicitud.activo = true;
      }
    });

    switch (this.Seleccionado) {
      case 1: {
        this.tituloSeleccionado = 'Prevalidación';
        break;
      }
      case 2: {
        this.tituloSeleccionado = 'Propuesta del bien';
        break;
      }
      case 3: {
        this.tituloSeleccionado = 'Validación';
        break;
      }
      case 4: {
        this.tituloSeleccionado = 'Opinión técnica';
        break;
      }
      case 5: {
        this.tipoAutorizacion = 'DCB'
        this.tituloSeleccionado = 'Autorización DEBI';
        break;
      }
      case 6: {
        this.tipoAutorizacion = 'DGB'
        this.tituloSeleccionado = 'Autorización DCB';
        break;
      }
      case 7: {
        this.tituloSeleccionado = 'Autorización DG';
        break;
      }
      case 8: {
        this.tituloSeleccionado = 'Nombramiento';
        break;
      }
      case 9: {
        this.tituloSeleccionado = 'Seguros';
        break;
      }
      case 10: {
        this.tituloSeleccionado = 'Entrega';
        break;
      }
      default: {
        break;
      }
    }

    this.listaDatos = [{
      NombreSolicitante: 'Juan Pérez',
      tipoBien: 'Electrónico',
      fechaSolicitud: '01/05/2022',
      proceso: 'Aprobado',
      imagen: '../../../../assets/imgen/portada-villa-2023-2.png',
      estatus: 1
    },
    {
      NombreSolicitante: 'María Rodríguez',
      tipoBien: 'Mueble',
      fechaSolicitud: '15/06/2022',
      proceso: 'Pendiente',
      imagen: 'url_imagen_2.jpg',
      estatus: 2
    },
    {
      NombreSolicitante: 'Carlos López',
      tipoBien: 'Vehículo',
      fechaSolicitud: '10/07/2022',
      proceso: 'Rechazado',
      imagen: 'url_imagen_3.jpg',
      estatus: 3
    },
    {
      NombreSolicitante: 'INDEP',
      tipoBien: 'Electrodoméstico',
      fechaSolicitud: '20/08/2022',
      proceso: 'Aprobado',
      imagen: '../../../../assets/imgen/portada-villa-2023-2.png',
      estatus: 4
    },
    {
      NombreSolicitante: 'Laura Martínez',
      tipoBien: 'Vehículo',
      fechaSolicitud: '05/04/2022',
      proceso: 'Aprobado',
      imagen: 'url_imagen_5.jpg',
      estatus: 5
    },
    {
      NombreSolicitante: 'Andrés Ramírez',
      tipoBien: 'Herramientas',
      fechaSolicitud: '12/07/2022',
      proceso: 'Pendiente',
      imagen: 'url_imagen_6.jpg',
      estatus: 6
    },
    {
      NombreSolicitante: 'Isabel Vega',
      tipoBien: 'Ropa',
      fechaSolicitud: '22/08/2022',
      proceso: 'Rechazado',
      imagen: 'url_imagen_7.jpg',
      estatus: 7
    },
    {
      NombreSolicitante: 'Miguel Torres',
      tipoBien: 'Instrumento musical',
      fechaSolicitud: '18/06/2022',
      proceso: 'En revisión',
      imagen: 'url_imagen_8.jpg',
      estatus: 8
    },
    {
      NombreSolicitante: 'Carmen López',
      tipoBien: 'Arte',
      fechaSolicitud: '30/09/2022',
      proceso: 'Aprobado',
      imagen: 'url_imagen_9.jpg',
      estatus: 9
    },
    {
      NombreSolicitante: 'Ricardo Fernández',
      tipoBien: 'Equipo deportivo',
      fechaSolicitud: '07/03/2022',
      proceso: 'Pendiente',
      imagen: 'url_imagen_10.jpg',
      estatus: 10
    },
    {
      NombreSolicitante: 'Patricia Gómez',
      tipoBien: 'Libros',
      fechaSolicitud: '14/05/2022',
      proceso: 'Rechazado',
      imagen: 'url_imagen_11.jpg',
      estatus: 11
    },
    {
      NombreSolicitante: 'Diego Ortega',
      tipoBien: 'Electrodoméstico',
      fechaSolicitud: '02/07/2022',
      proceso: 'En revisión',
      imagen: 'url_imagen_12.jpg',
      estatus: 12
    },
    {
      NombreSolicitante: 'Elena Navarro',
      tipoBien: 'Mueble',
      fechaSolicitud: '09/08/2022',
      proceso: 'Aprobado',
      imagen: 'url_imagen_13.jpg',
      estatus: 13
    },
    {
      NombreSolicitante: 'Luisa Sánchez',
      tipoBien: 'Vehículo',
      fechaSolicitud: '11/10/2022',
      proceso: 'Pendiente',
      imagen: 'url_imagen_14.jpg',
      estatus: 14
    }]
  }

  cambioTipoVista() {
    this.tipoVista = !this.tipoVista
  }

  abrirCamvasPrincipal(datos: any) {
    this.showCamvasPrincipal = true;
  }

  cerrarCamvasPrincipal() {
    switch (this.Seleccionado) {
      case 8:
        this.nombramientoComponent.tipoNombramiento = ''
        break;
    }
    this.showCamvasPrincipal = false;
  }


  // openOfcamvas(content: TemplateRef<any>, data:any) {
  //   this.offcanvasInstance = this.offcanvasService.open(content, { position: 'end',  backdrop: 'static'});

  // }

  // cerrarOfcamvas(){
  //   this.offcanvasInstance.dismiss();
  // }

  agregarArchivo() {
    this.showAgregarArchivo = true;
  }
  cerrarOffCanvas( numero: number) {
    switch (numero) {
      case 1:
        this.showAgregarArchivo = false;
        break;
    
      default:
        break;
    }
  }

  guadarArchivo() {
    this.toastrService.success('Se ha guardado exitosamente el nuevo archivo')
    this.showAgregarArchivo = false;
  }

}
