import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solicitudes2Component } from './solicitudes2.component';

describe('Solicitudes2Component', () => {
  let component: Solicitudes2Component;
  let fixture: ComponentFixture<Solicitudes2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Solicitudes2Component]
    });
    fixture = TestBed.createComponent(Solicitudes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

