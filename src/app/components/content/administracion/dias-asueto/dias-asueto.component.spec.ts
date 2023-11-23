import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasAsuetoComponent } from './dias-asueto.component';

describe('DiasAsuetoComponent', () => {
  let component: DiasAsuetoComponent;
  let fixture: ComponentFixture<DiasAsuetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiasAsuetoComponent]
    });
    fixture = TestBed.createComponent(DiasAsuetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
