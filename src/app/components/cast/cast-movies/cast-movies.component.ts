import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-cast-movies',
  templateUrl: './cast-movies.component.html',
  styleUrls: ['./cast-movies.component.css']
})
export class CastMoviesComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
