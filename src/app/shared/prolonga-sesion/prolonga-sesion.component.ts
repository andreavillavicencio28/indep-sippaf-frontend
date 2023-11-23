import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbActiveModal , NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sg-prolonga-sesion',
  templateUrl: './prolonga-sesion.component.html',
  styleUrls: ['./prolonga-sesion.component.scss']
})
export class ProlongaSesionComponent {

  public progreso = 0;
  public cuenta = 100;
  public intervalo: any;


  constructor(public activeModal: NgbActiveModal){
    this.contador();
  }
  
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  private contador(): void {
    this.intervalo = setInterval(() => {
      this.incrementarIntervalo();
    }, 1000);
  }

  private incrementarIntervalo(): void {
    this.cuenta--;
    this.progreso++;
    if (this.cuenta <= 0) {
      clearInterval(this.intervalo);
      this.cancelar();
    }
  }

  public cancelar(): void {
    this.activeModal.close('no')
  }

  public extender(): void {
    clearInterval(this.intervalo);
    this.activeModal.close('extender')
  }


}
