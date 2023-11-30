import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAtencionComponent } from './detalle-atencion.component';
 
describe('DetalleAtencionComponent', () => {
  let component: DetalleAtencionComponent;
  let fixture: ComponentFixture<DetalleAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleAtencionComponent]
    });
    fixture = TestBed.createComponent(DetalleAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
