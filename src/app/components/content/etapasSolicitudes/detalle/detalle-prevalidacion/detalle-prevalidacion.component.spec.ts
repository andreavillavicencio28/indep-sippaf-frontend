import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePrevalidacionComponent } from './detalle-prevalidacion.component';

describe('DetallePrevalidacionComponent', () => {
  let component: DetallePrevalidacionComponent;
  let fixture: ComponentFixture<DetallePrevalidacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePrevalidacionComponent]
    });
    fixture = TestBed.createComponent(DetallePrevalidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
