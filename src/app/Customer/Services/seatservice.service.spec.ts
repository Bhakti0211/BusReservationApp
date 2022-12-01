import { TestBed } from '@angular/core/testing';

import { SeatserviceService } from './seatservice.service';

describe('SeatserviceService', () => {
  let service: SeatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
