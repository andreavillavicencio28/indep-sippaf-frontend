import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']

})
export class SidebarComponent {
  public menuItems: any[] = [
    /*{ label: 'Acreditados', icon: 'bi bi-person-check-fill', route: '/content/solicitudes' },
    { label: 'Propuestas', icon: 'bi bi-cart-plus', route: '/content/solicitudesindep' },
    { label: 'Sesiones', icon: 'bi bi-cart', route: '/content/solicitudes2' },
    { label: 'Bitacora', icon: 'bi bi-binoculars-fill', route: '/content/depositarias' },
    { label: 'Catalogos', icon: 'bi bi-exclamation-circle', route: '/content/remocionsiniestro' },
    { label: 'ADMIN', icon: 'bi bi-person-workspace', route: '/content/usuariosinternos' },
    { label: 'Archivos', icon: 'bi bi-person-video3', route: '/content/usuariosexternos' },
    { label: 'Atenciones', icon: 'bi bi-files', route: '/content/anexos' },*/
    { label: 'Inicio', icon: 'bi bi-house', route: '/content/solicitudes' },
    { label: 'Solicitudes uso INDEP', icon: 'bi bi-cart-plus', route: '/content/solicitudesindep' },
    { label: 'Solicitudes', icon: 'bi bi-cart', route: '/content/solicitudes2' },
    { label: 'Depositarias', icon: 'bi bi-binoculars-fill', route: '/content/depositarias' },
    { label: 'Remociones, Siniestros, Devoluciones, Mantenimiento con reconocimiento de gastos', icon: 'bi bi-exclamation-circle', route: '/content/remocionsiniestro' },
    { label: 'Usuarios Internos', icon: 'bi bi-person-workspace', route: '/content/usuariosinternos' },
    { label: 'Usuarios Externos', icon: 'bi bi-person-video3', route: '/content/usuariosexternos' },
    { label: 'Administración de Archivos', icon: 'bi bi-files', route: '/content/anexos' },
    { label: 'Reportes', icon: 'bi bi-file-richtext', route: '/content/reportes' },
    { label: 'Bienes Susceptibles', icon: 'bi bi-bag-plus', route: '/content/bienessusceptibles' },
    { label: 'Estados de Cuenta', icon: 'bi bi-card-checklist', route: '/content/estadoscuenta' },
    { label: 'Opinión Juídica', icon: 'bi bi-person-check-fill', route: '/content/opinionjuridica' },
    { label: 'Procesos', icon: 'bi bi-diagram-2-fill', route: '/content/procesos' },
    { label: 'Configuración', icon: 'bi bi-gear', route: '/content/administracion' },
    { label: 'Descarga de Documentación de Depositarías', icon: 'bi bi-cloud-download', route: '/content/solicitudes-descarga' },

  
  ];
}
