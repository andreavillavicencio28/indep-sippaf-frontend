import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiarafComponent } from './siaraf.component';

describe('SiarafComponent', () => {
  let component: SiarafComponent;
  let fixture: ComponentFixture<SiarafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiarafComponent]
    });
    fixture = TestBed.createComponent(SiarafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
