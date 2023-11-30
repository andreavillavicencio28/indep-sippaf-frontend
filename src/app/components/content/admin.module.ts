
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
import { WizardComponent } from 'src/app/shared/wizard/wizard.component';
import { DetalleJuridicoComponent } from './juridico/detalle-juridico/detalle-juridico.component';
import { JuridicoComponent } from './juridico/juridico.component';
import { DetalleCapaComponent } from './capa/detalle-capa/detalle-capa.component';
import { CapaComponent } from './capa/capa.component';

import { PropuestasComponent } from './propuestas/propuestas.component';
import { ValidacionProComponent } from './etapasPropuestas/validacion/validacionPro.component';
import { DetallePropuestaComponent } from './etapasPropuestas/detalle-solicitud/detalle-propuesta.component';


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
    ValidacionProComponent,
    DetallePropuestaComponent,
    DetalleJuridicoComponent,
    JuridicoComponent,
    CapaComponent,
    DetalleCapaComponent
  ],
  exports: [
    WizardComponent,
  ],

})
export class AdminModule {
}
