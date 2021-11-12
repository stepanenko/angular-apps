import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="head">
    <h1>Im a Header Component</h1>
  </div>

  `,
  styles: [`
    .head {
      padding: 20px;
      width: 100%;
      height: 70px;
      background: green;
    }
  `]
})
export class HeaderComponent {

  constructor () {}

}
