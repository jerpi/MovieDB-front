import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Cast } from '../models/cast';

@Injectable()
export class CastService {

  castUrl = 'examples/cast.json';
  constructor(
    private http: HttpClient
  ) { }

  getCast (): Observable<Cast[]> {
    return this.http.get<Cast[]>(this.castUrl);
  }
}
