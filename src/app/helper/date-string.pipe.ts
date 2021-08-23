import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from "dayjs";

@Pipe({
  name: 'dateString'
})
export class DateStringPipe implements PipeTransform {

  transform(date: any, format?: string): string {
    return dayjs(date).format(format || 'YYYY-MM-DD HH:mm:ss')
  }

}
