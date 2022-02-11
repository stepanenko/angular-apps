import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authenticationService.isAdmin$.pipe(
      tap(isAdmin => !isAdmin && throwError('Access denied. Admins only'))
    );
  }
}
