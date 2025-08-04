import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { protectDashboardGuard } from './protect-dashboard-guard';

describe('protectDashboardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => protectDashboardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
