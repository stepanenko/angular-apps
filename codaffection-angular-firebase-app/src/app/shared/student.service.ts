import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firebase: AngularFireDatabase) { }

  studentsList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [ Validators.required, Validators.minLength(8) ]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

  getStudents() {
    this.studentsList = this.firebase.list('students');
    return this.studentsList.snapshotChanges();
  }

  insertStudent(student) {
    this.studentsList.push({
      fullName: student.fullName,
      email: student.email,
      mobile: student.mobile,
      city: student.city,
      gender: student.gender,
      department: student.department,
      hireDate: student.hireDate,
      isPermanent: student.isPermanent
    });
  }

  updateStudent(student) {
    this.studentsList.update(student.$key,
      {
        fullName: student.fullName,
        email: student.email,
        mobile: student.mobile,
        city: student.city,
        gender: student.gender,
        department: student.department,
        hireDate: student.hireDate,
        isPermanent: student.isPermanent
      });
  }

  deleteStudent($key: string) {
    this.studentsList.remove($key);
  }

}
