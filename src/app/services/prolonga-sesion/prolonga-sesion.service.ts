import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProlongaSesionComponent } from 'src/app/shared/prolonga-sesion/prolonga-sesion.component';

@Injectable({
  providedIn: 'root'
})
export class ProlongaSesionService {
  public contadorSegundos = 0;
  public intervalo: any;
  public idleTimeout = 1200;
  intervalos: any[] = [];

  constructor( private modal:NgbModal,
    private config: NgbModalConfig,
    private router: Router) {
      this.config.backdrop = 'static';
      this.config.keyboard = false;
  
      window.onclick = () => {
        this.contadorSegundos = 0;
        this.quitarIntervalos();
      };
      window.onmousemove = () => {
        this.contadorSegundos = 0;
        this.quitarIntervalos();
      };
      window.onkeydown = () => {
        this.contadorSegundos = 0;
        this.quitarIntervalos();
      };
      this.iniciarIntervalo();
     }


     public iniciarIntervalo(): void {
      this.intervalo = setInterval(() => this.checkIdleTime(), 1000);
      this.intervalos.push(this.intervalo);
      this.quitarIntervalos();
    }
  
    quitarIntervalos(): void {
      this.intervalos.filter(item => item !== this.intervalo).forEach(int => clearInterval(int));
    }
  
    private checkIdleTime(): void {
      this.contadorSegundos++;
      if (this.contadorSegundos >= this.idleTimeout) {
        console.log('se termino el tiempo de sesion');
        clearInterval(this.intervalo);
        // lanzar alerta para continuar con la sesion
        const modalref = this.modal.open(ProlongaSesionComponent);
  
        modalref.result.then((result) => {
            if(result === 'extender'){
              this.contadorSegundos = 0;
              this.iniciarIntervalo();
            }else{
              this.logout();
            }
        });
      }
    }

    private logout(): void {
      localStorage.removeItem("sg-indep");
      window.sessionStorage.clear();
      this.router.navigateByUrl('/auth/login');
  
    }
}
