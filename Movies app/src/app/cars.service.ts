import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private url = 'https://carsnode.herokuapp.com/api/cars';

  constructor(private http: HttpClient) {}

  getCars() {
    return this.http
      .get(this.url)
  }

  

}