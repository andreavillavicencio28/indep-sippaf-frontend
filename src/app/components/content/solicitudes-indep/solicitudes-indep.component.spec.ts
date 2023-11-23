import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesIndepComponent } from './solicitudes-indep.component';

describe('SolicitudesIndepComponent', () => {
  let component: SolicitudesIndepComponent;
  let fixture: ComponentFixture<SolicitudesIndepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudesIndepComponent]
    });
    fixture = TestBed.createComponent(SolicitudesIndepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
