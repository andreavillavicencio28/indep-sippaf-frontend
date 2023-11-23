import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemocionSiniestroComponent } from './remocion-siniestro.component';

describe('RemocionSiniestroComponent', () => {
  let component: RemocionSiniestroComponent;
  let fixture: ComponentFixture<RemocionSiniestroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemocionSiniestroComponent]
    });
    fixture = TestBed.createComponent(RemocionSiniestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
