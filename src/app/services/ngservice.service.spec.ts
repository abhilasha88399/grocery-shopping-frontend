import { TestBed } from '@angular/core/testing';

import { NgserviceService } from './ngservice.service';

describe('NgserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgserviceService = TestBed.get(NgserviceService);
    expect(service).toBeTruthy();
  });
});
