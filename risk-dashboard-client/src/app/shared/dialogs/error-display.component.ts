import { Component } from '@angular/core';

@Component({
    selector: 'app-error-display',
    template: `<h1 mat-dialog-title>Error fetching data from server</h1>
            <mat-dialog-content>
                please contact your local support team
            </mat-dialog-content>
            <mat-dialog-actions>
              <button mat-button [mat-dialog-close]="true">ok</button>
            </mat-dialog-actions>`
})
export class DisplayErrorComponent {
    constructor() { }
}
