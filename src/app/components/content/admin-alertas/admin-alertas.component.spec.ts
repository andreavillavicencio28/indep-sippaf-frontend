import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlertasComponent } from './admin-alertas.component';

describe('AdminAlertasComponent', () => {
  let component: AdminAlertasComponent;
  let fixture: ComponentFixture<AdminAlertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAlertasComponent]
    });
    fixture = TestBed.createComponent(AdminAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

