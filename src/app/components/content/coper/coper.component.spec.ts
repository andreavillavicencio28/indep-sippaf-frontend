import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoperComponent } from './coper.component';

describe('CoperComponent', () => {
  let component: CoperComponent;
  let fixture: ComponentFixture<CoperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoperComponent]
    });
    fixture = TestBed.createComponent(CoperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
