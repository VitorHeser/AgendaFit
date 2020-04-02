import { TestBed } from '@angular/core/testing';

import { PratododiaService } from './pratododia.service';

describe('PratododiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PratododiaService = TestBed.get(PratododiaService);
    expect(service).toBeTruthy();
  });
});
