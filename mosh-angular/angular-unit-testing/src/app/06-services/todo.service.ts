
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}

  add(todo): Observable<any> {
    return this.http.post('...', todo).pipe(
      map(r => r));
  }

  getTodos() {
    return this.http.get('...').pipe(
      map(r => r));
  }

  delete(id) {
    return this.http.delete('...').pipe(
      map(r => r));
  }

}
