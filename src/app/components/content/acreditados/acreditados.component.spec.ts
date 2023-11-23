import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienesSusceptiblesComponent } from './bienes-susceptibles.component';

describe('BienesSusceptiblesComponent', () => {
  let component: BienesSusceptiblesComponent;
  let fixture: ComponentFixture<BienesSusceptiblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienesSusceptiblesComponent]
    });
    fixture = TestBed.createComponent(BienesSusceptiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
