import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shop',
  templateUrl: 'users.component.html',
  styleUrls: []
})
export class UsersComponent implements OnInit{
  users;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();

    // this.userService
    //   .getUsers()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.users = data;
    //   })
  }

}