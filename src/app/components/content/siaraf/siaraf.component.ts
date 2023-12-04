import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { CONSTANTES } from 'src/app/shared/constantes/constantes';

@Component({
  selector: 'sg-siaraf',
  templateUrl: './siaraf.component.html',
  styleUrls: ['./siaraf.component.scss']
})
export class SiarafComponent {
  @Input() tipo: number = 0;
  @Input() id_solicitud: number = 0;
  @Input() solicitante = '';



  accionDetalle: number = 1; // accion de detalle
  documentoNombre: string = '';
  showDetalle: boolean = false;
  showCargaDocumento:boolean = false;
  FormularioConfirma !: FormGroup;
  
  showAgregarDocumento:  boolean = false;
  prevDocumento: boolean = false;
  prevAnexo: boolean = false;
  Seleccionado: number = 0;


  constructor(
    private confirmarModalService: ConfirmarModalService,
    private fb: FormBuilder,
    public toastrService: ToastrService
  ) {
    this.crearFormularioConFirma();
    this.FormularioConfirma.controls['rfc'].disable();
  }

  

  datosDocumentos: any[] = [
    {
      nombreDoc: 'Acta'
    },
    {
      nombreDoc: 'CURP'
    },
    {
      nombreDoc: 'Identificacion Oficial'
    }
  ];


  cambioAccionDetalle(accion: number) {
    this.accionDetalle = accion;
  }

  abrirPdf(documentoNombre: string = '') {
    this.documentoNombre = documentoNombre;
    this.showDetalle = true;
  }

  cargarDocumento(documentoNombre: string = '', accion: string) {
    this.documentoNombre = documentoNombre
    this.showCargaDocumento = true;
  }

  eliminarDocumento(nombreDoc: string = '') {
    //VALIDAR CAMPO OBSERVACIONES NO ESTE VACIO
    this.documentoNombre = nombreDoc;
    let mensaje = `¿Estas seguro que quieres eliminar el documento ${this.documentoNombre}?`;
    let titulomsm = `Se eliminó correctamente el ${this.documentoNombre}`;
    this.confirmarModalService.abriraModal(mensaje).subscribe(result => {
      if (result) {
        // El usuario aceptó
        //  this.cerrarCamvasObs();
        //  this.respuestaCofirmarModal.emit(true);
        this.toastrService.success(titulomsm);
      } else {
        // El usuario canceló
        //this.valorRespuestaComfirmarModal.emit(false);
      }

    });

  }

  crearFormularioConFirma() {
    this.FormularioConfirma = this.fb.group({
      key: [
        '',
        [Validators.required]
      ],
      cer: [
        '',
        [Validators.required]
      ],
      contra: [
        '',
        [Validators.required]
      ],
      rfc: [
        '',
        [
          Validators.required, Validators.pattern(CONSTANTES.EXP_RFC)
        ]
      ]
    });
  }






  
}
