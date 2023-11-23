import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoDetalleComponent } from './encabezado-detalle.component';

describe('EncabezadoDetalleComponent', () => {
  let component: EncabezadoDetalleComponent;
  let fixture: ComponentFixture<EncabezadoDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoDetalleComponent]
    });
    fixture = TestBed.createComponent(EncabezadoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
