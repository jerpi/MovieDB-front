import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  @Input()
  movie: Movie;

  get poster() {
    return 'https://image.tmdb.org/t/p/w300/' + this.movie.poster_path;
  }

  get date() {
    return new Date(this.movie.release_date);
  }
}
