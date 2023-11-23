import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bienes } from './datos-propuesta-bien';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONSTANTES } from 'src/app/shared/constantes/constantes';

@Component({
  selector: 'sg-propuesta-del-bien',
  templateUrl: './propuesta-del-bien.component.html',
  styleUrls: ['./propuesta-del-bien.component.scss'],
})
export class PropuestaDelBienComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante = '';
  
  FormularioConfirma!: FormGroup;


  accionEditar:boolean = false;
  tipoAccion:boolean =  false;
  accion:number = 1; // accion de edicion
  accionDetalle:number = 1; // accion de detalle

  tipoSolicitante = '';

  listaBienes:any[] = [];
  listaBienesSeleccionados:any[] = [];

  showEditar:boolean = false;
  showObs:boolean = false;
  tituloObs:string = '';
  showDetalle:boolean = false;
  showFirma:boolean = false;

  permitirAdjuntar:boolean = false;


  listaImagenes:any[] = [];
  indiceActivoImagenes = 0;

  objetoDetalle:any = {};
  indiceObjetoDetalle:any = {};
  accionBien:boolean = true;

  mostrarMensaje:boolean = true;

  certFileName: string = "Ubicación del certificado";
  keyFileName: string = "Ubicación de la llave privada";

  pdfSrc:string = '';
   //TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTE OUTPUT
  @Output() respuestaCofirmarModal = new EventEmitter<boolean>();
  public page = 5;

  public pageLabel: string = '';
  constructor(private confirmarModalService: ConfirmarModalService,
              private fb: FormBuilder,
              public toastrService: ToastrService){
      this. crearFormularioConFirma();
      this.pdfSrc = "../../../../../assets/nombre.pdf";
    }


  crearFormularioConFirma() {
    this.FormularioConfirma = this.fb.group({
      key: ['', [Validators.required]],
      cer: ['', [Validators.required]],
      contra: ['', [Validators.required]],
      rfc: ['', [Validators.required, Validators.pattern(CONSTANTES.EXP_RFC)]],
    });
  }


  //TODOS LOS COMPONENTES QUE REPRECENTEN  UN ESTATUS DEBERAN TENER ESTAS FUNCONES
  aprobar(){
    // VALIDACIONES
    this.abrirCamvasObs(true);
    this.tituloObs = 'Aprobar';
  }

  rechazar(){
     // VALIDACIONES
    this.abrirCamvasObs(false);
    this.tituloObs = 'Rechazar';
  }

  editar(){
    this.abrirEditar();
  }

  //#################################################################################


  guardarSeleccionBien(){
    this.showEditar = false;
    this.toastrService.success("Se guardaron correctamente los bienes");

  }


  abrirEditar(){
    this.showEditar = true;
    this.accion = 1;
  }
  cerrarEditar(){
    this.confirmarModalService.abriraModal('¿Seguro quieres salir sin guardar cambios?').subscribe(result => {
      if (result) {
        // El usuario aceptó
        this.showEditar = false;
      }

    });
  }


  abrirDetalle(datos:any, indice:number, tipo:boolean){

    this.listaImagenes = [{imagen:'../../../../assets/imgen/casa.jpg'},
                          {imagen:'../../../../assets/imgen/casa2.png'},
                          {imagen:'../../../../assets/imgen/casa3.jpg'}];

     //LO IDEAL SERIA OBTENER DATOS COMPLETOS
    this.objetoDetalle = datos;
    this.indiceObjetoDetalle = indice;
    this.accionBien = tipo;

    this.showDetalle = true;
  }

  cerrarDetalle(){
    this.showDetalle = false;
  }


  abrirFirma(){
    this.crearFormularioConFirma();
    this.showFirma = true;
  }
  cerrarFirma(){
    this.showFirma = false;
  }
  firmar() {
    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    let titulomsm = 'Se firmó correctamente';
    this.cerrarFirma();
    this.toastrService.success(titulomsm);
 }
 onCertFileChange(event: any){
  this.certFileName = event.target.files[0].name;
}

onKeyFileChange(event: any){
  this.keyFileName = event.target.files[0].name;
}



  cambioAccion(accion:number){
    this.accion = accion;
  }

  // cambioAccionDetalle(accion:number){
  //   this.accionDetalle = accion;
  // }

  buscarBienes(){
    this.listaBienes = Bienes;
  }


  cambiarImagen(paso: number) {
    this.indiceActivoImagenes += paso;

    if (this.indiceActivoImagenes < 0) {
      this.indiceActivoImagenes = this.listaImagenes.length - 1;
    } else if (this.indiceActivoImagenes >= this.listaImagenes.length) {
      this.indiceActivoImagenes = 0;
    }
  }

  asignarBien(){
    this.listaBienes.splice(this.indiceObjetoDetalle, 1);
    this.listaBienesSeleccionados.push(this.objetoDetalle);
    this.cerrarDetalle();
  }

  quitarBien(){
    this.listaBienesSeleccionados.splice(this.indiceObjetoDetalle, 1);
    this.listaBienes.push(this.objetoDetalle);
    this.cerrarDetalle();
  }

  ocultarMensaje(){
    this.mostrarMensaje = false;
  }

  abrirCamvasObs(tipoAccion:boolean){
    this.showObs = true;
    this.tipoAccion = tipoAccion;
  }

  cerrarCamvasObsConfirmar(){

    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    let mensaje = this.tipoAccion? '¿Estas seguro que quieres aprobar la asignación de estos bienes?':'¿Estas seguro que quieres rechazar asignación de bienes?';
    let titulomsm = this.tipoAccion? 'Se aprobo correctamente la asignación de bienes ':'Se rechazo correctamente la  asignación de bienes';
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        // El usuario aceptó
        this.cerrarCamvasObs();
        this.respuestaCofirmarModal.emit(true);
        this.toastrService.success(titulomsm);
      } else {
        // El usuario canceló
        //this.valorRespuestaComfirmarModal.emit(false);
      }

    });
  }

  cerrarCamvasObs(){
    this.showObs = false;
  }




}
