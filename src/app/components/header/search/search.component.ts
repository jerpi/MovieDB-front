import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {FormControl} from "@angular/forms";
import {distinctUntilChanged, debounceTime} from "rxjs/operators";
import {Movie} from "../../../models/movie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl = new FormControl();
  movies: Movie[];
  loading: boolean;

  constructor(
    private movieService: MovieService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.searchControl
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
      ).subscribe((item) => {
        this.loading = true;
        this.movieService
          .getMovies({ title: item })
          .subscribe(movies => {
            this.movies = movies;
            this.loading = false;
          });
    });
    this.router.events.subscribe(
      res => {
        this.movies = [];
      }
    );
  }

}
