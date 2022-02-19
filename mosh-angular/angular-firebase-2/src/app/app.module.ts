import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCljYhi627MS5R7xpm05_i-nm_ssyWuI0E',
  authDomain: 'mosh-advanced.firebaseapp.com',
  databaseURL: 'https://mosh-advanced.firebaseio.com',
  projectId: 'mosh-advanced',
  storageBucket: 'mosh-advanced.appspot.com',
  messagingSenderId: '365888579899'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
