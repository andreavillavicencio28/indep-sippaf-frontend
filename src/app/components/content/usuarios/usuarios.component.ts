import { Component, ElementRef, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { datosUsuarios } from 'src/app/models/datosUsuarios.model';

@Component({
  selector: 'sg-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  listaDatos:datosUsuarios[] = [];
  tituloModal:string = 'Nuevo Usuario';
  FormularioModal!: FormGroup;
  mostrarSpenner:boolean = false;

  noPageActual: number = 1;
  itemsPageActual: number = 10;
  
  constructor(  private modal:NgbModal,
    private config: NgbModalConfig,
    private fb: FormBuilder,
    private elementRef: ElementRef,
    ){

    config.backdrop = 'static';
    config.keyboard = false;

    this.listaDatos = [];


  }

  busquedaCatalogo(valores:any){

    console.log( this.FormularioModal);
    //ESTTE ES EJEMPLO DE EL OBJETO QUE SE ENVIARIA BASICO
    let datos = {
      noPage:   this.noPageActual,
      itemsPage: this.itemsPageActual
    };

    if(valores != null){
      //ESTTE ES EJEMPLO DE EL OBJETO QUE SE ENVIARIA BASICO SI EL PAGINADOR EMITE ALGO
       datos = {
        noPage:   valores.noPage,
        itemsPage: valores.itemsPage
      };
    }

      //FUNCION QUE OBTIEN LOS VALORES

    // this.catalogosService.getCatalogoFiltro(datos)
    // .subscribe(
    //   resp =>{
    //     this.listaDatos = resp.datos;
      
    // },error =>{
    //   this.listaDatos = [];
    // });

        
    this.listaDatos = [ {
          id: 1,
          nombre: "Juan",
          primerApellidop: "Gomez",
          segundoApellido: "Lopez",
          esEmpleado: true,
          correo: "juan.gomez@example.com",
          curp: "XXXX123456XXXXXX01",
          rfc: "XXXX123456XXX",
          telefono: 1234567890,
          noPage: 1,
          totalPages:1,
          totalRows:2,
          noReg: 1,
        },
        {
          id: 2,
          nombre: "Maria",
          primerApellidop: "Rodriguez",
          segundoApellido: "Perez",
          esEmpleado: false,
          correo: "maria.rodriguez@example.com",
          curp: "XXXX789012XXXXXX02",
          rfc: "XXXX789012XXX",
          telefono: 987654321,
          noPage: 1,
          totalPages:1,
          totalRows:2,
          noReg: 1
        }];

  }

  CrearFormulario(){
    this.FormularioModal = this.fb.group({
        id: [''],
        usuario: ['', Validators.required],
        contra1: ['', Validators.required],
        contra2: ['', Validators.required],
        nombre: ['' , Validators.required],
        primerApellido: ['' , Validators.required],
        segundoApellido: [''],
        esEmpleado: [false],
        correo: ['', Validators.required],
        curp: ['', Validators.required],
        rfc: ['', Validators.required],
        area: ['0', Validators.required],
        telefono: ['']
    });
   }

  abrirModal(contenido:any,datos:any){
    this.CrearFormulario();

    if(datos == null){
      this.tituloModal = "Nuevo Usuario";
    }else{
      this.tituloModal = "Actualizar Usuario";
    }

    this.modal.open(contenido,{size: 'lg'});
  }

  cerrarModal(){
    this.modal.dismissAll();
    this.mostrarSpenner = true;
   }




}
