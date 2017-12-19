import { Component, OnInit, Input } from '@angular/core';
import {Movie} from "../../../../models/movie";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input()
  movie: Movie;

  get poster() {
    return 'https://image.tmdb.org/t/p/w300/' + this.movie.poster_path;
  }

}
