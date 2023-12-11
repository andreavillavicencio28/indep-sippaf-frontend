import { Component,EventEmitter, Input, Output } from '@angular/core';
import { datosPropuesta, documentos } from '../../detalle-solicitud/datosPropuesta'
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CONSTANTES } from 'src/app/shared/constantes/constantes';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';

@Component({
  selector: 'sg-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.scss']
})
export class EditarAdminComponent {
  @Input() id_propuesta: number = 0;
  @Input() propuesta = '';

  datosPropuesta = datosPropuesta;
  
}
