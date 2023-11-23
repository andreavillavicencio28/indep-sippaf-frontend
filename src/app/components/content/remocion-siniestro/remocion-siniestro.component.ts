import { Component, ViewChild } from '@angular/core';
import { datosEtapasSolicitud } from 'src/app/models/datosEtapasSolicitud.model';
import { RemocionComponent } from './remocion/remocion.component';

@Component({
  selector: 'sg-remocion-siniestro',
  templateUrl: './remocion-siniestro.component.html',
  styleUrls: ['./remocion-siniestro.component.scss']
})
export class RemocionSiniestroComponent {
  decicion: boolean = false;

  tipoVista: boolean = true;
  Seleccionado: number = 0;
  tituloSeleccionado: string = '';

  listadoSolicitudes: datosEtapasSolicitud[] = [];
  listaDatos: any[] = [];


  // offcanvasInstance: any; 
  //private offcanvasService: NgbOffcanvas, private modal: NgbModal, private config: NgbModalConfig,  config.backdrop = 'static'; config.keyboard = false;

  showCamvasPrincipal: boolean = false;
  datosNombramiento: any;
  tipoAutorizacion: string = '';

  //Acciones de los componentes por estatus
  @ViewChild(RemocionComponent) remocionComponente!: RemocionComponent;

  constructor() {
    this.Seleccionado = 1;
    this.listadoSolicitudes = [
      { indice: 1, titulo: 'Remoción', activo: false, title: '', noReg: 10 },
      { indice: 2, titulo: 'Siniestro', activo: false, title: '', noReg: 5 },
      { indice: 3, titulo: 'Devoluciones', activo: false, title: '', noReg: 3 },
      { indice: 4, titulo: 'Reconocimiento de gastos', activo: false, title: '', noReg: 5 },
      { indice: 5, titulo: 'Otros', activo: false, title: '', noReg: 6 },
    ]
  }


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
        this.tituloSeleccionado = 'Remoción';
        break;
      }
      case 2: {
        this.tituloSeleccionado = 'Siniestro';
        break;
      }
      case 3: {
        this.tituloSeleccionado = 'Devoluciones';
        break;
      }
      case 4: {
        this.tituloSeleccionado = 'Reconocimiento de gastos';
        break;
      }
      case 5: {
        this.tituloSeleccionado = 'Otros';
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
    this.showCamvasPrincipal = false;
  }

  aprobar() {
    switch (this.Seleccionado) {
      case 1: {
        this.remocionComponente.aprobar();
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
        this.remocionComponente.rechazar();
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
        this.remocionComponente.editar();
        break;
      }
      default: {
        break;
      }
    }
  }


}
