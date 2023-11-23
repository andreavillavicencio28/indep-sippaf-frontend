import { Component, ElementRef, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EstadosService } from 'src/app/services/catalogos/estados.service';
import { ToastrService } from 'ngx-toastr';
import { INTERNAL_CODES } from 'src/app/shared/constantes/constantes';
import { catalogoEstado } from 'src/app/models/catalogos/datosEstados.model';

@Component({
    selector: 'sg-estados',
    templateUrl: './estados.component.html',
    styleUrls: ['./estados.component.scss']
})
export class EstadosComponent {
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
        private estadosService: EstadosService,
        private modal: NgbModal,
        private config: NgbModalConfig,
        private fb: FormBuilder,
        public toastrService: ToastrService
    ) {
        config.backdrop = 'static';
        config.keyboard = false;
        this.obtenerEstados(null);
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

        this.estadosService.getEstados( this.noPageActual,this.itemsPageActual,'ASC').subscribe(
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
                this.estadosService.addEstado(datos).subscribe(
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
                this.estadosService.updateEstado(this.FormularioModal.getRawValue().clave,datos).subscribe(
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

        this.estadosService.deleteEstado(this.registroAEliminar.fnclaveentidad).subscribe(
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
