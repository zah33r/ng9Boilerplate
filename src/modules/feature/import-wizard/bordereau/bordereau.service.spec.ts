import { TestBed, inject } from '@angular/core/testing';

import { BordereauService } from './bordereau.service';

describe('BordereauService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BordereauService]
    });
  });

  it('should be created', inject([BordereauService], (service: BordereauService) => {
    expect(service).toBeTruthy();
  }));
});
