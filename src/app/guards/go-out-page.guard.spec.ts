import { TestBed } from '@angular/core/testing';

import { GoOutPageGuard } from './go-out-page.guard';

describe('GoOutPageGuard', () => {
  let guard: GoOutPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoOutPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
