import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value == 0) return "Unacceptable";
    return null;
  }

}
