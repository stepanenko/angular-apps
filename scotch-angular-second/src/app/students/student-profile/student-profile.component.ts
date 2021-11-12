
import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-profile',
  template: `
    <div class="profile">
      <h2>Student Profile</h2>
      <div *ngIf="student">
        <h3>{{ student.name + ' ' + student.surname }}</h3>
      </div>
    </div>`,
    styles: [`
      .profile {
        background: #ca8638;
        padding: 20px;
        width: 600px;
      }
    `]
})
export class StudentProfileComponent {
  @Input() student: Student;

}
