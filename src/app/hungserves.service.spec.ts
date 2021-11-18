import { TestBed } from '@angular/core/testing';

import { HungservesService } from './hungserves.service';

describe('HungservesService', () => {
  let service: HungservesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HungservesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
