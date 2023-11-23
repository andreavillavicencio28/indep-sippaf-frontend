import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EstadosService } from 'src/app/services/catalogos/estados.service';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { DatosSesionService } from 'src/app/services/datos-sesion/datos-sesion.service';
import { datosCurpValidacion } from 'src/app/components/content/curp-validacion/datosCurpValidacion';

@Component({
  selector: 'sg-curp-validacion',
  templateUrl: './curp-validacion.component.html',
  styleUrls: ['./curp-validacion.component.scss']
})
export class CurpValidacionComponent {
  @Input() fecha: string = '';
  accionDetalle: number = 1; // accion de detalle
  valor: number = 0;
  showFormulario : boolean = false;
  showAcciones: boolean = false;
  datosBien: any[] = [];
  showDocument: Boolean = false;
  tablaEnviado: any[] = [];
  datosTabla: any[] = [];
  datosAnio: any[] = [];
  tablaEnviados: any[] = [];
  tablaDatosBien: any[] = datosCurpValidacion;
  textoAcccion: string = "Guardar";
  sentFile: boolean = false;
  idItem: number = 0;
  anioSelect: number = 0;
  mesSelect: number = 0;
  month: number = 0;
  generateNumber: number = 0;
  anio: number = 0;
  isDropdownBienesSusceptibles: boolean = false;
  isDropdownAtencionRegional: boolean = false;
  meses = [
    {
      id: 1,
      name: 'Enero'
    },
    {
      id: 2,
      name: 'Febrero'
    },  {
      id: 3,
      name: 'Marzo'
    },  {
      id: 4,
      name: 'Abril'
    },  {
      id: 5,
      name: 'Mayo'
    },  {
      id: 6,
      name: 'Junio'
    },  {
      id: 7,
      name: 'Julio'
    },  {
      id: 8,
      name: 'Agosto'
    },  {
      id: 9,
      name: 'Septiembre'
    },  {
      id: 10,
      name: 'Octubre'
    },  {
      id: 11,
      name: 'Noviembre'
    }, {
      id: 12,
      name: 'Diciembre'
    }
  ]



  constructor(private datosSesionService: DatosSesionService,
    private fb: FormBuilder,
    private estadosService: EstadosService,
    private toastrService: ToastrService,
    private confirmarModalService: ConfirmarModalService){

    }
    selectYear(): number[] {

      const year = (new Date()).getFullYear() + 1;
      const selectYear: number[] = []


      for (let index = year; index >= 2020; index--) {
        selectYear.push(index);
        // console.log(this.year);
      }
      return selectYear;

    }


    datosEnviados() {
    }


    cambioAccionDetalle(accion: number) {
      this.accionDetalle = accion;
    }

    addInforme() {
      this.showFormulario = true;
      this.textoAcccion = "Guardar";
    }

    mes() {
      let nameMonth;
      this.meses.find(el => {
        if (el.id === Number(this.mesSelect )) {
          nameMonth = el.name;
        }
      });

      return nameMonth;
    }

    actualizarInforme(id: number) {
      this.showFormulario = true;
      this.textoAcccion = "Actualizar";
      this.idItem = id;
    }

    generarInforme() {
      let randomNumber = Math.random();
      console.log('randomNumber', randomNumber);


    }

    verInforme() {
      this.showDocument = true;
    }

    verPago() {
      this.showDocument = true;
    }

    cerrarVerPago() {
      this.showDocument = false;
    }

    updateFile(event: any) {
      console.log(event.files);

      console.log('Aqui se hace la peticion para enviar el documento escanedao');
      this.sentFile = true;
    }

    cancelar() {
      this.showFormulario = false;
    }
    showDropdownBienesSusceptibles() {
      this.isDropdownBienesSusceptibles = this.isDropdownBienesSusceptibles? false: true;
    }
    hideDropdownBienesSusceptibles() {
      this.isDropdownBienesSusceptibles = false;
    }

    showDropdownAtencionRegional() {
      this.isDropdownAtencionRegional = this.isDropdownAtencionRegional? false: true;
    }
    hideDropdownAtencionRegional() {
      this.isDropdownAtencionRegional = false;
    }
}
