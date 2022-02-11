import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsService } from './dialogs.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule,
         MatDialogModule, MatNativeDateModule, MatFormFieldModule, MatIconModule,
         MatInputModule, MatRadioModule, MatSelectModule, MAT_DIALOG_DATA
       } from '@angular/material';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ControlsService } from './controls.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditAdvertisementComponent } from './edit-advertisement/edit-advertisement.component';

@NgModule({
  declarations: [
    EditStudentComponent,
    EditUserComponent,
    AddCourseComponent,
    EditAdvertisementComponent
  ],
  entryComponents: [
    EditStudentComponent,
    EditUserComponent,
    AddCourseComponent,
    EditAdvertisementComponent
  ],
  providers: [
    DialogsService,
    ControlsService,
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
  ]
})
export class DialogsModule { }
