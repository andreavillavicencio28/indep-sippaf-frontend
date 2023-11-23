/* tslint:disable: ordered-imports*/
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthComponent } from './auth.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

/* Containers */




/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [  
          {
            path: 'inicio',
            canActivate: [],
            component: InicioComponent,
            data: {
                title: 'Inicio',
            },
          },
          {
            path: 'resetpass',
            canActivate: [],
            component: ResetpassComponent,
            data: {
                title: 'Restablecer contraseña',
            },
          },
          {
            path: 'registroUsuario',
            canActivate: [],
            component: RegistroUsuarioComponent,
            data: {
                title: 'Registro usuario',
            },
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'inicio',
          },
    
         ]
    },
    {
        path: 'login',
        canActivate: [],
        component: LoginComponent,
        data: {
            title: 'Inicio seción',
        },
      },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }
