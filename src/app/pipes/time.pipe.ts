import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    let h = 0, m = 0;
    if (value >= 60) {
      h = Math.floor(value / 60);
      m = value % 60;
    }
    let s: string = '';
    if (h) {
      s += h + 'h';
    }
    if (m < 10) {
      s += '0';
    }
    s += m;
    if (s === '00') {
      return '?';
    }
    return s;
  }
}
