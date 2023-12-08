import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCoperComponent } from './detalle-coper.component';

describe('OpinionTecnicaComponent', () => {
  let component: DetalleCoperComponent;
  let fixture: ComponentFixture<DetalleCoperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCoperComponent]
    });
    fixture = TestBed.createComponent(DetalleCoperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
