import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sg-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss']
})
export class PaginadorComponent {
  noPageActual: number = 1;
  totalPages: number = 0;
  totalRows: number = 0;
  itemsPage: number = 10;

  regInicial: number = 0;
  regFinal: number = 0;

  primero: boolean = true;
  atras:boolean = true;
  siguiente:boolean = true;
  ultimo:boolean = true;

  @Output() cambioRealizado = new EventEmitter<any>();
  @Input() listaDatos:any [] = [];
  @Input() propiedades:any;

  // lista:any[] = [];

  constructor() {
      this.AsignaPaginador();
  }

  AsignaPaginador(){
    if (this.listaDatos.length > 0){
      this.noPageActual = this.propiedades.page?parseInt(this.propiedades.page,10):0;
      this.totalPages = this.propiedades.pageCount?this.propiedades.pageCount:0;
      this.itemsPage = this.itemsPage;
      this.totalRows = this.propiedades.itemsCount?this.propiedades.itemsCount:0;

      this.regInicial = ((this.itemsPage * this.noPageActual)  - this.itemsPage) + 1;
      this.regFinal = (this.itemsPage * this.noPageActual) > this.totalRows? this.totalRows: (this.itemsPage * this.noPageActual);

      if(this.totalPages == 1){
        this.primero = false;
        this.atras = false;
        this.siguiente = false;
        this.ultimo = false;
      }else{
        if(this.noPageActual == 1){
          this.primero = false;
          this.atras = false;
          this.siguiente = true;
          this.ultimo = true;
        }else if(this.noPageActual == this.totalPages){
          this.primero = true;
          this.atras = true;
          this.siguiente = false;
          this.ultimo = false;
        }else{
          this.primero = true;
          this.atras = true;
          this.siguiente = true;
          this.ultimo = true;
        }
      }
     
    }else{
      this.primero = false;
      this.atras = false;
      this.siguiente = false;
      this.ultimo = false;
      this.noPageActual = 0;
      this.totalPages = 0;
      this.itemsPage = 10;
      this.totalRows = 0;

      this.regInicial = 0;
      this.regFinal = 0;
    }
  }

  ngOnChanges(changes: any) {
      // this.lista = changes.listaDatos.currentValue;
      // this.propiedades = changes.propiedades.currentValue;
      this.AsignaPaginador();
  }
  
  Paginador(accion:any){
    switch (accion) {
      case 1:
        this.noPageActual = 1;
        break;
      case 2:
        this.noPageActual -= 1;
        break;
      case 3:
        this.noPageActual += 1;
        break;
      case 4:
        this.noPageActual = this.totalPages ;
        break;
      default:
        break;
    }
    this.cambioRealizado.emit({noPage: this.noPageActual, itemsPage: this.itemsPage});
   }

   CambioPaginador(){
    this.noPageActual = 1;
    this.cambioRealizado.emit({noPage: this.noPageActual, itemsPage: this.itemsPage});
   }
}
