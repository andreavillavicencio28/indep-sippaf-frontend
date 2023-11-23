import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaDelBienComponent } from './propuesta-del-bien.component';

describe('PropuestaDelBienComponent', () => {
  let component: PropuestaDelBienComponent;
  let fixture: ComponentFixture<PropuestaDelBienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropuestaDelBienComponent]
    });
    fixture = TestBed.createComponent(PropuestaDelBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
