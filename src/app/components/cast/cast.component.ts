import { Component, OnInit } from '@angular/core';
import { Cast } from '../../models/Cast';
import { CastService } from '../../services/cast.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  cast: Cast;
  movie: Movie;

  constructor(   
    private movieService: MovieService,
    private castService: CastService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getMovie(id);
      this.getCast(id);
      
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
