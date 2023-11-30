import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { InicioComponent } from '../auth/inicio/inicio.component';
import { AcreditadosComponent } from './acreditados/acreditados.component';
import { PropuestasComponent } from './propuestas/propuestas.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { AdminComponents } from './admin/admin.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { AtencionesComponent } from './atenciones/atenciones.component';


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
        path: 'acreditados',
        data: {
          title: 'Acreditados',
          breadcrumbs: [
            {
              text: 'Acreditados',
              active: true
            }
          ],
        },
        component: AcreditadosComponent
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
        component: ArchivosComponent
      },
      {
        path: 'atenciones',
        data: {
          title: 'Atenciones',
          breadcrumbs: [
            {
              text: 'Atenciones',
              active: true
            }
          ],
        },
        component: AtencionesComponent
      }, 
     ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
