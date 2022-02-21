
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Student } from './models/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private url: string = './assets/samplejson/students.json';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  getStudent(id): Observable<Student> {
    return this.http.get<Student[]>(this.url)
      .pipe(map(data => data.find(x => x.id === id)));
  }
}
