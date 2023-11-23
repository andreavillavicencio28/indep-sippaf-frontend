import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositariasComponent } from './depositarias.component';

describe('DepositariasComponent', () => {
  let component: DepositariasComponent;
  let fixture: ComponentFixture<DepositariasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositariasComponent]
    });
    fixture = TestBed.createComponent(DepositariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
