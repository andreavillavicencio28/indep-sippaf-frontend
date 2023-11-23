import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevalidacionComponent } from './prevalidacion.component';

describe('PrevalidacionComponent', () => {
  let component: PrevalidacionComponent;
  let fixture: ComponentFixture<PrevalidacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevalidacionComponent]
    });
    fixture = TestBed.createComponent(PrevalidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
