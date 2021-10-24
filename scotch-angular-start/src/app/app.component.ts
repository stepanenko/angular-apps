
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Hello';
  users: User[] = [
    { id: 24, name: 'Sergio', username: 'stepserg' },
    { id: 12, name: 'Trom', username: 'trom' },
    { id: 31, name: 'Holly', username: 'hollybout' },
    { id: 5, name: 'Jack', username: 'jackie344' }
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }

}
