import { Component, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sg-confirmar-modal',
  templateUrl: './confirmar-modal.component.html',
  styleUrls: ['./confirmar-modal.component.scss']
})
export class ConfirmarModalComponent {
  @Input() textoPergunta: string = '';
  @Input() textoBotonAceptar: string = '';
  @Input() textoBotonRechazar: string = '';

  constructor(public activeModal: NgbActiveModal){
  }

  closeModal(result: boolean): void {
    this.activeModal.close(result);
  }

}
