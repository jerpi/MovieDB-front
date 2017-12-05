import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from '../models/Movie';

@Injectable()
export class MovieService {

  movieUrl = 'examples/movies.json';
  constructor(
    private http: HttpClient
  ) { }

  /** GET movies from the server */
  getMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl);
  }
}
