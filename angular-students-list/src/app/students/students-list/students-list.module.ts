
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatIconModule, MatTableModule, MatButtonModule } from '@angular/material';

import { StudentsListComponent } from './students-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    StudentsListComponent
  ],
  declarations: [
    StudentsListComponent
  ]
})
export class StudentsListModule { }
