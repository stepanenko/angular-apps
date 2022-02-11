import { Component, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  name$ = this.authentificationService.user$.pipe(map(u => u.name));
  surname$ = this.authentificationService.user$.pipe(map(u => u.surname));
  photo$ = this.authentificationService.user$.pipe(map(u => u.img));

  @Input() onlineUsersCount;

  constructor(private authentificationService: AuthenticationService) { }

  onClickLogout() {
    this.authentificationService.logout();
  }
}
