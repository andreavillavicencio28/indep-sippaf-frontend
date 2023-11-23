import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemocionComponent } from './remocion.component';

describe('RemocionComponent', () => {
  let component: RemocionComponent;
  let fixture: ComponentFixture<RemocionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemocionComponent]
    });
    fixture = TestBed.createComponent(RemocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
