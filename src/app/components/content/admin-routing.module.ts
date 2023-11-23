import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { EstadosComponent } from './catalogos/estados/estados.component';
import { InicioComponent } from '../auth/inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { InformeMensualComponent } from './informe-mensual/informe-mensual.component';
import { DepositariasComponent } from './depositarias/depositarias.component';
import { AnexosComponent } from './anexos/anexos.component';
import { UsuariosInternosComponent } from './usuarios-internos/usuarios-internos.component';
import { UsuariosExternosComponent } from './usuarios-externos/usuarios-externos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ProcesosComponent } from './procesos/procesos.component';
import { OpinionJuridicaComponent } from './opinion-juridica/opinion-juridica.component';
import { EstadosCuentaComponent } from './estados-cuenta/estados-cuenta.component';
import { BienesSusceptiblesComponent } from './bienes-susceptibles/bienes-susceptibles.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { BuzonComponent } from './buzon/buzon.component';
import { SolicitudesIndepComponent } from './solicitudes-indep/solicitudes-indep.component';
import { Solicitudes2Component } from './solicitudes2/solicitudes2.component';
import { SeguimientoObligacionesComponent } from './seguimiento-obligaciones/seguimiento-obligaciones.component';
import { RemocionSiniestroComponent } from './remocion-siniestro/remocion-siniestro.component';
import { SolicitudesDescargaComponent } from './solicitudes-descarga/solicitudes-descarga.component';
import { CurpValidacionComponent } from './curp-validacion/curp-validacion.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'informemensual',
        data: {
          title: 'InformeMensualComponent',
          breadcrumbs: [
            {
              text: 'InformeMensualComponent',
              active: true,
            }
          ],
        },
        component: InformeMensualComponent,
      },
      {
        path: 'registro',
        data: {
          title: 'Registro',
          breadcrumbs: [
            {
              text: 'Registro',
              active: true,
            }
          ],
        },
        component: RegistroComponent,
      },
      {
        path: 'usuarios',
        data: {
          title: 'Usuarios',
          breadcrumbs: [
            {
              text: 'Usuarios',
              active: true,
            }
          ],
        },
        component: UsuariosComponent,
      },
      {
        path: 'estados',
        data: {
          title: 'Estados',
          breadcrumbs: [
            {
              text: 'Estados',
              active: true,
            }
          ],
        },
        component: EstadosComponent,
      },
      {
        path: 'solicitudes',
        data: {
          title: 'Solicitudes',
          breadcrumbs: [
            {
              text: 'Solicitudes',
              active: true,
            }
          ],
        },
        component: SolicitudesComponent,
      },
      {
        path: 'solicitudes-descarga',
        data: {
          title: 'Descarga de Documentos Solicitudes',
          breadcrumbs: [
            {
              text: 'Descarga de Documentos Solicitudes',
              active: true,
            }
          ],
        },
        component: SolicitudesDescargaComponent,
      },
      {
        path: 'anexos',
        data: {
          title: 'Anexos',
          breadcrumbs: [
            {
              text: 'Anexos',
              active: true,
            }
          ],
        },
        component: AnexosComponent,
      },
      {
        path: 'usuariosinternos',
        data: {
          title: 'Usuarios Internos',
          breadcrumbs: [
            {
              text: 'Usuarios Internos',
              active: true,
            }
          ],
        },
        component: UsuariosInternosComponent,
      },
      {
      path: 'usuariosexternos',
      data: {
        title: 'Usuarios Externos',
        breadcrumbs: [
          {
            text: 'Usuarios Externos',
            active: true,
          }
        ],
      },
      component: UsuariosExternosComponent,
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
      {
        path: 'procesos',
        data: {
          title: 'Procesos',
          breadcrumbs: [
            {
              text: 'Procesos',
              active: true,
            }
          ],
        },
        component: ProcesosComponent,
      },
      {
        path: 'opinionjuridica',
        data: {
          title: 'Opinion Juridica',
          breadcrumbs: [
            {
              text: 'Opninión Jurídica',
              active: true,
            }
          ],
        },
        component: OpinionJuridicaComponent,
      },
      {
        path: 'estadoscuenta',
        data: {
          title: 'Estados de Cuenta',
          breadcrumbs: [
            {
              text: 'Estados de Cuenta',
              active: true,
            }
          ],
        },
        component: EstadosCuentaComponent,
      },
      {
        path: 'bienessusceptibles',
        data: {
          title: 'Bienes Susceptibles',
          breadcrumbs: [
            {
              text: 'Bienes Susceptibles',
              active: true,
            }
          ],
        },
        component: BienesSusceptiblesComponent,
      },
      {
        path: 'administracion',
        data: {
          title: 'Administracion',
          breadcrumbs: [
            {
              text: 'Administración',
              active: true,
            }
          ],
        },
        component: AdministracionComponent,
      },
      {
        path: 'buzon',
        data: {
          title: 'Buzon',
          breadcrumbs: [
            {
              text: 'Buzón',
              active: true,
            }
          ],
        },
        component: BuzonComponent,
      },
      {
        path: 'solicitudesindep',
        data: {
          title: 'Solicitudes Uso INDEP',
          breadcrumbs: [
            {
              text: 'Solicitudes Uso INDEP',
              active: true,
            }
          ],
        },
        component: SolicitudesIndepComponent,
      },
      {
        path: 'solicitudes2',
        data: {
          title: 'Solicitudes',
          breadcrumbs: [
            {
              text: 'Solicitudes',
              active: true,
            }
          ],
        },
        component: Solicitudes2Component,
      },
      {
        path: 'seguimientoobligaciones',
        data: {
          title: 'Seguimiento a obligaciones',
          breadcrumbs: [
            {
              text: 'Seguimiento a obligaciones',
              active: true,
            }
          ],
        },
        component: SeguimientoObligacionesComponent,
      },
      {
        path: 'remocionsiniestro',
        data: {
          title: 'Remociones, siniestros, devoluciones, reconocimiento de gastos',
          breadcrumbs: [
            {
              text: 'Remociones, siniestros, devoluciones, reconocimiento de gastos',
              active: true,
            }
          ],
        },
        component: RemocionSiniestroComponent,
      },
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
        path: 'depositarias',
        data: {
          title: 'Depositarías',
          breadcrumbs: [
            {
              text: 'Depositarías',
              active: true,
            }
          ],
        },
        component: DepositariasComponent,
      },
      {
        path: 'curp-validacion',
        data: {
          title: 'CURP-validación',
          breadcrumbs: [
            {
              text: 'CURP-validación',
              active: true,
            }
          ],
        },
        component: CurpValidacionComponent,
      },

     ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
