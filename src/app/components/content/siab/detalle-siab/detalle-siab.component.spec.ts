import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSiabComponent } from './detalle-siab.component';

describe('SiabComponent', () => {
  let component: DetalleSiabComponent;
  let fixture: ComponentFixture<DetalleSiabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleSiabComponent]
    });
    fixture = TestBed.createComponent(DetalleSiabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
