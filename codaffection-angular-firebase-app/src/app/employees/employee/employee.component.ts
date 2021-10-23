import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: StudentService,
    private departmentService: DepartmentService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.service.getStudents();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertStudent(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Submitted Successfully');
    }
  }

}
