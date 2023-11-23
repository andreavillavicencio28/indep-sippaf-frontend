import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { EstadosComponent } from './estados.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EstadosService } from 'src/app/services/catalogos/estados.service';
import { of, throwError } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { INTERNAL_CODES } from 'src/app/shared/constantes/constantes';
import { catalogoEstado, respuestaEstados } from 'src/app/models/catalogos/datosEstados.model';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Test de EstadosComponent', () => {

    let component: EstadosComponent;
    let fixture: ComponentFixture<EstadosComponent>;
    let modalService: NgbModal;
    let estadosService: EstadosService;
    let toastrService: ToastrService;
    

    beforeEach(async () => {
       

        TestBed.configureTestingModule({
            declarations: [EstadosComponent],
            imports: [
                ToastrModule,
                ReactiveFormsModule,
                HttpClientModule,
            ],
            providers: [
                FormBuilder,
                { provide: ToastrService, useValue: {
                    success: jasmine.createSpy(),
                    warning: jasmine.createSpy(),
                    error: jasmine.createSpy(),
                  }, 
                },
            ],
        }).overrideTemplate(EstadosComponent, '').compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EstadosComponent);
        component = fixture.componentInstance;
        modalService = TestBed.inject(NgbModal);
        fixture.detectChanges();
        estadosService = TestBed.inject(EstadosService);
        toastrService = TestBed.inject(ToastrService);

    });

    it('Se crea el component correctamente', () => {
        expect(component).toBeTruthy();
    });

    it('Se crea correctamente el fomulario de busqueda', () => {
        component.crearFormularioBusqueda();
        const form: FormGroup = component.FormularioBusqueda;

        expect(form).toBeTruthy();

        expect(form.controls['claveBuscar']).toBeTruthy();
        expect(form.controls['estadoBuscar']).toBeTruthy();
    });

    it('Formulario búsqueda valido', () => {
        const claveInput = component.FormularioBusqueda.controls['claveBuscar'];
        const estadoInput = component.FormularioBusqueda.controls['estadoBuscar'];
        claveInput.setValue('1');
        estadoInput.setValue('Test Estado');
        expect(component.FormularioBusqueda.valid).toBeTruthy();
    });


    it('Abre un modal para un nuevo estado', () => {
        
        const contenido = 'Contenido del modal';
        const datos: catalogoEstado | null = null;
        spyOn(modalService, 'open');
      
        component.abrirModal(contenido, datos);
    
        expect(component.tituloModal).toBe('Nuevo Estado');
        expect(component.esActualizacion).toBe(false);
        component.crearFormularioModal();
        const form: FormGroup = component.FormularioModal;
        expect(form.value).toEqual({
            clave: '',
            estado: '',
          });
        expect(modalService.open).toHaveBeenCalled();
    });

    it('Abre un modal para actualizar un estado', () => {
   
        const contenido = 'Contenido del modal';
        const datos: catalogoEstado = {
          fnclaveentidad: 1,
          fsdescripcion: 'Estado existente',
        };
        spyOn(modalService, 'open');
    
        component.abrirModal(contenido, datos);
    
        expect(component.tituloModal).toBe('Actualizar Estado');
        expect(component.esActualizacion).toBe(true);

        component.crearFormularioModal();
        const form: FormGroup = component.FormularioModal;

        expect(form).toBeTruthy();

        expect(form.controls['clave']).toBeTruthy();
        expect(form.controls['estado']).toBeTruthy();

        expect(component.FormularioModal.controls['clave'].disabled).toBe(false);
    });


    
    it('Formulario de modal válido valores correctos', () => {
        component.crearFormularioModal();
        const form: FormGroup = component.FormularioModal;
        const claveInput = form.controls['clave'];
        const estadoInput = form.controls['estado'];
        claveInput.setValue('1');
        estadoInput.setValue('Test Estad o');
        expect(form.valid).toBeTruthy();
    });

    it('Formulario de modal inválido campos vacios', () => {
        component.crearFormularioModal();
        const form: FormGroup = component.FormularioModal;
        const claveInput = form.controls['clave'];
        const estadoInput = form.controls['estado'];
        claveInput.setValue('');
        estadoInput.setValue('');
        expect(form.invalid).toBeTruthy();
    });


    it('Abrir el modal #contenidoModalEliminar', () => {
        const contenidoMock = {}; 
        const datosMock:catalogoEstado = {  fnclaveentidad: 11, fsdescripcion: "nombre"}; 
        spyOn(modalService, 'open'); 

        component.abrirModalEliminar(contenidoMock, datosMock);
        component.preguntaEliminar ="Se agrega pregunta";

        expect(modalService.open).toHaveBeenCalled();
    });

    it('La funcion dismissAll funciona correctamente', () => {
        spyOn(modalService, 'dismissAll');
         component.cerrarModal();
        expect(modalService.dismissAll).toHaveBeenCalled();
    });



    it('Debería obtener los registrtos, mostrar un mensaje de éxito y actualizar noPageActual y itemsPageActua', () => {

            component.noPageActual = 1;
            component.itemsPageActual = 10;
            component.mostrarSpenner = true;
        
            const valores = {
                noPage: 2,
                itemsPage: 10,
            };

            const mockRespuestaExitosa = {
                code: "200",
                data: {
                     hasNextPage: true,
                     hasPreviousPage: true,
                     innerExceptionMessage: "",
                     itemsCount: 1,
                     message: 'string',
                     page: "0",
                     pageCount: 0,
                     result: [{ fnclaveentidad: 1,
                                fsdescripcion: 'Estado existente' },
                                { fnclaveentidad: 2,
                                    fsdescripcion: 'Estado existente' }],
                     success: true},
                message: "Se obtuvieron los registros correctamente"
            };

            spyOn(estadosService, 'getEstados').and.returnValue( of(mockRespuestaExitosa) );

            component.obtenerEstados(valores);

            expect(estadosService.getEstados).toHaveBeenCalledWith(component.noPageActual,component.itemsPageActual,'ASC');
            expect(toastrService.success).toHaveBeenCalledWith('Se obtuvieron los registros correctamente');
            expect(component.mostrarSpenner).toBe(false); 
            expect(component.noPageActual).toBe(2);
            expect(component.itemsPageActual).toBe(10);
    });

    it('Debería de no obtener los registrtos, mostrar un mensaje de advertencia y  no actualizar noPageActual y itemsPageActua', () => {

        component.noPageActual = 1;
        component.itemsPageActual = 10;
        component.mostrarSpenner = true;
    
        const valores = {
            noPage: 2,
            itemsPage: 10,
        };

        const mockRespuestaExitosa = {
            code: "300",
            data: {
                 hasNextPage: true,
                 hasPreviousPage: true,
                 innerExceptionMessage: "",
                 itemsCount: 1,
                 message: 'string',
                 page: "0",
                 pageCount: 0,
                 result: [],
                 success: true},
            message: "Problemasa al obtener los registros"
        };

        spyOn(estadosService, 'getEstados').and.returnValue( of(mockRespuestaExitosa) );

        component.obtenerEstados(valores);

        expect(estadosService.getEstados).toHaveBeenCalledWith(component.noPageActual,component.itemsPageActual,'ASC');
        expect(toastrService.warning).toHaveBeenCalledWith('Problemasa al obtener los registros');
        expect(component.mostrarSpenner).toBe(false); 
    });
    
    it('Debería de no obtener los registrtos y mostrar un Toastr de error cuando ocurre un error en el servidor', () => {
    component.noPageActual = 1;
    component.itemsPageActual = 10;
    component.mostrarSpenner = true;

    const valores = {
        noPage: 2,
        itemsPage: 10,
    };
    const mockError = { message: 'Error en el servidor' };
    spyOn(estadosService, 'getEstados').and.returnValue( throwError(mockError) );

    component.obtenerEstados(valores);

    expect(estadosService.getEstados).toHaveBeenCalledWith(component.noPageActual,component.itemsPageActual,'ASC');
    expect(toastrService.error).toHaveBeenCalledWith(mockError.message, 'Error');
    expect(component.mostrarSpenner).toBe(false);
    });



    it('Debería guardar el registro y mostrar un mensaje de éxito', () => {
    component.esActualizacion = false;
    component.crearFormularioModal();
    const form: FormGroup = component.FormularioModal;
    const claveInput = form.controls['clave'];
    const estadoInput = form.controls['estado'];
    claveInput.setValue(1);
    estadoInput.setValue('Estado prueba');
    const mockRespuestaExitosa = {
        code: "200",
        data: {
                hasNextPage: true,
                hasPreviousPage: true,
                innerExceptionMessage: "",
                itemsCount: 1,
                message: 'string',
                page: "0",
                pageCount: 0,
                result: [],
                success: true},
        message: "Se guardo el registro con exito"
    };
    

    spyOn(estadosService, 'addEstado').and.returnValue( of(mockRespuestaExitosa) );

    component.guardarRegistro();

    expect(form.valid).toBeTruthy();

    const datos = { fnclaveentidad: 1,fsdescripcion: 'Estado prueba' };

    expect(component.esActualizacion).toBeFalse();
    expect(estadosService.addEstado).toHaveBeenCalledWith(datos);
    expect(toastrService.success).toHaveBeenCalledWith('Se guardo el registro con exito');
    expect(component.mostrarSpenner).toBe(false);

    });

    it('Debería no guardar el registro y mostrar un mensaje de advertencia', () => {
    component.esActualizacion = false;
    component.crearFormularioModal();
    const form: FormGroup = component.FormularioModal;
    const claveInput = form.controls['clave'];
    const estadoInput = form.controls['estado'];
    claveInput.setValue(1);
    estadoInput.setValue('Estado prueba');
    const mockRespuestaExitosa = {
        code: "300",
        data: {
                hasNextPage: true,
                hasPreviousPage: true,
                innerExceptionMessage: "",
                itemsCount: 1,
                message: 'string',
                page: "0",
                pageCount: 0,
                result: [],
                success: true},
        message: "Error al momento de guardar"
    };
    

    spyOn(estadosService, 'addEstado').and.returnValue( of(mockRespuestaExitosa) );

    component.guardarRegistro();

    expect(form.valid).toBeTruthy();

    const datos = { fnclaveentidad: 1,fsdescripcion: 'Estado prueba' };

    expect(component.esActualizacion).toBeFalse();
    expect(estadosService.addEstado).toHaveBeenCalledWith(datos);
    expect(toastrService.warning).toHaveBeenCalledWith('Error al momento de guardar');
    expect(component.mostrarSpenner).toBe(false);
    
    });

    it('Debería no guardar el registro y mostrar un mensaje de error cuando ocurre un error en el servidor', () => {
    component.esActualizacion = false;
    component.crearFormularioModal();
    const form: FormGroup = component.FormularioModal;
    const claveInput = form.controls['clave'];
    const estadoInput = form.controls['estado'];
    claveInput.setValue(1);
    estadoInput.setValue('Estado prueba');
    const mockError = { message: 'Error en el servidor' };

    spyOn(estadosService, 'addEstado').and.returnValue( throwError(mockError)  );

    component.guardarRegistro();

    expect(form.valid).toBeTruthy();

    const datos = { fnclaveentidad: 1,fsdescripcion: 'Estado prueba' };

    expect(component.esActualizacion).toBeFalse();
    expect(estadosService.addEstado).toHaveBeenCalledWith(datos);
    expect(toastrService.error).toHaveBeenCalledWith(mockError.message, 'Error');
    expect(component.mostrarSpenner).toBe(false);
    
    });



    it('Debería actualizar el registro y mostrar un mensaje de éxito', () => {
    component.esActualizacion = true;
    component.crearFormularioModal();
    const form: FormGroup = component.FormularioModal;
    const claveInput = form.controls['clave'];
    const estadoInput = form.controls['estado'];
    claveInput.setValue(1);
    estadoInput.setValue('Estado prueba');
    const mockRespuestaExitosa = {
        code: "200",
        data: {
                hasNextPage: true,
                hasPreviousPage: true,
                innerExceptionMessage: "",
                itemsCount: 1,
                message: 'string',
                page: "0",
                pageCount: 0,
                result: [],
                success: true},
        message: "Se actualizo el registro con exito"
    };
    

    spyOn(estadosService, 'updateEstado').and.returnValue( of(mockRespuestaExitosa) );

    component.guardarRegistro();
    
    expect(form.valid).toBeTruthy();

    const datos = { fnclaveentidad: 1,fsdescripcion: 'Estado prueba' };

    expect(component.esActualizacion).toBeTrue();
    expect(estadosService.updateEstado).toHaveBeenCalledWith(claveInput.getRawValue() ,datos);
    expect(toastrService.success).toHaveBeenCalledWith('Se actualizo el registro con exito');
    expect(component.mostrarSpenner).toBe(false);

    });

    it('Debería no actualizar el registro y mostrar un mensaje de advertencia', () => {
        component.esActualizacion = true;
        component.crearFormularioModal();
        const form: FormGroup = component.FormularioModal;
        const claveInput = form.controls['clave'];
        const estadoInput = form.controls['estado'];
        claveInput.setValue(1);
        estadoInput.setValue('Estado prueba');
        const mockRespuestaExitosa = {
            code: "300",
            data: {
                    hasNextPage: true,
                    hasPreviousPage: true,
                    innerExceptionMessage: "",
                    itemsCount: 1,
                    message: 'string',
                    page: "0",
                    pageCount: 0,
                    result: [],
                    success: true},
            message: "Error al momento de actualizar"
        };
        
    
        spyOn(estadosService, 'updateEstado').and.returnValue( of(mockRespuestaExitosa) );
    
        component.guardarRegistro();
    
        expect(form.valid).toBeTruthy();
    
        const datos = { fnclaveentidad: 1,fsdescripcion: 'Estado prueba' };
    
        expect(component.esActualizacion).toBeTrue();
        expect(estadosService.updateEstado).toHaveBeenCalledWith(claveInput.getRawValue(),datos);
        expect(toastrService.warning).toHaveBeenCalledWith('Error al momento de actualizar');
        expect(component.mostrarSpenner).toBe(false);
        
    });
    
    it('Debería no actualizar el registro y mostrar un mensaje de error cuando ocurre un error en el servidor', () => {
        component.esActualizacion = true;
        component.crearFormularioModal();
        const form: FormGroup = component.FormularioModal;
        const claveInput = form.controls['clave'];
        const estadoInput = form.controls['estado'];
        claveInput.setValue(1);
        estadoInput.setValue('Estado prueba');
        const mockError = { message: 'Error en el servidor' };
    
        spyOn(estadosService, 'updateEstado').and.returnValue( throwError(mockError)  );
    
        component.guardarRegistro();
    
        expect(form.valid).toBeTruthy();
    
        const datos = { fnclaveentidad: 1,fsdescripcion: 'Estado prueba' };
    
        expect(component.esActualizacion).toBeTrue();
        expect(estadosService.updateEstado).toHaveBeenCalledWith(claveInput.getRawValue(),datos);
        expect(toastrService.error).toHaveBeenCalledWith(mockError.message, 'Error');
        expect(component.mostrarSpenner).toBe(false);
        
    });


    it('El formulario del modal no es valido activa mensajes de error', () => {
        component.crearFormularioModal();
        const form: FormGroup = component.FormularioModal;
        const claveInput = form.controls['clave'];
        const estadoInput = form.controls['estado'];
        claveInput.setValue('');
        estadoInput.setValue('');

        component.guardarRegistro();

        expect(form.invalid).toBeTruthy();

        claveInput.markAsTouched();
        estadoInput.markAsTouched();
    });


    it('Debería eliminar el registro y mostrar un mensaje de éxito', () => {
        component.registroAEliminar =   { fnclaveentidad: 3, fsdescripcion: "Baja California Sur" };

         const mockRespuestaExitosa = {
                    code: "200",
                    data: {
                         hasNextPage: true,
                         hasPreviousPage: true,
                         innerExceptionMessage: "",
                         itemsCount: 1,
                         message: 'string',
                         page: "0",
                         pageCount: 0,
                         result: [{ fnclaveentidad: 1,
                                    fsdescripcion: 'Estado existente' }],
                         success: true},
                    message: "Se elimino correctamente"
                };

        spyOn(estadosService, 'deleteEstado').and.returnValue( of(mockRespuestaExitosa) );
        
        component.eliminarRegistro();
        
        expect(estadosService.deleteEstado).toHaveBeenCalledWith(component.registroAEliminar.fnclaveentidad);
        expect(toastrService.success).toHaveBeenCalledWith('Se elimino correctamente');
        expect(component.mostrarSpenner).toBe(false);



    });

    it('Debería no eliminar el registro y mostrar un mensaje de advertencia', () => {
    component.registroAEliminar =   { fnclaveentidad: 3, fsdescripcion: "Baja California Sur" };
        const mockRespuestaExitosa = {
                code: "300",
                data: {
                        hasNextPage: true,
                        hasPreviousPage: true,
                        innerExceptionMessage: "",
                        itemsCount: 1,
                        message: 'string',
                        page: "0",
                        pageCount: 0,
                        result: [],
                        success: true},
                message: "fallo al eliminar el registro"
            };

    spyOn(estadosService, 'deleteEstado').and.returnValue( of(mockRespuestaExitosa) );
    
    component.eliminarRegistro();

    expect(estadosService.deleteEstado).toHaveBeenCalledWith(component.registroAEliminar.fnclaveentidad);
    expect(toastrService.warning).toHaveBeenCalledWith("fallo al eliminar el registro");
    expect(component.mostrarSpenner).toBe(false);
    });

    it('Debería no eliminar el registro y mostrar un Toastr de error cuando ocurre un error en el servidor', () => {
    component.registroAEliminar =   { fnclaveentidad: 3, fsdescripcion: "Baja California Sur" };
    const mockError = { message: 'Error en el servidor' };
    spyOn(estadosService, 'deleteEstado').and.returnValue( throwError(mockError) );

    component.eliminarRegistro();

    expect(estadosService.deleteEstado).toHaveBeenCalledWith(component.registroAEliminar.fnclaveentidad);
    expect(toastrService.error).toHaveBeenCalledWith(mockError.message, 'Error');
    expect(component.mostrarSpenner).toBe(false);
    });

});


