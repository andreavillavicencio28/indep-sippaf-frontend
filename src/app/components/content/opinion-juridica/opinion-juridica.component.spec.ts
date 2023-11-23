import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionJuridicaComponent } from './opinion-juridica.component';

describe('OpinionJuridicaComponent', () => {
  let component: OpinionJuridicaComponent;
  let fixture: ComponentFixture<OpinionJuridicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpinionJuridicaComponent]
    });
    fixture = TestBed.createComponent(OpinionJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
