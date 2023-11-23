import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DatosSesionService } from '../datos-sesion/datos-sesion.service';
import { DatosSesion } from 'src/app/models/datosSesion.model';

@Injectable({
  providedIn: 'root'
})
export class ProtectRoutesGuard implements CanActivate {

  public token:string|null = '';

  constructor(private router: Router, private datosSesionService: DatosSesionService) {
    this.datosSesionService.datosUsuarioSubject$.subscribe((valores: DatosSesion) => {
      this.token = valores.token != null? valores.token.trim(): null ;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return true;
      const valorRecuperado = localStorage.getItem('sg-indep');
      if (valorRecuperado) {
        // SE VALÑIDA USUARIO Y TOKEN
        console.log('Valor de la cookie:', valorRecuperado);
        return true;
      }else{
        this.router.navigateByUrl('/auth/login');
        return false;
      }
  }
  
}
