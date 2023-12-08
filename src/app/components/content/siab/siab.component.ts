import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmarModalService } from 'src/app/services/confirmar-modal/confirmar-modal.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONSTANTES } from 'src/app/shared/constantes/constantes';

@Component({
  // imports: [NgbDropdownModule, AdminModule, CommonModule, FormsModule, ReactiveFormsModule, PdfViewerModule],
  // standalone: true,
  selector: 'sg-siab',
  templateUrl: './siab.component.html',
  styleUrls: ['./siab.component.scss'],
})
export class SiabComponent {
  @Input() id_solicitud: number = 0;
  @Input() solicitante: string = '';
  accionDetalle: number = 1; // accion de detalle

  
 
}
