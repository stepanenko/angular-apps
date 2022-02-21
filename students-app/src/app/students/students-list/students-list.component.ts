
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StudentsService } from '../students.service';
import { Student } from '../models/student.interface';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Observable<Student[]>;
  topStudent: Student;
  selectedStudent: Student;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
    this.getStudent(2);
    this.studentsService.getStudents()
      .subscribe(list => this.selectedStudent = list[0]);
  }

  getStudents() {
    this.students = this.studentsService.getStudents();
      // .subscribe(students => this.students = students); // or use async pipe in html to render result data
  }

  getStudent(id) {
    this.studentsService.getStudent(id)
      .subscribe(oneStudent => this.topStudent = oneStudent);
  }

  selectStudent(student) {
    this.selectedStudent = student;
  }
}
