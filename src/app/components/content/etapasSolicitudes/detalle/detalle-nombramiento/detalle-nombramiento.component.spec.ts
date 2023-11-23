import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNombramientoComponent } from './detalle-nombramiento.component';

describe('DetalleNombramientoComponent', () => {
  let component: DetalleNombramientoComponent;
  let fixture: ComponentFixture<DetalleNombramientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleNombramientoComponent]
    });
    fixture = TestBed.createComponent(DetalleNombramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
