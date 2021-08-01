import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectIdToDate'
})
export class ObjectIdToDatePipe implements PipeTransform {
  transform(_id: any): Date {
    return new Date(parseInt(_id.toString().substring(0, 8), 16) * 1000);
  }
}
