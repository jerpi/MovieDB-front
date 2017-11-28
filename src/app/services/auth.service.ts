import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<boolean> {
    const body = {
      username,
      password,
    };
    return this.http.post<boolean>(
      '/auth/login',
      body,
    ).pipe(
      catchError(this.handleError('login', false))
    );
  }

  isUser(): Observable<boolean> {
    return this.http.get<boolean>(
      '/auth/login'
    ).pipe(
      catchError(this.handleError('isUser', false))
    );
  }

  register(username: string, password: string): Observable<boolean> {
    const body = {
      username,
      password,
    };
    return this.http.post<boolean>(
      '/auth/register',
      body,
    ).pipe(
      catchError(this.handleError('login', false))
    );
  }

  isAdmin(): Observable<boolean> {
    return this.http.get<boolean>(
      'auth/admin'
    ).pipe(
      catchError(this.handleError('isAdmin', false))
    );
  }

  private handleError<T> (operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(<T> result);
    }
  }

}
