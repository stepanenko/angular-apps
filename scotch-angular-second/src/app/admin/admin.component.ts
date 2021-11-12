import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <div class="admin">
      <h1>Im an Admin Component</h1>
    </div>
  `,
  styles: [`
    .admin {
      background: pink;
      width: 100%;
      height: 500px;
      padding: 20px;
    }
  `]
})
export class AdminComponent {}
