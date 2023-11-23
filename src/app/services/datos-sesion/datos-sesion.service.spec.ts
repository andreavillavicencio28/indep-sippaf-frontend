import { TestBed } from '@angular/core/testing';

import { DatosSesionService } from './datos-sesion.service';

describe('DatosSesionService', () => {
  let service: DatosSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
