import { Component } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { DatabaseService } from '../shared/services/db.service';
import { switchMap, map, take  } from 'rxjs/operators';
import { AuthenticationService } from '../auth/authentication.service';
import { first } from 'lodash/fp';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  courseInfo: {};
  private defaultSelected = 0;

  isAdmin$ = this.authentificationService.isAdmin$;

  teachers$ = this.db.fetchTeachers();

  teacherId$ = this.authentificationService.user$
  .pipe(
    map(({uid}) => uid)
  );

  courses$ = this.teacherId$.pipe(
    switchMap(id => this.db.fetchCoursesByTeacher(id)),
  );

  selectedCourse$ = new Subject<any>();

  preSelectedCourse$ = merge(
    this.selectedCourse$,
    this.courses$.pipe(take(1), map(first))
  );

  info$ = this.preSelectedCourse$.pipe(
    switchMap(({id}) => this.db.fetchCourseMarks(id))
  );

  constructor(
    private db: DatabaseService,
    private authentificationService: AuthenticationService
  ) { }

  selectTeacher(id) {
    this.courses$ = this.db.fetchCoursesByTeacher(id);
  }

  changeCourse(course) {
    this.selectedCourse$.next(course);
    this.courseInfo = course;
  }

  performanceChange(student) {
    this.db.setStudentMark(student, this.courseInfo);
  }
}
