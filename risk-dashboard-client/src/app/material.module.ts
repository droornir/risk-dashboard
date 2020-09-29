import { NgModule } from '@angular/core';

// components
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatDialogModule, MatButtonModule],
  exports: [MatDialogModule, MatButtonModule]
})
export class MaterialModule { }
