import { Component, OnInit } from '@angular/core';

import { MovieService} from '../../../services/movie.service';
import {Movie} from '../../../models/Movie';

@Component({
  selector: 'app-movie-showcase',
  templateUrl: './movie-showcase.component.html',
  styleUrls: ['./movie-showcase.component.css']
})
export class MovieShowcaseComponent implements OnInit {

  movies: Array<Movie>;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

}
