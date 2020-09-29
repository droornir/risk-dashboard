import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseAndCapitalize'
})
export class ParseAndCapitalize implements PipeTransform {

  transform(value: string): string {
    return value ? value.replace(/([A-Z])/g, ' $1').trim() : value;
  }

}
