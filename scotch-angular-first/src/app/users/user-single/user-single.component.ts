import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container">

        <div class="card" *ngIf="user">
          <img [src]="user.avatar_url">
          <h2> {{ user.login }} </h2>
        </div>

      </div>
    </section>
  `,
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  user;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    // grab the username out of the url
    this.route.params.subscribe((params) => {
      const username = params['username'];
      
      // use the userservice to get data from github api
      this.userService
        .getUser(username)
        .subscribe(user => this.user = user);
    });
    //const username = this.route.params.username;  // WILL NOT WORK!!!
  }
}
