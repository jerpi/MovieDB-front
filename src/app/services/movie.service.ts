import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Movie} from "../models/movie";
import {handleError} from "./utils/handleError";
import {catchError} from "rxjs/operators";

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies(query?: any): Observable<Movie[]> { // TODO
    return this.http.get<Movie[]>('/api/movies/')
      .pipe(
        catchError(handleError<Movie[]>('getMovies', [])),
      );
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>('/api/movies/' + id)
      .pipe(
        catchError(handleError<Movie>('getMovie')),
      );
  }
}
