import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRolesPerfilesComponent } from './detalle-rolesPerfiles.component';

describe('OpinionTecnicaComponent', () => {
  let component: DetalleRolesPerfilesComponent;
  let fixture: ComponentFixture<DetalleRolesPerfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleRolesPerfilesComponent]
    });
    fixture = TestBed.createComponent(DetalleRolesPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
