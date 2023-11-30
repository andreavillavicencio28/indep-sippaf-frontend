import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSiarafComponent } from './detalle-siaraf.component';

describe('DetalleSiarafComponent', () => {
  let component: DetalleSiarafComponent;
  let fixture: ComponentFixture<DetalleSiarafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleSiarafComponent]
    });
    fixture = TestBed.createComponent(DetalleSiarafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
