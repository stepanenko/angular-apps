import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from 'src/app/shared/models/student.interface';
import { DatabaseService } from 'src/app/shared/services/db.service';
import { StudentsService } from '../../students.service';
import { DialogsService } from 'src/app/common/dialogs/dialogs.service';
import { NotificationService } from 'src/app/common/notifications/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit, OnDestroy {

  selectedStudent: Student;
  selectedStudentId: string;
  subscriptionToStudent: Subscription;
  defaultAvatar = 'assets/images/students-avatars/default-avatar.png';

  constructor(
    private studentService: StudentsService,
    private databaseService: DatabaseService,
    private dialogs: DialogsService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
    this.subscribeToStudent();
  }

  subscribeToStudent() {
    this.subscriptionToStudent = this.studentService.selectedStudent$
    .subscribe(student => {
      this.selectedStudent = student;
    });
  }

  subscribeToStudentId() {
    this.studentService.studentChange$
    .subscribe(id => {
      this.selectedStudentId = id;
    });
  }

  openDialog() {
    this.dialogs.openEditStudentDialog({student: this.selectedStudent})
    .subscribe(res => {
      res && this.updateStudentInDB(res);
    });
  }

  updateStudentInDB(student) {
    this.subscribeToStudentId();
    this.databaseService.updateStudent(this.selectedStudentId, student)
    .then(_ => this.notification.successNotification('User was successfully updated'))
    .catch(_ => this.notification.errorNotification('Update failed :('));
  }

  onEditClick() {
    this.openDialog();
  }

  ngOnDestroy() {
    this.subscriptionToStudent.unsubscribe();
  }
}
