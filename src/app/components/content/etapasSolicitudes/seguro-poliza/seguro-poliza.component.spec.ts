import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroPolizaComponent } from './seguro-poliza.component';

describe('SeguroPolizaComponent', () => {
  let component: SeguroPolizaComponent;
  let fixture: ComponentFixture<SeguroPolizaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguroPolizaComponent]
    });
    fixture = TestBed.createComponent(SeguroPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
