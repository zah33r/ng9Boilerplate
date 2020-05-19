import { TestBed, async, inject } from '@angular/core/testing';

import { AppMasterGuard } from './app-master.guard';

describe('AppMasterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppMasterGuard]
    });
  });

  it('should ...', inject([AppMasterGuard], (guard: AppMasterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
