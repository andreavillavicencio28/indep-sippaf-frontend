import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAdminComponent } from './editar-admin.component';

describe('EditarAdminComponent', () => {
  let component: EditarAdminComponent;
  let fixture: ComponentFixture<EditarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAdminComponent]
    });
    fixture = TestBed.createComponent(EditarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
