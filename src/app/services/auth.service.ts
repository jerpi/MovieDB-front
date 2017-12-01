import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {handleError} from "./utils/handleError";

@Injectable()
export class AuthService {

  public isLoggedIn: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<boolean> {
    const body = {
      username,
      password,
    };
    const obs = this.http.post<boolean>(
      '/auth/login',
      body,
    ).pipe(
      catchError(handleError<boolean>('login', false)),
    );
    obs.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
    );
    return obs;
  }

  isAuth(): Observable<boolean> {
    const obs = this.http.get<boolean>(
      '/auth/login'
    ).pipe(
      catchError(handleError<boolean>('isUser', false))
    );
    obs.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
    );
    return obs;
  }

  logout(): Observable<boolean> {
    const obs = this.http.get<boolean>(
      '/auth/logout',
    ).pipe(
      catchError(handleError<boolean>('logout', false))
    );
    obs.subscribe(
      isLoggedOut => this.isLoggedIn = !isLoggedOut
    );
    return obs;
  }

  register(username: string, password: string): Observable<boolean> {
    const obs = this.http.post<boolean>(
      '/auth/register',
      {
        username,
        password
      },
    ).pipe(
      catchError(handleError<boolean>('register', false)),

    );
    obs.subscribe(
      isRegistered => this.isLoggedIn = isRegistered
    );
    return obs;
  }

  isAdmin(): Observable<boolean> {
    return this.http.get<boolean>(
      '/auth/admin'
    ).pipe(
      catchError(handleError<boolean>('isAdmin', false)),
    );
  }

}
