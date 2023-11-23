import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEntregaBienComponent } from './detalle-entrega-bien.component';

describe('DetalleEntregaBienComponent', () => {
  let component: DetalleEntregaBienComponent;
  let fixture: ComponentFixture<DetalleEntregaBienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleEntregaBienComponent]
    });
    fixture = TestBed.createComponent(DetalleEntregaBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
