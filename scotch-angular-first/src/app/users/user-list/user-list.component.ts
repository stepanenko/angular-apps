import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <section class="section">
      <div class="container">
        <div class="columns is-multiline" *ngIf="users">
          <div class="column is-4" *ngFor="let user of users | async">

            <div class="card">
              <div class="card-content">
                <a routerLink="/users/{{ user.login }}">
                  {{ user.login }}
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();

    // The same but longer code:
    // this.userService.getUsers()
    //   .subscribe(users => {
    //     console.log(users);
    //     this.users = users;
    //   });
  }

}
