import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatosSesion } from 'src/app/models/datosSesion.model';
import { DatosSesionService } from 'src/app/services/datos-sesion/datos-sesion.service';

@Component({
  selector: 'sg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  datos!:DatosSesion;
  nombreCookie: string = 'sg-indep';

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private datosSesionService: DatosSesionService
  ) {

  }

  
  ngOnInit() {
    this.createForm();
  }

  crearSesion(){
    this.datosSesionService.setDatosUsuarioSubject = {
      idUsuario: 1,
      nombreUsuario: 'miguel@hotmail.com',
      nombre: 'Miguel Angel Espinoza Sosa',
      rol: 'Admin',
      menu: [],
      token: '123456',
    };

    localStorage.setItem(this.nombreCookie, "1");

  }

  createForm() {
    this.loginForm = new FormGroup({
      usuario: new FormControl(),
      password: new FormControl(),
    });
  }

  reset(){
    this.router.navigateByUrl('/auth/resetpass');
  }

  regis(){
    this.router.navigateByUrl('/auth/registroUsuario');
  }

  login() {

    const data = {
      user: this.loginForm.get('usuario')?.value,
      pass: this.loginForm.get('password')?.value,
    };

    //this.toastrService.success('Inicio de seción corracta');
    // this.toastrService.info('MENSAJE COMPLETO 2','TITULO');
    // this.toastrService.warning('MENSAJE COMPLETO3 ','TITULO');
    // this.toastrService.error('MENSAJE COMPLETO34 ','TITULO');
   
    if (data.user != '' && data.pass != '') {
       this.crearSesion();
      this.toastrService.success('Inicio de seción corracta');
      this.router.navigate(['/content/solicitudes']);
    } else {
      this.toastrService.error('Todos los campos son obligatorios',"Error al iniciar sesíon");
    }

  }


}
