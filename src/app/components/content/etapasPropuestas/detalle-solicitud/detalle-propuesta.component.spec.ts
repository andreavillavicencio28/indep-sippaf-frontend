import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePropuestaComponent } from './detalle-propuesta.component';

describe('DetalleSolicitudComponent', () => {
  let component: DetallePropuestaComponent;
  let fixture: ComponentFixture<DetallePropuestaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePropuestaComponent]
    });
    fixture = TestBed.createComponent(DetallePropuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
