import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import { JournalComponent } from './journal/journal.component';
import { InplaceInputModule } from '../common/inplace-input/inplace-input.module';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [TeacherComponent, JournalComponent],
  imports: [
    CommonModule,
    InplaceInputModule,
    MatTableModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [TeacherComponent]
})
export class TeacherModule { }
