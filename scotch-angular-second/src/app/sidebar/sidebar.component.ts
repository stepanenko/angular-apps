import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="side">
      <a routerLink="dashboard">Dashboard</a><br/>
      <a routerLink="students">Students</a><br/>
      <a routerLink="tasks">Tasks</a><br/>
      <a routerLink="admin">Admin</a>
    </div>
  `,
  styles: [`
  .side {
    padding: 20px;
    width: 200px;
    height: 500px;
    background: #5f9757;
    font-weight: 600;
  }
  a {
    font-size: 2em;
  }
  `]
})
export class SidebarComponent {

}
