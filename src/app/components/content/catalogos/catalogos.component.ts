import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CatalogosService } from 'src/app/services/catalogos/catalogos.service';
import { ToastrService } from 'ngx-toastr';
import { INTERNAL_CODES } from 'src/app/shared/constantes/constantes';
import { catalogoEstado } from 'src/app/models/datosCatalogo.model';
import {listaCatalogos} from './listaCatalogos'

@Component({
  selector: 'sg-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.scss']
})
export class CatalogosComponent {
    showAgregarCatalogo: boolean = false;
    listaCatalogos=listaCatalogos;
    showCamvasPrincipal:boolean=false;
    Seleccionado:number=0;

    

  listaDatos: any[] = [];
  propiedades:any;

  tituloModal: string = 'Nuevo Estado';
  preguntaEliminar: string = '';

  FormularioModal!: FormGroup;
  FormularioBusqueda!: FormGroup;

  mostrarSpenner: boolean = false;
  esActualizacion: boolean = false;

  noPageActual: number = 1;
  itemsPageActual: number = 10;

  registroAEliminar!: catalogoEstado;

  constructor(
    private CatalogosService: CatalogosService,
    private modal: NgbModal,
    private config: NgbModalConfig,
    private fb: FormBuilder,
    public toastrService: ToastrService
    
  ){
    config.backdrop = 'static';
    config.keyboard = false;
    this.obtenerEstados(null);
    this.Seleccionado = 1;
    this.listaCatalogos = [
        {
            idCatalogo: 1,
            descripcion:'Motivo llamada',
            registro:
            [
                {
                    idRegistro:'001',
                    descripcionReg:'Motivo 1'
                },
                {
                    idRegistro:'002',
                    descripcionReg:'Motivo 2'
                },
                {
                    idRegistro:'003',
                    descripcionReg:'Motivo 3'
                }
        
            ],
            activo: false
        },
        {
            idCatalogo: 2,
            descripcion:'Grupo económico',
            registro :
            [
                {
                    idRegistro:'001',
                    descripcionReg:'Motivo 1'
                },
                {
                    idRegistro:'002',
                    descripcionReg:'Motivo 2'
                },
                {
                    idRegistro:'003',
                    descripcionReg:'Motivo 3'
                }
        
            ],
            activo: false
        },
        {
            idCatalogo: 3,
            descripcion:'Estatus propuesta',
            registro :
            [
                {
                    idRegistro:'001',
                    descripcionReg:'Motivo 1'
                },
                {
                    idRegistro:'002',
                    descripcionReg:'Motivo 2'
                },
                {
                    idRegistro:'003',
                    descripcionReg:'Motivo 3'
                }
        
            ],
            activo: false
        },
        {
            idCatalogo: 4,
            descripcion:'Organización Social',
            registro :
            [
                {
                    idRegistro:'001',
                    descripcionReg:'Motivo 1'
                },
                {
                    idRegistro:'002',
                    descripcionReg:'Motivo 2'
                },
                {
                    idRegistro:'003',
                    descripcionReg:'Motivo 3'
                }
        
            ],
            activo: false
        },
        {
            idCatalogo: 5,
            descripcion:'Número de Póliza',
            registro :
            [
                {
                    idRegistro:'001',
                    descripcionReg:'Motivo 1'
                },
                {
                    idRegistro:'002',
                    descripcionReg:'Motivo 2'
                },
                {
                    idRegistro:'003',
                    descripcionReg:'Motivo 3'
                }
        
            ],
            activo: false
        },
        {
            idCatalogo: 6,
            descripcion:'Remitentes',
            registro :
            [
                {
                    idRegistro:'001',
                    descripcionReg:'Motivo 1'
                },
                {
                    idRegistro:'002',
                    descripcionReg:'Motivo 2'
                },
                {
                    idRegistro:'003',
                    descripcionReg:'Motivo 3'
                }
        
            ],
            activo: false
        },
        {
            idCatalogo: 7,
            descripcion:'Unidades Administrativas',
            registro :
            [
                {
                    idRegistro:'001',
                    descripcionReg:'Motivo 1'
                },
                {
                    idRegistro:'002',
                    descripcionReg:'Motivo 2'
                },
                {
                    idRegistro:'003',
                    descripcionReg:'Motivo 3'
                }
        
            ],
            activo: false
        }

    ]
  }

  agregarCatalogo() {
    this.showAgregarCatalogo = true;
  }
  cerrarOffCanvas( numero: number) {
    switch (numero) {
      case 1:
        this.showAgregarCatalogo = false;
        break;
    
      default:
        break;
    }
  }
  guadarArchivo() {
    this.toastrService.success('Se ha guardado exitosamente el nuevo archivo')
    this.showAgregarCatalogo = false;
  }

