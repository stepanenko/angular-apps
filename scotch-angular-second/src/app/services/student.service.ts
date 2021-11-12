
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  // private url = 'https://carsnode.herokuapp.com/api/cars';
  // cars: any;
  // getCars(): Observable<any> {
  //   console.log('Cars service okay...');
  //   return this.http.get(this.url);
  // }

  getStudents(): Observable<any> {
    console.log('Student service okay...');
    return this.http.get('./assets/students.json');
  }

}
