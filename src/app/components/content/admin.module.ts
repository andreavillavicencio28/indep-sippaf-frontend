
import {AdminRoutingModule} from './admin-routing.module';
import {CurrencyPipe, DatePipe, DecimalPipe} from '@angular/common';


import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistroComponent } from './registro/registro.component';
import { EstadosComponent } from './catalogos/estados/estados.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { PropuestaDelBienComponent } from './etapasSolicitudes/propuesta-del-bien/propuesta-del-bien.component';
import { PrevalidacionComponent } from './etapasSolicitudes/prevalidacion/prevalidacion.component';
import { OpinionTecnicaComponent } from './etapasSolicitudes/opinion-tecnica/opinion-tecnica.component';
import { FormularioEdicionComponent } from './etapasSolicitudes/opinion-tecnica/formulario-edicion/formulario-edicion.component';
import { ValidacionComponent } from './etapasSolicitudes/validacion/validacion.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DetalleComponent } from './etapasSolicitudes/detalle/detalle.component';
import { AutorizacionComponent } from './etapasSolicitudes/autorizacion/autorizacion.component';
import { NombramientoComponent } from './etapasSolicitudes/nombramiento/nombramiento.component';
import { EntregaComponent } from './etapasSolicitudes/entrega/entrega.component';
import { EdicionNombramientoComponent } from './etapasSolicitudes/nombramiento/edicion-nombramiento/edicion-nombramiento.component';
import { SeguroPolizaComponent } from './etapasSolicitudes/seguro-poliza/seguro-poliza.component';
import { DetalleSolicitudComponent } from './etapasSolicitudes/detalle/detalle-solicitud/detalle-solicitud.component';
import { DetallePrevalidacionComponent } from './etapasSolicitudes/detalle/detalle-prevalidacion/detalle-prevalidacion.component';
import { DetalleBienComponent } from './etapasSolicitudes/detalle/detalle-bien/detalle-bien.component';
import { DetalleOpinionTenicaComponent } from './etapasSolicitudes/detalle/detalle-opinion-tenica/detalle-opinion-tenica.component';
import { DetalleNombramientoComponent } from './etapasSolicitudes/detalle/detalle-nombramiento/detalle-nombramiento.component';
import { DetalleEntregaBienComponent } from './etapasSolicitudes/detalle/detalle-entrega-bien/detalle-entrega-bien.component';
import { InformeMensualComponent } from './informe-mensual/informe-mensual.component';
import { WizardComponent } from 'src/app/shared/wizard/wizard.component';
import { DepositariasComponent } from './depositarias/depositarias.component';
import { InformeMensualTablaComponent } from './depositarias/detalle-depositarias/informe-mensual-tabla/informe-mensual-tabla.component';
import { EncabezadoDetalleComponent } from './depositarias/detalle-depositarias/encabezado-detalle/encabezado-detalle.component';
import { RemocionComponent } from './remocion-siniestro/remocion/remocion.component';
import { UsuariosInternosComponent } from './usuarios-internos/usuarios-internos.component';
import { UsuariosExternosComponent } from './usuarios-externos/usuarios-externos.component';
import { AnexosComponent } from './anexos/anexos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { BienesSusceptiblesComponent } from './bienes-susceptibles/bienes-susceptibles.component';
import { EstadosCuentaComponent } from './estados-cuenta/estados-cuenta.component';
import { OpinionJuridicaComponent } from './opinion-juridica/opinion-juridica.component';
import { ProcesosComponent } from './procesos/procesos.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { BuzonComponent } from './buzon/buzon.component';
import { SolicitudesIndepComponent } from './solicitudes-indep/solicitudes-indep.component';
import { SiniestrosComponent } from './remocion-siniestro/siniestros/siniestros.component';
import { Solicitudes2Component } from './solicitudes2/solicitudes2.component';
import { SeguimientoObligacionesComponent } from './seguimiento-obligaciones/seguimiento-obligaciones.component';
import { RemocionSiniestroComponent } from './remocion-siniestro/remocion-siniestro.component';
import { PagoAguaComponent } from './depositarias/detalle-depositarias/pago-agua/pago-agua.component';
import { SolicitudesDescargaComponent } from './solicitudes-descarga/solicitudes-descarga.component';
import { CurpValidacionComponent } from './curp-validacion/curp-validacion.component';
import { BitacoraComponent } from './administracion/bitacora/bitacora.component';
import { ContraprestacionComponent } from './administracion/contraprestacion/contraprestacion.component';
import { ConfiguracionComponent } from './administracion/configuracion/configuracion.component';
import { DiasAsuetoComponent } from './administracion/dias-asueto/dias-asueto.component';

/* Components */

// import * as adminComponets from './components';
@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    FormularioEdicionComponent,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    EdicionNombramientoComponent,
    RegistroComponent,
    ConfiguracionComponent,
    DiasAsuetoComponent,
    // OpinionTecnicaComponent,
  ],
  providers: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe
  ],
  declarations: [
    AdminComponent,
    UsuariosComponent,
    EstadosComponent,
    SolicitudesComponent,
    PropuestaDelBienComponent,
    PrevalidacionComponent,
    ValidacionComponent,
    DetalleComponent,
    AutorizacionComponent,
    NombramientoComponent,
    EntregaComponent,
    SeguroPolizaComponent,
    DetalleSolicitudComponent,
    DetallePrevalidacionComponent,
    DetalleBienComponent,
    DetalleOpinionTenicaComponent,
    DetalleNombramientoComponent,
    DetalleEntregaBienComponent,
    InformeMensualComponent,
    OpinionTecnicaComponent,
    DepositariasComponent,
    InformeMensualTablaComponent,
    EncabezadoDetalleComponent,
    RemocionComponent,
    UsuariosInternosComponent,
    UsuariosExternosComponent,
    AnexosComponent,
    ReportesComponent,
    BienesSusceptiblesComponent,
    EstadosCuentaComponent,
    OpinionJuridicaComponent,
    ProcesosComponent,
    AdministracionComponent,
    BuzonComponent,
    // SolicitudesIndepComponent,
    SiniestrosComponent,
    // Solicitudes2Component,
    SeguimientoObligacionesComponent,
    RemocionSiniestroComponent,
    PagoAguaComponent,
    SolicitudesDescargaComponent,
    CurpValidacionComponent,
    BitacoraComponent,
    ContraprestacionComponent,
    // ConfiguracionComponent,
  ],
  exports: [
    FormularioEdicionComponent,
    WizardComponent,
    EdicionNombramientoComponent,
    DetalleSolicitudComponent,
    DetallePrevalidacionComponent,
    DetalleBienComponent,
    DetalleOpinionTenicaComponent,
    DetalleNombramientoComponent,
    DetalleEntregaBienComponent,
    FormularioEdicionComponent,
  ],

})
export class AdminModule {
}
