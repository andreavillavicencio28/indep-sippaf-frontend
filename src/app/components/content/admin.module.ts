
import {AdminRoutingModule} from './admin-routing.module';
import {CurrencyPipe, DatePipe, DecimalPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PropuestasComponent } from './propuestas/propuestas.component';
import { WizardComponent } from 'src/app/shared/wizard/wizard.component';
import { DetalleJuridicoComponent } from './juridico/detalle-juridico/detalle-juridico.component';
import { JuridicoComponent } from './juridico/juridico.component';
import { DetalleCapaComponent } from './capa/detalle-capa/detalle-capa.component';
import { CapaComponent } from './capa/capa.component';
import { AtencionesComponent } from './atenciones/atenciones.component';
//import { DetalleAtencionComponent } from './etapasSolicitudes/detalle/detalle-atencion/detalle-atencion.component';
import { DetalleAtencionComponent } from './etapasAtenciones/detalle/detalle-atencion/detalle-atencion.component';
import { AcreditadosComponent } from './acreditados/acreditados.component';
//import {DetalleAcreditadoComponent} from './etapasSolicitudes/detalle/detalle-acreditados/detalle-acreditado.component';
import { DetalleAcreditadoComponent } from './etapasAcreditados/detalle/detalle-acreditados/detalle-acreditado.component';

/* Components */
@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe
  ],
  declarations: [
    AdminComponent,
    PropuestasComponent,
    DetalleJuridicoComponent,
    JuridicoComponent,
    CapaComponent,
    DetalleCapaComponent,
    AcreditadosComponent,
    DetalleAcreditadoComponent,
    AtencionesComponent,
    DetalleAtencionComponent,
  ],
  exports: [
    WizardComponent,
    DetalleAtencionComponent,
    DetalleAcreditadoComponent,
  ],

})
export class AdminModule {
}
