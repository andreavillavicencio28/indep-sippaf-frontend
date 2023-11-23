import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoObligacionesComponent } from './seguimiento-obligaciones.component';

describe('SeguimientoObligacionesComponent', () => {
  let component: SeguimientoObligacionesComponent;
  let fixture: ComponentFixture<SeguimientoObligacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientoObligacionesComponent]
    });
    fixture = TestBed.createComponent(SeguimientoObligacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
