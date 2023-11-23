import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonComponent } from './buzon.component';

describe('BuzonComponent', () => {
  let component: BuzonComponent;
  let fixture: ComponentFixture<BuzonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuzonComponent]
    });
    fixture = TestBed.createComponent(BuzonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
