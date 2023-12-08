import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiabComponent } from './siab.component';

describe('SiabComponent', () => {
  let component: SiabComponent;
  let fixture: ComponentFixture<SiabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiabComponent]
    });
    fixture = TestBed.createComponent(SiabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
