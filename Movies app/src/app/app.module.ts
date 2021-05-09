import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { CoreModule } from './core/core.module';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { CarsComponent } from './cars/cars.component';
import { CarsService } from './cars.service';
import { AutoComponent } from './auto/auto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    UsersComponent,
    CarsComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    UserService,
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
