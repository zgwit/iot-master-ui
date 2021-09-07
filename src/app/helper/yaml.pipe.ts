import {Pipe, PipeTransform} from '@angular/core';
import * as YAML from "yaml";

@Pipe({
  name: 'yaml'
})
export class YamlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'object')
      return YAML.stringify(value)
    return value;
  }

}
