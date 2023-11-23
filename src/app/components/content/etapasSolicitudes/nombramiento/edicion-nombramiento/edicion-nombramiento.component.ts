import { Component, Input } from '@angular/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'sg-edicion-nombramiento',
  templateUrl: './edicion-nombramiento.component.html',
  standalone: true,
  imports: [NgbDatepickerModule, CommonModule],
  styleUrls: ['./edicion-nombramiento.component.scss']
})
export class EdicionNombramientoComponent {
  @Input() tipoNombramiento: string = '';
}
