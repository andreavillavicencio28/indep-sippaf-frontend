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
    { label: 'Sesiones', icon: 'bi bi-calendar-check', route: '/content/sesiones'},
    { label: 'Admin', icon: 'bi bi-person-fill-gear', route: '/content/administracion'},
    { label: 'Archivos', icon: 'bi bi-files', route: '/content/archivos'},
    { label: 'Acreditados', icon: 'bi bi-person-workspace', route: '/content/acreditados'},    
    { label: 'Reportes', icon: 'bi bi-files', route: '/content/reportes'},
    { label: 'Bitácora', icon: 'bi bi-journal-check', route: '/content/bitacora'},
    { label: 'Catálogos', icon: 'bi bi-book', route: '/content/catalogos'},        
    { label: 'Roles y perfiles', icon: 'bi bi-person-fill-gear', route: '/content/rolesPerfiles'},
    { label: 'Cancelación y Consulta de propuestas', icon: 'bi bi-search', route: '/content/atenciones'},    
    { label: 'Atenciones', icon: 'bi bi-person', route: '/content/atenciones'},
    { label: 'Roles y perfiles', icon: 'bi bi-person-lock', route: '/content/rolesPerfiles'},
    { label: 'Cancelación y Consulta de propuestas', icon: 'bi bi-x-octagon', route: '/content/atenciones'},
    { label: 'Reportes', icon: 'bi bi-file-earmark-spreadsheet', route: '/content/reportes'},
    { label: 'Historial', icon: 'bi bi-clock-history', route: '/content/historial'},
    { label: 'Administracion de Alertas', icon: 'bi bi-exclamation-octagon ', route: '/content/alertas'},
  ];
}
