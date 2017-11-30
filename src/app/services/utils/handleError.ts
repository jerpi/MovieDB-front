import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";

export function handleError<T>(
  operation = 'operation',
  result?: T
): (error: any) => Observable<T> {
  return (error: any): Observable<T> => {
    console.error(error);
    return of(<T> result);
  }
}
