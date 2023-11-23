import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombramientoComponent } from './nombramiento.component';

describe('NombramientoComponent', () => {
  let component: NombramientoComponent;
  let fixture: ComponentFixture<NombramientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NombramientoComponent]
    });
    fixture = TestBed.createComponent(NombramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
