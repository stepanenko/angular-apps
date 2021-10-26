
import { Component, Input } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-profile',
  template: `
    <h2>Student Profile</h2>
    <div *ngIf="student">
      <h3>{{ student.name + ' ' + student.surname }}</h3>
    </div> `
})
export class StudentProfileComponent {
  @Input() student: Student;

}
