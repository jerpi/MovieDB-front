import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Movie} from "../models/movie";

@Injectable()
export class MovieService {

  movieUrl = 'movies/movies.json';

  constructor(
    private http: HttpClient
  ) { }

  getMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl);
  }
}
