import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']

})
export class SidebarComponent {
  public menuItems: any[] = [ 
    { label: 'Atenciones', icon: 'bi bi-person', route: '/content/atenciones'},
    { label: 'Propuestas de Pago', icon: 'bi bi-pass-fill', route: '/content/propuestas' },
    { label: 'Historial de Sesiones', icon: 'bi bi-clock-history', route: '/content/historial'},
    { label: 'Administración', icon: 'bi bi-person-fill-gear', route: '/content/administracion'},
    { label: 'Archivos', icon: 'bi bi-files', route: '/content/archivos'},
    { label: 'Acreditados', icon: 'bi bi-person-workspace', route: '/content/acreditados'},
    { label: 'Reportes', icon: 'bi bi-file-earmark-spreadsheet', route: '/content/reportes'},
    { label: 'Alertas', icon: 'bi bi-file-earmark-spreadsheet', route: '/content/admin-alertas'},
  ];
}
