import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Student } from 'src/app/shared/models/student.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlsService } from '../controls.service';
import { merge, map } from 'lodash/fp';
import { DatabaseService } from 'src/app/shared/services/db.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  form: FormGroup;

  avaliableGroups$ = this.db.fetchGroups();

  compareGroups = (group1, group2) => group1 && group2 && group1.id === group2.id;

  constructor(
    private db: DatabaseService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditStudentComponent>,
    private controls: ControlsService,
    @Inject(MAT_DIALOG_DATA) public initData
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const names = ['name', 'surname', 'gender', 'group', 'phone', 'address', 'birthdate'];
    const requiredControls = this.controls.makeRequiredControls(this.initData.data, names);

    const makeControl = this.controls.makeControl(this.initData.data);

    this.form = this.formBuilder.group({
      ...requiredControls,
      ...makeControl('email', Validators.required, Validators.email),
      ...makeControl('description')
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
