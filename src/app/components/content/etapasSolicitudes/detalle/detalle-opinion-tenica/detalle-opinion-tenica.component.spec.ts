import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOpinionTenicaComponent } from './detalle-opinion-tenica.component';

describe('DetalleOpinionTenicaComponent', () => {
  let component: DetalleOpinionTenicaComponent;
  let fixture: ComponentFixture<DetalleOpinionTenicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleOpinionTenicaComponent]
    });
    fixture = TestBed.createComponent(DetalleOpinionTenicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
