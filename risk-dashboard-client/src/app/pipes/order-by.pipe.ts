import { Pipe, PipeTransform } from '@angular/core';
import lodash from 'lodash';

@Pipe({
  name: 'orderBy',
  pure: true
})
export class OrderByPipe implements PipeTransform {
  howMany = 2;
  transform(value: any[], key: any): any {
    switch (key) {
      case 'order':
        value.sort((a, b): number => {
          if (a[key] !== undefined && b[key] !== undefined) {
            return a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : 1;
          }
          return -1;
        });
        const chunkedValues = lodash.chunk(value, this.howMany);
        return chunkedValues;
      case 'risk-order':
      case 'web-risk-order':
        return value.sort((a, b): number => {
          if (a[key] !== undefined && b[key] !== undefined) {
            return a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : 1;
          }
          return -1;
        });
      default:
        break;
    }
  }

}
