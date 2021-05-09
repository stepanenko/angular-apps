import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http
      .get('https://api.github.com/users?per_page=12')
  }

  // getUsers() {
  //   return this.http.get(`${this.apiUrl}?per_page=12`);
  // }

  // getUser(username: string) {
  //   return this.http.get(`${this.apiUrl}/${username}`)
  // }
}