import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBitacoraComponent } from './detalle-bitacora.component';

describe('DetalleBitacoraComponent', () => {
  let component: DetalleBitacoraComponent;
  let fixture: ComponentFixture<DetalleBitacoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleBitacoraComponent]
    });
    fixture = TestBed.createComponent(DetalleBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
