import { CanActivateFn } from '@angular/router';

export const protectDashboardGuard: CanActivateFn = (route, state) => {
  return false;
};
