import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArchivosComponent } from './admin-archivos.component';

describe('AdminArchivosComponent', () => {
  let component: AdminArchivosComponent;
  let fixture: ComponentFixture<AdminArchivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminArchivosComponent]
    });
    fixture = TestBed.createComponent(AdminArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
