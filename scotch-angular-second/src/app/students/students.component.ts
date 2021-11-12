
import { Component, OnInit } from '@angular/core';

import { StudentService } from '../services/student.service';
import { Student } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  activeStudent: Student;
  // cars;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
    // this.getCars();
  }

  // getCars(): void {
  //   this.studentService.getCars()
  //     .subscribe((cars) => this.cars = cars);
  // }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe((students) => this.students = students);
  }

  selectStudent(student) {
    this.activeStudent = student;
  }
}
