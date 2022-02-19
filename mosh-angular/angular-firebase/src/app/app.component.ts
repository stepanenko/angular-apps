import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  author;
  courses: Observable<any[]>;
  coursesList: Observable<any>;
  coursesRef: AngularFireList<any>;
  authorsRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {

    this.courses = db.list('courses').valueChanges();
    this.coursesRef = db.list('courses'); // this is created to be able to use "push"
    this.coursesList = db.list('courses').snapshotChanges();

    this.author = db.object('authors/1').valueChanges()
      .subscribe((data) => this.author = data); // works but its not recommended to use "subscribe"

    this.authorsRef = db.object('authors');
    this.authorsRef.snapshotChanges().subscribe(action => {
      console.log(action.type); // value
      console.log(action.key); // authors
      console.log(action.payload.val()); // object content
    });

      // this.item.subscribe(res => console.log(res)); // will log "course1"
    }

  add(course) {
    this.coursesRef.push(course.value);
    console.log(`${course.value} was added to database`);
    course.value = '';
  }

  update(co) {
    // console.log(co); // a big snapshot object will be logged
    // this.db.object('courses/' + co.key).set(co.payload.val() + ' UPDATED'); // the UPDATED will be added to initial value
    this.db.object('courses/' + co.key)
      .update({
        title: 'new course',
        price: 120,
        isLive: false
      });
  }

  delete(co) {
    this.db.object('courses/' + co.key)
      .remove()
      .then(x => console.log('DELETED'));
  }

}
