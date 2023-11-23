import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosInternosComponent } from './usuarios-internos.component';

describe('UsuariosInternosComponent', () => {
  let component: UsuariosInternosComponent;
  let fixture: ComponentFixture<UsuariosInternosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosInternosComponent]
    });
    fixture = TestBed.createComponent(UsuariosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
