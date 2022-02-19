
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cuisinesRef: AngularFireList<any[]>; // to use a PUSH method on it later
  restaurantsRef: AngularFireList<any[]>;
  cuisines;
  restaurants: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {

    this.cuisinesRef = this.db.list('cuisines'); // will need async pipe in html
    this.cuisines = this.cuisinesRef.snapshotChanges().pipe(
      map(cuisines => {
        console.log('SnapshotChanges: ', cuisines);
        return cuisines;
      })
    );

    this.restaurantsRef = this.db.list('restaurants');
    this.restaurants = this.restaurantsRef.valueChanges().pipe(
      map(restaurants => {
        console.log('Before Map', restaurants);
        return restaurants;
      }));

  }

}
