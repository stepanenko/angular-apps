import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  title = 'The List of Courses';
  courses;
  isActive = true;
  canSave = false;
  mail;

  constructor(private service: CoursesService) {
    this.courses = service.getCourses();
  }

  onClick() {
    console.log('Clicked');
  }

  enter(email) {
    console.log(email);
  }

  twoway() {
    console.log(this.mail);
  }

  delete(course) {
    this.service.delete(course);
  }

  add() {
    this.service.add();
  }
}
