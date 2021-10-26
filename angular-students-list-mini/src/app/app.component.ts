import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  students: Student[];
  activeStudent: Student;

  ngOnInit() {
    this.http.get('./assets/students.json')
      .subscribe((data) => {
        this.students = data as Student[];
      });
  }

  selectStudent(student) {
    this.activeStudent = student;
  }
}
