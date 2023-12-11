import { Component, ViewChild,EventEmitter, Input, Output  } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
//import { datosEtapasSolicitud } from 'src/app/models/datosEtapasSolicitud.model';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { dataArchivos, dataAcreditados, dataEdosmunis, dataAsuntos, dataMedios, dataTipopropuestas } from './dataDummyArchivos';
import { dataPerfiles } from './dataPerfiles';
import { datosAtencion, documentos } from '../etapasAtenciones/detalle/detalle-atencion/datosAtencion';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sg-rolesPerfiles',
  templateUrl: './rolesPerfiles.component.html',
  styleUrls: ['./rolesPerfiles.component.scss']
})
export class RolesPerfiles {
  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';
  decicion: boolean = false;
  tipoVista: boolean = true; 
  Seleccionado: number = 0;
  tituloSeleccionado: string = '';
  showAgregarAtencion: boolean = false;
  dataPerfiles: any[] = [];

  listaDatos: any[] = [];

  seccion: string = 'Elige una opción';
  archivo: string = 'Elige una opción';
  edosmunis: any = dataEdosmunis;
  asuntos=dataAsuntos;
  mediosatenciones=dataMedios;
  tipopropuestas=dataTipopropuestas;
  dataTablaArchivos = dataArchivos;
  pdfSrc: string = '';

  addSeccion: string = '';
  mostrarTabla: boolean = false;

  documentoNombre: string = '';
  showDetalleAtencion: boolean = false;
  showDocumento: boolean = false;

  nombreDocumento: string = '';
  showCamvasPrincipal: boolean = false;
  datosNombramiento: any;
  tipoAutorizacion: string = '';

  constructor(
    private toastrService : ToastrService,
    private confirmarModalService: ConfirmarModalService,    
  ) {
    this.Seleccionado = 1;
    this.dataPerfiles = [
      {
          id: 1,
          tx_descripcion: 'Administrador',
      },
      {
          id: 2,
          tx_descripcion: 'Coordinador',
      },
      {
          id: 2,
          tx_descripcion: 'Especialista',
      },
  ]
  }


    

  changeSeccion() {}

  changeSubseccion() {}

  changeArchivos() {}

  busquedaArchivos() {
    this.mostrarTabla = true;
  }

  agregarAtencion() {
    this.showAgregarAtencion = true;
  }

  cerrarOffCanvas( numero: number) {
    switch (numero) {
      case 1:
        this.showAgregarAtencion= false;
        break;
    
      default:
        break;
    }
  }

  //########################  FUNCIONES  OBLIGATORIAS###################################
  //Aqui Agregar el indice  que corresponda al estatus => componente  y ejecutarsu evento aprobar, rechazar, editar,
  // Todos los componentes que representan un estatus deben tener aaprobar, rechazar, editar



  imprimir() {
    console.log("imprimiendo...");
  }

  // SI AL FINAL CONFIRMA  EL ULTIMO MODAL ENTONCES CERRAMOS TODO, INCLUIDO EL CAMVAS ACTUAL Y ACTUALIZAMOS  LOS DATOS DEL ESTATUS DONDE ESTEMOS
  respuestaCofirmarModal(respuesta: boolean) {
    if (respuesta) this.cerrarCamvasPrincipal();

  }

  //######################## FIN  FUNCIONES  OBLIGATORIAS ###################################


  cambioSeleccion(num: number) {
    alert("LLEGASTE")
    this.Seleccionado = num;

    this.listaDatos = [{
      fecha: '01/05/2022',
      elaboro: 'Cristina Leon',
      noCliente: '261456',
      acreditado: 'Juan Pérez',
      encomienda: 'BANCOMEXT',
      direccion: 'Chalco',
      estadoymuni:'Edo. Mex, chalco',
      telefono:'5584418748',
      correo:'andrea@gmail.com',
      asunto:'atencion de acreditado',
      medioatencion:'email',
      montopropuesta:'10000',
      tipopropuesta:'prueba',
    },
    {
      fecha: '01/05/2022',
      elaboro: 'Janeth Martinez',
      noCliente: '261621',
      acreditado: 'Cristina Leon',
      encomienda: 'BANCOMEXT',
      direccion: 'Chalco',
      estadoymuni:'Edo. Mex, chalco',
      telefono:'5584418748',
      correo:'andrea@gmail.com',
      asunto:'atencion de acreditado',
      medioatencion:'email',
      montopropuesta:'10000',
      tipopropuesta:'prueba',
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
  
  guadarAtencion() {
    this.toastrService.success('Se ha guardado exitosamente el Nuevo Acreditado')
    this.showAgregarAtencion = false;
  }
  
  descargarAtencionespdf() {
    const downloadLink = document.createElement('a');
    const fileName = 'sampleAtenciones.pdf';
    downloadLink.href = this.pdfSrc;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  descargarAtencionesexcel() {
    const downloadLink = document.createElement('a');
    const fileName = 'sampleAtenciones.xlsx';
    downloadLink.href = this.pdfSrc;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}
