
import { Component, Output, EventEmitter } from "@angular/core";
import { User } from 'src/app/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  newUser: User = new User();
  @Output() userCreated = new EventEmitter();

  onSubmit() {
    this.userCreated.emit({ user: this.newUser });

    this.newUser = new User();
  }
}
