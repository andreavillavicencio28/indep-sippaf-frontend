import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPerfiles } from './rolesPerfiles.component';

describe('AtencionesComponent', () => {
  let component: RolesPerfiles;
  let fixture: ComponentFixture<RolesPerfiles>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesPerfiles]
    });
    fixture = TestBed.createComponent(RolesPerfiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
