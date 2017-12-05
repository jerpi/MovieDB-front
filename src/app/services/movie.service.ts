import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from '../models/movie';

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
