import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service'
import { ActivatedRoute } from "@angular/router";
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: number;
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.getMovie(this.id);
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

}
