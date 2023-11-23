import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { MenuComponent } from './menu/menu.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WizardComponent } from './wizard/wizard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfirmarModalComponent } from './confirmar-modal/confirmar-modal.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    MenuComponent,
    BreadcrumbsComponent,
    PaginadorComponent,
    WizardComponent,
    SidebarComponent,
    ConfirmarModalComponent
  ],
  exports: [
    SpinnerComponent,
    MenuComponent,
    BreadcrumbsComponent,
    PaginadorComponent,
    WizardComponent,
    SidebarComponent,
    ConfirmarModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule  
  ]
})
export class SharedModule { }