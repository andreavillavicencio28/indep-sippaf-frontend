import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatosSesion } from 'src/app/models/datosSesion.model';

@Injectable({
  providedIn: 'root'
})

export class DatosSesionService {

  private datosUsuario: BehaviorSubject<DatosSesion> = new BehaviorSubject<DatosSesion>({
    idUsuario: null,
    nombreUsuario: null,
    nombre: null,
    rol: null,
    menu: [],
    token: null,
  });
  
  constructor( private router: Router){

    const valorRecuperado = localStorage.getItem('sg-indep');
    console.log(valorRecuperado);
    if (valorRecuperado) {
      console.log('Valor de la cookie:', valorRecuperado);

      this.setDatosUsuarioSubject = {
        idUsuario: 1,
        nombreUsuario: 'miguel@hotmail.com',
        nombre: 'Miguel Angel Espinoza Sosa',
        rol: 'Admin',
        menu: [],
        token: '123456',
      };
    }

    // this.router.navigate(['/content/inicio']);
  }

  get datosUsuarioSubject$(): Observable<DatosSesion>{
    return this.datosUsuario.asObservable();
  }

  set setDatosUsuarioSubject(NewValue: DatosSesion){
    this.datosUsuario.next(NewValue);
  }
}
