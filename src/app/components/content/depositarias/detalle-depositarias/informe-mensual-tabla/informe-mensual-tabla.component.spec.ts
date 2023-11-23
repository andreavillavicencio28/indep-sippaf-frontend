import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeMensualTablaComponent } from './informe-mensual-tabla.component';

describe('InformeMensualTablaComponent', () => {
  let component: InformeMensualTablaComponent;
  let fixture: ComponentFixture<InformeMensualTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeMensualTablaComponent]
    });
    fixture = TestBed.createComponent(InformeMensualTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
