import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraprestacionComponent } from './contraprestacion.component';

describe('ContraprestacionComponent', () => {
  let component: ContraprestacionComponent;
  let fixture: ComponentFixture<ContraprestacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContraprestacionComponent]
    });
    fixture = TestBed.createComponent(ContraprestacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
