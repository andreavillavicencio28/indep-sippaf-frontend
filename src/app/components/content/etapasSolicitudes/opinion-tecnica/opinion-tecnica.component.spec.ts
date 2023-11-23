import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionTecnicaComponent } from './opinion-tecnica.component';

describe('OpinionTecnicaComponent', () => {
  let component: OpinionTecnicaComponent;
  let fixture: ComponentFixture<OpinionTecnicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpinionTecnicaComponent]
    });
    fixture = TestBed.createComponent(OpinionTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
