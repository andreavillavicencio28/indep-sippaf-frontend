import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaedgComponent } from './saedg.component';

describe('SaedgComponent', () => {
  let component: SaedgComponent;
  let fixture: ComponentFixture<SaedgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaedgComponent]
    });
    fixture = TestBed.createComponent(SaedgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
