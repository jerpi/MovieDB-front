import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CastService } from '../../services/cast.service';
import { ActivatedRoute } from "@angular/router";
import { Movie } from '../../models/movie';
import { Cast } from '../../models/cast';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;
  cast: Cast;

  constructor(
    private movieService: MovieService,
    private castService: CastService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getMovie(params['id']);
   });
  }

  getMovie(id: string): void {
    this.movieService
      .getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
      });
  }
}
