import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBienComponent } from './detalle-bien.component';

describe('DetalleBienComponent', () => {
  let component: DetalleBienComponent;
  let fixture: ComponentFixture<DetalleBienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleBienComponent]
    });
    fixture = TestBed.createComponent(DetalleBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
