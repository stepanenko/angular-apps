import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ControlsService } from '../controls.service';

@Component({
  selector: 'app-edit-advertisement',
  templateUrl: './edit-advertisement.component.html',
  styleUrls: ['./edit-advertisement.component.scss']
})
export class EditAdvertisementComponent implements OnInit {
  form: FormGroup;
  makeControl = this.controls.makeControl(this.initData.data);

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditAdvertisementComponent>,
    private controls: ControlsService,
    @Inject(MAT_DIALOG_DATA) public initData
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    const names = ['title'];
    this.form = this.formBuilder.group(
      this.controls.makeRequiredControls(this.initData.data, names)
    );
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