  abrirCamvasPrincipal(datos: any) {
    this.showCamvasPrincipal = true;
    
  }

  
  ngOnInit() {
    this.crearFormularioBusqueda();
}

obtenerEstados(valores:any) {
    this.mostrarSpenner = true;
    if (valores != null){
       this.noPageActual =  valores.noPage;
       this.itemsPageActual = valores.itemsPage;
    }

    this.CatalogosService.getEstados( this.noPageActual,this.itemsPageActual,'ASC').subscribe(
    (resp) => {
        if( resp.code == INTERNAL_CODES.SUCCESSFUL ){
            this.propiedades = resp.data;
            this.listaDatos = resp.data.result;
            this.toastrService.success(resp.message);
        }else{
            this.toastrService.warning(resp.message);
        }
        this.mostrarSpenner = false;
    },(error) => {
        this.toastrService.error(error.message,"Error");
        this.mostrarSpenner = false;
    });

    this.mostrarSpenner = false;
}

crearFormularioBusqueda() {
    this.FormularioBusqueda = this.fb.group({
        claveBuscar: [''],
        estadoBuscar: [''],
    });
}

crearFormularioModal() {
    this.FormularioModal = this.fb.group({
        clave: ['', [Validators.required, Validators.maxLength(2)]],
        estado: ['', [Validators.required, Validators.maxLength(40)]],
    });
}

abrirModal(contenido: any, datos: catalogoEstado | null) {
    this.crearFormularioModal();
    if (datos == null) {
        this.tituloModal = "Nuevo Estado";
        this.esActualizacion = false;
    } else {
        this.tituloModal = "Actualizar Estado";
        this.esActualizacion = true;
        this.FormularioModal.setValue({
            clave: datos.fnclaveentidad,
            estado: datos.fsdescripcion,
        });
        this.FormularioModal.controls['clave'].disable();
    }

    this.modal.open(contenido, { size: 'lg' });
}

abrirModalEliminar(contenido: any, datos: catalogoEstado) {
    this.registroAEliminar = datos;
    this.preguntaEliminar = `¿Seguro que deseas eliminar el estado "${this.registroAEliminar.fsdescripcion}?"`;
    this.modal.open(contenido, { size: 'lg' });
}

cerrarModal() {
    this.modal.dismissAll();
}

guardarRegistro() {
    if(this.FormularioModal.valid){
        this.mostrarSpenner = true;
        let datos: catalogoEstado = {
            fnclaveentidad: this.FormularioModal.getRawValue().clave,
            fsdescripcion: this.FormularioModal.getRawValue().estado,
        }
        if (!this.esActualizacion) {
            this.CatalogosService.addEstado(datos).subscribe(
                (resp) => {
                    if( resp.code == INTERNAL_CODES.SUCCESSFUL ){
                        this.toastrService.success(resp.message);
                    }else{
                        this.toastrService.warning(resp.message);
                    }
                    this.mostrarSpenner = false;
                    this.obtenerEstados(null);
                    this.cerrarModal();
                },(error) => {
                    this.toastrService.error(error.message,"Error");
                    this.mostrarSpenner = false;
                });
        } else {
            this.CatalogosService.updateEstado(this.FormularioModal.getRawValue().clave,datos).subscribe(
                (resp) => {
                    if( resp.code == INTERNAL_CODES.SUCCESSFUL ){
                        this.toastrService.success(resp.message);
                    }else{
                        this.toastrService.warning(resp.message);
                    }
                    this.mostrarSpenner = false;
                    this.obtenerEstados(null);
                    this.cerrarModal();
                },(error) => {
                    this.toastrService.error(error.message,"Error");
                    this.mostrarSpenner = false;
                });
        }
    } else {
        this.FormularioModal.controls['clave'].markAsTouched();
        this.FormularioModal.controls['estado'].markAsTouched();
    }
}

eliminarRegistro() {
    this.mostrarSpenner = true;

    this.CatalogosService.deleteEstado(this.registroAEliminar.fnclaveentidad).subscribe(
        (resp) => {
            if( resp.code == INTERNAL_CODES.SUCCESSFUL ){
                this.toastrService.success(resp.message);
            }else{
                this.toastrService.warning(resp.message);
            }
            this.mostrarSpenner = false;
            this.obtenerEstados(null);
            this.cerrarModal();
        },(error) => {
            this.toastrService.error(error.message,"Error");
            this.mostrarSpenner = false;
        });       
}

}
