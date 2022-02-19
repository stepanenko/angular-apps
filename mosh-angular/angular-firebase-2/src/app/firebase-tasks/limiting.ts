
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  restaurantsRef: AngularFireList<any[]>;
  restaurants: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {

    this.restaurantsRef = this.db.list('restaurants', ref => {
      // return ref.orderByChild('rating').equalTo(5).limitToFirst(1); // limits to first 1 element with rating equals to '5'
      return ref.orderByChild('rating').equalTo(5).limitToLast(1); // limits to last 1 element with rating equals to '5'
    });
    this.restaurants = this.restaurantsRef.valueChanges();

  }

}
