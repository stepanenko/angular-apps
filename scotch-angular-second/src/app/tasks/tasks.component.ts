import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  template: `
    <div class="tasks">
      <h1>Im a Tasks Component</h1>
    </div>
  `,
  styles: [`
    .tasks {
      background: purple;
      padding: 20px;
      width: 100%;
      height: 500px;
    }
  `]
})
export class TasksComponent {}
