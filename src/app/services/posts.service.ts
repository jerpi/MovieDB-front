import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/Post";
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";
import {Movie} from "../models/Movie";
import {handleError} from "./utils/handleError";

@Injectable()
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(id: String): Observable<Post[]> {
    return this.http
      .get<Post[]>('api/posts')
      .pipe(
        catchError(handleError<Movie[]>('getPosts', [])),
      );
  }

}
