import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSaeogComponent } from './detalle-saeog.component';

describe('DetalleSaeogComponent', () => {
  let component: DetalleSaeogComponent;
  let fixture: ComponentFixture<DetalleSaeogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleSaeogComponent]
    });
    fixture = TestBed.createComponent(DetalleSaeogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
