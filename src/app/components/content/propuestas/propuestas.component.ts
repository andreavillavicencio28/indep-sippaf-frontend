import { Component, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { datosEtapasPropuestas } from 'src/app/models/datosEtapasPropuesta.model';
import { ValidacionProComponent } from '../etapasPropuestas/validacion/validacionPro.component';

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

  listadoPropuestas: datosEtapasPropuestas[];
  listaDatos: any[] = [];

  // offcanvasInstance: any;
  //private offcanvasService: NgbOffcanvas, private modal: NgbModal, private config: NgbModalConfig,  config.backdrop = 'static'; config.keyboard = false;

  showCamvasPrincipal: boolean = false;
  datosNombramiento: any;
  tipoAutorizacion: string = '';
  accion: number = 1; // accion de edicion
  showEditar: boolean = false;
  
  //Agergar archivo
  showAgregarArchivo: boolean = false;
  pdfSrc: string = '';
  showReporteExcel: boolean = false;




  //Acciones de los componentes por estatus
  @ViewChild(ValidacionProComponent) ValidacionProComponent!: ValidacionProComponent;
  constructor(
    private toastrService : ToastrService,
  ) {
    
    this.Seleccionado = 1;
    this.listadoPropuestas = [
      //=========================ESTATUS ASIGNADOS A ACCION DEL USUARIO===============================
      // { indice: 1, titulo: 'Cancelados', activo: true, title: 'Solicitudes canceladas' ,noReg:25},
      // { indice: 2, titulo: 'Acción solicitante', activo: false, title: 'Solicitudes pendientes de acción del usuario' ,noReg:25},
      //=========================FIN ESTATUS ASIGNADOS A ACCION DEL USUARIO===============================
      { indice: 1, titulo: 'Validación', activo: false, title: '', noReg: 14 },
      { indice: 2, titulo: 'SIARAF', activo: false, title: '', noReg: 30 },
      { indice: 3, titulo: 'SAEOG', activo: false, title: '', noReg: 0 },
      { indice: 4, titulo: 'Juridico', activo: false, title: '', noReg: 15 },
      { indice: 5, titulo: 'CAPA', activo: false, title: '', noReg: 1 },
      { indice: 6, titulo: 'SIAB', activo: false, title: '', noReg: 0 },
      { indice: 7, titulo: 'Analisis', activo: false, title: '', noReg: 5 },
      { indice: 8, titulo: 'COPER', activo: false, title: '', noReg: 15 },
      { indice: 9, titulo: 'Acuerdos', activo: false, title: '', noReg: 3 }
    ]
  }

  //########################  FUNCIONES  OBLIGATORIAS###################################
  //Aqui Agregar el indice  que corresponda al estatus => componente  y ejecutarsu evento aprobar, rechazar, editar,
  // Todos los componentes que representan un estatus deben tener aaprobar, rechazar, editar
  aprobar() {
    switch (this.Seleccionado) {
      case 1: {
        this.ValidacionProComponent.aprobar();
        break;
      }
      default: {
        break;
      }
    }
  }

  openOficio() {
    switch (this.Seleccionado) {
      case 1: {
        this.ValidacionProComponent.openOficio();
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
        this.ValidacionProComponent.editar();
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
        this.tituloSeleccionado = 'SAEOG';
        break;
      }
      case 4: {
        this.tituloSeleccionado = 'Juridico';
        break;
      }
      case 5: {
        this.tituloSeleccionado = 'CAPA';
        break;
      }
      case 6: {
        this.tituloSeleccionado = 'SIAB';
        break;
      }
      case 7: {
        this.tituloSeleccionado = 'Analisis';
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
      IdPropuesta:'001',
      RemitentePro: 'Juan Pérez',
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta:'Laboral',
      montoMXN:'6,000',
      montoUSD:'300',
      propuestaDACION:'1,000',
      pagos:'5',
      plazaSoli:'15',
      capturista:'Maria Rosales',
      fechaCaptura:'01/05/2022',
      idResponsable:'002',
      NumVolante:'001',
      estatus: 'Activo',
      tipoAtencion:'General'
    },
    {
      IdPropuesta:'002',
      RemitentePro: 'María Rodríguez',
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta:'Laboral',
      montoMXN:'8,000',
      montoUSD:'400',
      propuestaDACION:'8000',
      pagos:'5',
      plazaSoli:'16',
      capturista:'Jose Morales',
      fechaCaptura:'01/05/2022',
      idResponsable:'007',
      NumVolante:'002',
      estatus: 'activo',
      tipoAtencion:'General'
    },
    {
      IdPropuesta:'003',
      RemitentePro: 'Carlos López',
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta:'Laboral',
      montoMXN:'14,000',
      montoUSD:'700',
      propuestaDACION:'1,000',
      pagos:'4',
      plazaSoli:'10',
      capturista:'Elda Avila',
      fechaCaptura:'01/05/2022',
      idResponsable:'004',
      NumVolante:'003',
      estatus: 'Aprobado',
      tipoAtencion:'General'
    },
    {
      IdPropuesta:'004',
      RemitentePro: 'INDEP',
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta:'Laboral',
      montoMXN:'6,000',
      montoUSD:'300',
      propuestaDACION:'1,000',
      pagos:'3',
      plazaSoli:'8',
      capturista:'Maria Rosales',
      fechaCaptura:'01/05/2022',
      idResponsable:'002',
      NumVolante:'004',
      estatus: 'Aprobado',
      tipoAtencion:'General'
    },
    {
      IdPropuesta:'005',
      RemitentePro: 'Laura Martínez',
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta:'Laboral',
      montoMXN:'6,000',
      montoUSD:'300',
      propuestaDACION:'1,000',
      pagos:'5',
      plazaSoli:'10',
      capturista:'Jose Morales',
      fechaCaptura:'01/05/2022',
      idResponsable:'007',
      NumVolante:'005',
      estatus: 'Aprobado',
      tipoAtencion:'General'
    },
    {
      IdPropuesta:'006',
      RemitentePro: 'Andrés Ramírez',
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta:'Laboral',
      montoMXN:'6,000',
      montoUSD:'300',
      propuestaDACION:'1,000',
      pagos:'6',
      plazaSoli:'6',
      capturista:'Elda Avila',
      fechaCaptura:'01/05/2022',
      idResponsable:'004',
      NumVolante:'006',
      estatus: 'Aprobado',
      tipoAtencion:'General'
    },
    {
      IdPropuesta:'007',
      RemitentePro: 'Isabel Vega',
      fechaRecepcion: '01/05/2022',
      fechaPropuesta: '01/05/2022',
      tipoPropuesta:'Laboral',
      montoMXN:'16,000',
      montoUSD:'800',
      propuestaDACION:'1,000',
      pagos:'8',
      plazaSoli:'20',
      capturista:'Luis Gomez',
      fechaCaptura:'01/05/2022',
      idResponsable:'001',
      NumVolante:'007',
      estatus: 'Aprobado',
      tipoAtencion:'General'
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

  agregarArchivo() {
    this.showAgregarArchivo = true;
  }
  reportePDF() {
    const downloadLink = document.createElement('a');
    const fileName = 'ReporteDetalle.pdf';

    downloadLink.href = this.pdfSrc;
    downloadLink.download = fileName;
    downloadLink.click();
  }
  reporteExcel() {
    const downloadLink = document.createElement('a');
    const fileName = 'ReporteDetalle.xlsx';

    downloadLink.href = this.pdfSrc;
    downloadLink.download = fileName;
    downloadLink.click();
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
