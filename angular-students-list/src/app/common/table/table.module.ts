import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { MatInputModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  declarations: [ TableComponent ],
  exports: [ TableComponent ]
})
export class TableModule { }
