import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPerfilesComponent } from './rolesPerfiles.component';

describe('JuridicoComponent', () => {
  let component: RolesPerfilesComponent;
  let fixture: ComponentFixture<RolesPerfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolesPerfilesComponent]
    });
    fixture = TestBed.createComponent(RolesPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
