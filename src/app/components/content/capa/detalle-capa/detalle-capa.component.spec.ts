import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCapaComponent } from './detalle-capa.component';

describe('OpinionTecnicaComponent', () => {
  let component: DetalleCapaComponent;
  let fixture: ComponentFixture<DetalleCapaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCapaComponent]
    });
    fixture = TestBed.createComponent(DetalleCapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
