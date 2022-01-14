import { TestBed } from '@angular/core/testing';

import { PeacockCxsService } from './peacock-cxs.service';

describe('PeacockCxsService', () => {
  let service: PeacockCxsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeacockCxsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
