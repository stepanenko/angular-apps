import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auto',
  templateUrl: 'auto.component.html',
  styleUrls: ['auto.component.css']
})
export class AutoComponent {
  autos: any;
  private url = 'https://carsnode.herokuapp.com/api/cars';

  constructor(private http: HttpClient) {
    http.get(this.url)
      .subscribe(response => {
          this.autos = response;
      });
  }

  addAuto(id, make, model, year) {
    const auto = {
      id: id.value,
      make: make.value,
      model: model.value,
      year: year.value
    };
    this.http.post(this.url, auto)
      .subscribe(response => {
        this.autos.push(auto);
        console.log(response);
      });
  }

  editAuto(id, make, model, year) {
    const auto = this.autos.find(auto => auto.id == id.value);
    auto.make = make.value;
    auto.model = model.value;
    auto.year = year.value;
    this.http.put(this.url + '/' + auto.id, auto)
      .subscribe(response => {
        console.log(response);
    });
  }

  deleteAuto(auto) {
    this.http.delete(this.url + '/' + auto.id)
      .subscribe(response => {
        let index = this.autos.indexOf(auto);
        this.autos.splice(index, 1);
        console.log(response);
      });
  }
}
