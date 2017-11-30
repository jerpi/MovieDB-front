import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {handleError} from "./utils/handleError";

@Injectable()
export class AuthService {

  auth: boolean = false;

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
      catchError(handleError<boolean>('login', false)),
    );
  }

  isAuth(): Observable<boolean> {
    return this.http.get<boolean>(
      '/auth/login'
    ).pipe(
      catchError(handleError<boolean>('isUser', false))
    );
  }

  logout(): Observable<boolean> {
    return this.http.get<boolean>(
      '/auth/logout',
    ).pipe(
      catchError(handleError<boolean>('isAdmin', false))
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
      catchError(handleError<boolean>('login', false))
    );
  }

  isAdmin(): Observable<boolean> {
    return this.http.get<boolean>(
      '/auth/admin'
    ).pipe(
      catchError(handleError<boolean>('isAdmin', false))
    );
  }
}
