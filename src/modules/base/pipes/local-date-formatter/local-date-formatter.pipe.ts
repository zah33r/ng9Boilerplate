import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDateFormatter'
})
export class LocalDateFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return (value as Date).toLocaleDateString();
  }

}
