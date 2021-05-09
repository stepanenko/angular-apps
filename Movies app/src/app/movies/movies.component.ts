import { Component, OnInit } from '@angular/core';

class Movie {
  id: number;
  title: string;
  year: number;

  constructor(id, title, year) {
    this.id = id;
    this.title = title;
    this.year = year;
  }
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  id;
  movies: Movie[] = [
    { id: 1, title: "Avengers", year: 2016 },
    { id: 2, title: "Thor", year: 2017 },
    { id: 3, title: "Doctor Strange", year: 2018 },
    { id: 4, title: "Forrest Gump", year: 2006 }
  ];

  constructor() { }

  ngOnInit() {
  }

  addMovie(title, year) {
    if (title == null) return;
    this.id = this.movies.length + 1;
    this.movies.push(new Movie(this.id, title, year));
  }

  delete(id) {
    if (id == null) return;
    const index = this.movies.findIndex(movie => movie.id == id);
    if (index > - 1) {
      this.movies.splice(index, 1);
    }
  }

  editMovie(id, title, year) {
    if (id == null) return;
    const index = this.movies.findIndex(movie => movie.id == id);
    if (index > -1) {
      this.movies[index].title = title;
      this.movies[index].year = year;
    }
  }
}
