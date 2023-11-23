import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurpValidacionComponent } from './curp-validacion.component';

describe('CurpValidacionComponent', () => {
  let component: CurpValidacionComponent;
  let fixture: ComponentFixture<CurpValidacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurpValidacionComponent]
    });
    fixture = TestBed.createComponent(CurpValidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
