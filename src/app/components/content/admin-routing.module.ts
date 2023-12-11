import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { InicioComponent } from '../auth/inicio/inicio.component';
import { PropuestasComponent } from './propuestas/propuestas.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { AdminComponents } from './admin/admin.component';
import { AdminArchivosComponent } from './admin-archivos/admin-archivos.component';
import { AtencionesComponent } from './atenciones/atenciones.component';
import { AcreditadosComponent } from './acreditados/acreditados.component';
import { AdministracionComponent } from "./administracion/administracion.component";
import { RolesPerfilesComponent } from './rolesPerfiles/rolesPerfiles.component';
import { ReportesComponent } from './reportes/reportes.component';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [    
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },        
      {
        path: 'propuestas',
        data: {
          title: 'Propuestas',
          breadcrumbs: [
            {
              text: 'Propuestas',
              active: true
            }
          ],
        },
        component: PropuestasComponent
      },
      {
        path: 'sesiones',
        data: {
          title: 'Sesiones',
          breadcrumbs: [
            {
              text: 'Sesiones',
              active: true
            }
          ],
        },
        component: SesionesComponent
      },
      {
        path: 'bitacora',
        data: {
          title: 'Bitacora',
          breadcrumbs: [
            {
              text: 'Bitacora',
              active: true
            }
          ],
        },
        component: BitacoraComponent
      },
      {
        path: 'catalogos',
        data: {
          title: 'Catalogos',
          breadcrumbs: [
            {
              text: 'Catalogos',
              active: true
            }
          ],
        },
        component: CatalogosComponent
      },
      {
        path: 'admin',
        data: {
          title: 'Admin',
          breadcrumbs: [
            {
              text: 'Admin',
              active: true
            }
          ],
        },
        component: AdminComponents
      },
      {
        path: 'administracion',
        data: {
          title: 'Administracion',
          breadcrumbs: [
            {
              text: 'Administracion',
              active: true
            }
          ],
        },
        component: AdministracionComponent
      },
      {
        path: 'archivos',
        data: {
          title: 'Archivos',
          breadcrumbs: [
            {
              text: 'Archivos',
              active: true
            }
          ],
        },
        component: AdminArchivosComponent
      },
      {
        path: 'acreditados',
        data: {
          title: 'acreditados',
          breadcrumbs: [
            {
              text: 'acreditados',
              active: true,
            }
          ],
        },
        component: AcreditadosComponent,
      },
      {
        path: 'atenciones',
        data: {
          title: 'atenciones',
          breadcrumbs: [
            {
              text: 'atenciones',
              active: true,
            }
          ],
        },
        component: AtencionesComponent,
      },
      {
        path: 'rolesPerfiles',
        data: {
          title: 'Roles y Perfiles',
          breadcrumbs: [
            {
              text: 'Roles y Perfiles',
              active: true,
            }
          ],
        },
        component: RolesPerfilesComponent,
      },
      {
        path: 'reportes',
        data: {
          title: 'Reportes',
          breadcrumbs: [
            {
              text: 'Reportes',
              active: true,
            }
          ],
        },
        component: ReportesComponent,
      },
     ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
