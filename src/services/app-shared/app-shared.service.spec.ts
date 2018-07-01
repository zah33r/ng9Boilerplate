import { TestBed, inject } from '@angular/core/testing';

import { AppSharedService } from './app-shared.service';

describe('AppSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSharedService]
    });
  });

  it('should be created', inject([AppSharedService], (service: AppSharedService) => {
    expect(service).toBeTruthy();
  }));
});
