import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'minuteToDate'
})
export class MinuteToDatePipe implements PipeTransform {

  transform(value: number): Date {
    const date = new Date()
    date.setHours(Math.floor(value / 60), value % 60, 0, 0);
    return date;
  }
}
