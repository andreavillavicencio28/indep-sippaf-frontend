import { Component } from '@angular/core';
import { dataArchivos, dataSeccion, dataSubseccion, dataFiles } from './dataDummyArchivos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sg-admin-archivos',
  templateUrl: './admin-archivos.component.html',
  styleUrls: ['./admin-archivos.component.scss']
})
export class AdminArchivosComponent {
  seccion: string = 'Elige una opción';
  secciones = dataSeccion;

  subseccion: string = 'Elige una opción';
  subsecciones = dataSubseccion;

  archivo: string = 'Elige una opción';
  archivos: any = dataFiles;

  dataTablaArchivos = dataArchivos;

  

  showAgregarArchivo: boolean = false;


  mostrarTabla: boolean = false;


  constructor(
    private toastrService : ToastrService,
  ) {}
  changeSeccion() {}

  changeSubseccion() {}

  changeArchivos() {}

  busquedaArchivos() {
    this.mostrarTabla = true;
  }

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
