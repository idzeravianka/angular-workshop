import { TestBed } from '@angular/core/testing';

import { CanSeeDescriptionGuard } from './can-see-description.guard';

describe('CanSeeDescriptionGuard', () => {
  let guard: CanSeeDescriptionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanSeeDescriptionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
