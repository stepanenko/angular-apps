
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cuisinesRef: AngularFireList<any[]>; // to use a PUSH method on it later
  restaurantsRef: AngularFireList<any[]>;
  cuisines: Observable<any[]>;
  restaurants: Observable<any[]>;
  exists;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {

    this.cuisinesRef = this.db.list('cuisines'); // will need async pipe in html
    this.cuisines = this.cuisinesRef.snapshotChanges();

    this.restaurantsRef = this.db.list('restaurants');
    this.restaurants = this.restaurantsRef.valueChanges();

    this.exists = this.db.object('restaurants/1/features/1').valueChanges().pipe(take(1));
    // use RxJS operator 'take' to end subscription after 1 change
    this.exists.subscribe(x => {
      x ? console.log('EXISTS') : console.log('NOT EXISTS');
    });

  }

}
