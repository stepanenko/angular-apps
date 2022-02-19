
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  restaurantsRef: AngularFireList<any>;
  restaurants: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {

    this.restaurantsRef = this.db.list('restaurants');
    this.restaurants = this.restaurantsRef.valueChanges();

    this.restaurantsRef.push({ name: ''})
      .then(x => {

        const restaurant = { name: 'My New Restaurant' };
        const update = {};

        update['restaurants/' + x.key] = restaurant;
        update['restaurants-by-city/camberwell/' + x.key] = restaurant;
        // update['restaurants/' + x.key] = null; // ' = null ' to delete an object
        // update['restaurants-by-city/camberwell/' + x.key] = null; // ' = null ' to delete an object

        this.db.object('/').update(update);
        console.log('Updated with ID: ', x.key);

      });

  }

}
