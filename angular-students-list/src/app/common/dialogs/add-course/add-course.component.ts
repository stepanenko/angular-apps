import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlsService } from '../controls.service';
import { DatabaseService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  form: FormGroup;

  avaliableGroups$ = this.db.fetchGroups();
  avaliableSubjects$ = this.db.fetchSubjects();
  avaliableTeachers$ =  this.db.fetchTeachers();

  compareElements = (el1, el2) => el1 && el2 && el1.id === el2.id;

  constructor(
    private db: DatabaseService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCourseComponent>,
    private controls: ControlsService,
    @Inject(MAT_DIALOG_DATA) public initData
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const names = ['group', 'teacher', 'subject'];
    this.form = this.formBuilder.group({
      ...this.controls.makeRequiredControls(this.initData.data, names)
    });
  }

  onNoClick() {
    this.dialogRef.close(null);
  }

  onOkClick() {
    const result = {
      ...this.initData.student,
      ...this.form.value
    };
    this.dialogRef.close(this.form.valid ? result : null);
  }
}
