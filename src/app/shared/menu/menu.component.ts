import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosSesionService } from 'src/app/services/datos-sesion/datos-sesion.service';

@Component({
  selector: 'sg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  nombreCookie: string = 'sg-indep';
  isDropdownSalir: boolean = false;
  isDropdownAdmin: boolean = false;

  isDropdownToggler: boolean = false;

  constructor(private router: Router,
    public datosSesionService: DatosSesionService
  ){
  }
  
  logout(){
    let datos = {
      idUsuario: null,
      nombreUsuario: null,
      nombre: null,
      rol: null,
      menu: [],
      token: null,
    }
    this.datosSesionService.setDatosUsuarioSubject = datos;
    localStorage.removeItem("sg-indep");
    this.router.navigate(['/auth/login']);
  }

  showDropdownToggler() {
    this.isDropdownToggler = this.isDropdownToggler? false: true;
  }


  showDropdownSalir() {
    this.isDropdownSalir = this.isDropdownSalir? false: true;
  }

  hideDropdownSalir() {
    this.isDropdownSalir = false;
  }


  showDropdownAdmin() {
    this.isDropdownAdmin = this.isDropdownAdmin? false: true;
  }

  hideDropdownAdmin() {
    this.isDropdownAdmin = false;
  }
}
