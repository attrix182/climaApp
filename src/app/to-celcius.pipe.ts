import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelcius',
})
export class ToCelciusPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value  - 273.15 ;
  }
}
