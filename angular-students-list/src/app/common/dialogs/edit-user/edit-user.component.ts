import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ControlsService } from '../controls.service';
import { merge, map } from 'lodash/fp';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  form: FormGroup;
  makeControl = this.controls.makeControl(this.initData.data);

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditUserComponent>,
    private controls: ControlsService,
    @Inject(MAT_DIALOG_DATA) public initData
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const names = ['name', 'surname', 'gender', 'phone', 'address'];
    const requiredControls = this.controls.makeRequiredControls(this.initData.data, names);

    const makeControl = this.controls.makeControl(this.initData.data);

    this.form = this.formBuilder.group({
      ...requiredControls,
      ...makeControl('email', Validators.required, Validators.email),
      ...makeControl('roles.admin'),
      ...makeControl('roles.teacher'),
      ...makeControl('roles.user')
    });
  }

  onNoClick() {
    this.dialogRef.close(null);
  }

  onOkClick() {
    const result = {
      ...this.initData.user,
      ...this.form.value
    };
    this.dialogRef.close(this.form.valid ? result : null);
  }
}
