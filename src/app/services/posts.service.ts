import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models/post";
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";
import {handleError} from "./utils/handleError";

@Injectable()
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(contentId: String): Observable<Post[]> {
    return this.http
      .get<Post[]>(`api/posts/${contentId}`)
      .pipe(
        catchError(handleError<Post[]>('getPosts', [])),
      );
  }

  post(contentId: String, post: Post) {
    const body = {

    };
    return this.http
      .post<Post>(`api/posts/${contentId}`, body)
      .pipe(
        catchError(handleError<Post>('post', null)),
      );
  }

  editPost(id: String) {
    const body = {

    };
    return this.http
      .patch(`api/posts/${id}`, body)
      .pipe(
        catchError(handleError<Post>('editPost',null)),
      );
  }

  deletePost(id: String) {
    const body = {

    };
    return this.http
      .patch(`api/posts/${id}`, body)
      .pipe(
        catchError(handleError<boolean>('deletePost', false))
      );
  }

}
