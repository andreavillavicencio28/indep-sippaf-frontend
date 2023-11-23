import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatosRetornoWizard } from 'src/app/models/datosRetornoWizard.model';
import { CONSTANTES } from 'src/app/shared/constantes/constantes';
import { WizardComponent } from 'src/app/shared/wizard/wizard.component';

@Component({
  selector: 'sg-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent  implements OnInit{


   //VARIABLES INDISPERNSABLES DE WIZARD
   @ViewChild(WizardComponent) wizardComponent!: WizardComponent;
   Indice:number;
   IndiceMax:number;
   listaPasos:string[] = [];

   FormularioTipoRegistro!: FormGroup;
   FormularioConfirma!: FormGroup;
   FormularioSinFirma!: FormGroup;
 
   certFileName: string = "Ubicación del certificado";
   keyFileName: string = "Ubicación de la llave privada";

  constructor(private router: Router,
      private toastrService: ToastrService,
      private fb: FormBuilder,
    ){
       //INICIALIZAR VALORES del wizard
       this.listaPasos = ['Valida tu RFC',
                          'Registra tu cuenta',
                          'Complementar datos',
                          'Vista previa de registro'];
       this.Indice = 0;
       this.IndiceMax = this.listaPasos.length;
       
      //Inicializamos formularios
      this.crearFormulario();
      this.crearFormularioConFirma();
      this.crearFormularioSinFirma();

      console.log(this.FormularioConfirma);

      this.FormularioConfirma.controls['rfc'].disable();

  }

  ngOnInit() {

    // // Suscribirse a cambios en el FormGroup
    // this.FormularioTipoRegistro.valueChanges.subscribe((value) => {
    //   // Aquí puedes agregar lógica adicional en caso de ser necesario
    //   console.log(value);
    // });
  }

   //FUNCION REUQERIDA PARA EL FUNCIONAMIENTO DEL WIZARD
   recibeIndice(valores:DatosRetornoWizard){
    this.Indice =  valores.indice;
    this.IndiceMax =  valores.indiceMax;
  }

  siguiente(){
    // PARA EJECUTAR ESTE EVENTO HAY QUE  VALIDAR QUE EL FORMULARIO O SECCION DEL FORMULARIO ESTE CORRECTO 
    if(this.Indice == 0){
      this.wizardComponent.siguiente();
    }else if(this.Indice == 1){
      this.wizardComponent.siguiente();
    }else if(this.Indice == 2){
      this.wizardComponent.siguiente();
    }else if(this.Indice == 3){
      this.wizardComponent.siguiente();
    }else if(this.Indice == 4){
      this.wizardComponent.siguiente();
    }
  
  }

  atras(){
    this.wizardComponent.atras()
  }

  confirmar(){
    this.wizardComponent.siguiente();
    this.toastrService.success('Registro guardado correctamente');
  }

  crearFormulario() {
    this.FormularioTipoRegistro = this.fb.group({
        firma: [true]
    });
  }

  crearFormularioConFirma() {
    this.FormularioConfirma = this.fb.group({
        key: ['',[Validators.required]],
        cer: ['',[Validators.required]],
        contra: ['',[Validators.required]],
        rfc: ['',[Validators.required, Validators.pattern(CONSTANTES.EXP_RFC)]],
    });
  }

  crearFormularioSinFirma() {
    this.FormularioSinFirma = this.fb.group({
        rfc: ['',[Validators.required, Validators.pattern(CONSTANTES.EXP_RFC)]]
    });
  }


  validarFirma(){

  }
  
  validarRfc(){

  }


  onCertFileChange(event: any){
    this.certFileName = event.target.files[0].name;
  }

  onKeyFileChange(event: any){
    this.keyFileName = event.target.files[0].name;
  }


  
}
