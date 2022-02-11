import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, shareReplay } from 'rxjs/operators';
import { map as _map } from 'lodash/fp';
import { map } from 'rxjs/operators';
import { Student } from 'src/app/shared/models/student.interface';
import { DatabaseService } from 'src/app/shared/services/db.service';

@Injectable()
export class StudentsService {

  selectedStudent$ = new ReplaySubject<any>(1);
  studentChange$ = this.selectedStudent$.pipe(
    map(student => student.id)
  );

  constructor(private db: DatabaseService) {}

    selectStudent(student) {
      this.selectedStudent$.next(student);
    }

    getPerformance(): Observable<any> {
      return this.selectedStudent$.pipe(
        switchMap(student => this.db.fetchStudentMarks(student.id))
      );
    }
}
