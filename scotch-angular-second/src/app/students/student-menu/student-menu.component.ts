import { Component } from '@angular/core';

@Component({
  selector: 'app-student-menu',
  template: `
    <div class="stud-menu">
      <a routerLink="">Name</a>
      <a routerLink="">Phone</a>
      <a routerLink="">Address</a>
      <a routerLink="">Email</a>
    </div>`,
  styles: [`
    a {
      display: inline-block;
      padding: 5px;
      font-size: 24px;
    }
    .stud-menu {
      background: silver;
      height: 70px;
      width: 600px;
      padding: 20px;
    }
  `]
})
export class StudentMenuComponent {

}
