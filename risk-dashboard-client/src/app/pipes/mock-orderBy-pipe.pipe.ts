import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: false // required to update the value when the promise is resolved
})

export class MockPipe implements PipeTransform {
    name = 'order';

    transform(query: string, ...args: any[]): any {
        return query;
    }
}
