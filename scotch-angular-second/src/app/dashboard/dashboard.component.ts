import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dash">
      <h1>Im a Dashboard Component</h1>
    </div>
  `,
  styles: [`
    .dash {
      background: red;
      padding: 20px;
      width: 100%;
      height: 500px;
    }
  `]
})
export class DashboardComponent {

}
