import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAcreditadoComponent } from './detalle-acreditado.component';

describe('DetalleAcreditadoComponent', () => {
  let component: DetalleAcreditadoComponent;
  let fixture: ComponentFixture<DetalleAcreditadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleAcreditadoComponent]
    });
    fixture = TestBed.createComponent(DetalleAcreditadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
