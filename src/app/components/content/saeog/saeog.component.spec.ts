import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaeogComponent } from './saeog.component';

describe('SaeogComponent', () => {
  let component: SaeogComponent;
  let fixture: ComponentFixture<SaeogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaeogComponent]
    });
    fixture = TestBed.createComponent(SaeogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
