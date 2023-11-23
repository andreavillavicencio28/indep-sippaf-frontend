import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosExternosComponent } from './usuarios-externos.component';

describe('UsuariosExternosComponent', () => {
  let component: UsuariosExternosComponent;
  let fixture: ComponentFixture<UsuariosExternosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosExternosComponent]
    });
    fixture = TestBed.createComponent(UsuariosExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
