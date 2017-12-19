import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../../../models/movie';

@Component({
  selector: 'app-movie-element',
  templateUrl: './movie-element.component.html',
  styleUrls: ['./movie-element.component.css']
})
export class MovieElementComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  get poster() {
    return 'https://image.tmdb.org/t/p/w185/' + this.movie.poster_path;
  }
}
