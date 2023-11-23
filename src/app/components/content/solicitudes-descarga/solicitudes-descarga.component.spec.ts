import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesDescargaComponent } from './solicitudes-descarga.component';

describe('SolicitudesDescargaComponent', () => {
  let component: SolicitudesDescargaComponent;
  let fixture: ComponentFixture<SolicitudesDescargaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudesDescargaComponent]
    });
    fixture = TestBed.createComponent(SolicitudesDescargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
