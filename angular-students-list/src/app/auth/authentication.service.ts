import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { User } from './user.interface';
import { AngularFirestore } from 'angularfire2/firestore';
import { map, switchMap, filter, shareReplay } from 'rxjs/operators';
import { ROLES } from './roles.config';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user$: Observable<User | null>;
  isAdmin$: Observable<boolean>;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => user
        ? this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        : of(null))
    );

    this.isAdmin$ = this.user$.pipe(
      map(user => user && user.roles.admin),
      map(Boolean)
    );
  }

  loginEmail(email: string, pass: string) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, pass));
  }

  getAuth() {
    return this.afAuth.authState;
  }

  logout() {
    this.router.navigate(['/login']);
    return this.afAuth.auth.signOut();
  }

  canRead(user: User): boolean {
    const allowed = [ROLES.admin, ROLES.teacher, ROLES.user];
    return this.checkAuthorization(user, allowed);
  }

  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    return !!allowedRoles.find(role => user.roles[role]);
  }
}
