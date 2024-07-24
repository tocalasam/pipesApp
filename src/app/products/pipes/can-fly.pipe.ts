import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(vuela: boolean): string {

    if(vuela)
      return 'Si'

    return 'No'
  }
}
