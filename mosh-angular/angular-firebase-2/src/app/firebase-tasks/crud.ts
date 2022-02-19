
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cuisinesRef: AngularFireList<any>; // to use a PUSH method on it later
  cuisines;
  cui;
  restaurant;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {

    this.cuisinesRef = this.db.list('cuisines'); // will need async pipe in html
    this.cuisines = this.cuisinesRef.valueChanges();

    // this.db.list('cuisines').valueChanges()
      // .subscribe(x => this.cuisines = x); // will NOT need async pipe in html (not recommended)

    this.cui = this.db.list('cuisines').snapshotChanges();

    this.restaurant = this.db.object('restaurant').valueChanges();

  }

  add() {
    this.cuisinesRef.push({ name: 'Asian' }); // an array can also be pushed e.g. ['Asian']
  }

  // Not Destructive Update:
  update() {
    this.db.object('restaurant').update({
      name: 'New Name',
      rating: 5
    });
  }

  // Destructive Update or Adding:
  // Useful to create an object without unique FB key
  updateOrAdd() {
    // this.db.object('favourites/1/10').set(true);
    this.db.object('favourites/1/10').set(null); // set null - to remove an object 'favourites'
  }

  remove() {
    this.db.object('city').remove()
      .then(x => console.log('DELETED'))
      .catch(error => console.log('ERROR', error)); // because .remove returns a Promise
  }

}
