import { TestBed } from '@angular/core/testing';

import { CheckAdminSigninGuard } from './check-admin-signin.guard';

describe('CheckAdminSigninGuard', () => {
  let guard: CheckAdminSigninGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckAdminSigninGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
