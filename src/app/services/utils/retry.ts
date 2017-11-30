import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/delay';

export function retry<T>(
  count: number = 2,
  wait: number = 1500
): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>) => source
    .retryWhen(errors => errors
        .scan((acc, error) => {
          if (acc >= count) { throw error; } // When the maximum number of retries have been attempted, throw the error.
          return acc + 1; // Each time an error occurs, increment the accumulator.
        }, 0)
        .delay(wait)
    );
}
