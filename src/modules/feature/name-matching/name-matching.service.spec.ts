import { TestBed, inject } from '@angular/core/testing';

import { NameMatchingService } from './name-matching.service';

describe('NameMatchingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameMatchingService]
    });
  });

  it('should be created', inject([NameMatchingService], (service: NameMatchingService) => {
    expect(service).toBeTruthy();
  }));
});
