import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InplaceInputComponent } from './inplace-input.component';
import { AutofocusModule } from 'angular-autofocus-fix';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [InplaceInputComponent],
  imports: [
    CommonModule,
    AutofocusModule,
    MatInputModule
  ],
  exports: [InplaceInputComponent]
})
export class InplaceInputModule { }
