import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CastService } from '../../services/cast.service';
import { ActivatedRoute } from "@angular/router";
import { Movie } from '../../models/movie';
import { Cast } from '../../models/Cast';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: number;
  movie: Movie;
  cast: Cast;

  constructor(
    private movieService: MovieService,
    private castService: CastService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getMovie(this.id);
      this.getCast(this.id);
   });
  }

  getMovie(id: number): void {
    this.movieService
      .getMovies()
      .subscribe(movies => {
        const arr = movies.filter(movie => movie.id === id);
        this.movie = arr[0];
      });
  }

  getCast(id: number): void {
    this.castService
        .getCast()
        .subscribe(casts => {
          const arr = casts.filter(cast => cast.id === id);
          this.cast = arr[0];
        });
  }

}
