import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionNombramientoComponent } from './edicion-nombramiento.component';

describe('EdicionNombramientoComponent', () => {
  let component: EdicionNombramientoComponent;
  let fixture: ComponentFixture<EdicionNombramientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicionNombramientoComponent]
    });
    fixture = TestBed.createComponent(EdicionNombramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
