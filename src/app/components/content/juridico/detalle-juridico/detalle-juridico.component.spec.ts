import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleJuridicoComponent } from './detalle-juridico.component';

describe('OpinionTecnicaComponent', () => {
  let component: DetalleJuridicoComponent;
  let fixture: ComponentFixture<DetalleJuridicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleJuridicoComponent]
    });
    fixture = TestBed.createComponent(DetalleJuridicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
