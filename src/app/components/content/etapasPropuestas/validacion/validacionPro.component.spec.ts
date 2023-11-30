import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionProComponent } from './validacionPro.component';

describe('ValidacionProComponent', () => {
  let component: ValidacionProComponent;
  let fixture: ComponentFixture<ValidacionProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidacionProComponent]
    });
    fixture = TestBed.createComponent(ValidacionProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
