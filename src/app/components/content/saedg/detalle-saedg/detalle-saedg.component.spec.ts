import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSaedgComponent } from './detalle-saedg.component';

describe('DetalleSaedgComponent', () => {
  let component: DetalleSaedgComponent;
  let fixture: ComponentFixture<DetalleSaedgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleSaedgComponent]
    });
    fixture = TestBed.createComponent(DetalleSaedgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
