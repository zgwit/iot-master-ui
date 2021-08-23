import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from "dayjs";

@Pipe({
  name: 'objectIdToDateString'
})
export class ObjectIdToDateStringPipe implements PipeTransform {

  transform(_id: any, format?: string): string {
    const date = new Date(parseInt(_id.toString().substring(0, 8), 16) * 1000);
    return dayjs(date).format(format || 'YYYY-MM-DD HH:mm:ss')
  }

}
