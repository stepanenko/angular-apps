import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { map, filter, tap } from 'rxjs/operators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authenticationService.user$.pipe(
      map(user => user && this.authenticationService.canRead(user)),
      tap(ok => !ok && this.router.navigate(['/login']))
    );
  }
}
