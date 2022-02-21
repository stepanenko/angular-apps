
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { StudentsComponent } from './students.component';
import { StudentsService } from './students.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    StudentsListComponent,
    StudentDetailsComponent,
    StudentMenuComponent,
    StudentsComponent
  ],
  providers: [StudentsService]
})
export class StudentsModule { }
