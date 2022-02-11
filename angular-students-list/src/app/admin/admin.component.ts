import { Component } from '@angular/core';
import { DialogsService } from 'src/app/common/dialogs/dialogs.service';
import { DatabaseService } from 'src/app/shared/services/db.service';
import { NotificationService } from 'src/app/common/notifications/notification.service';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private dialogs: DialogsService,
    private databaseService: DatabaseService,
    private notification: NotificationService,
    private chatService: ChatService

  ) { }

  addStudent() {
    this.dialogs.openEditStudentDialog({title: 'Add new student'}).pipe(
      filter(Boolean)
    )
    .subscribe(res => {
      this.addStudentInDB(res);
    });
  }

  addStudentInDB(student) {
    this.databaseService.addStudent(student)
    .then(() => this.notification.successNotification('User was successfully added'),
    () => this.notification.errorNotification('Add failed :('));
  }

  addCourse() {
    const isSameCourse = one => another =>
    one.group === another.group && one.subject === another.subject;
    this.dialogs.openAddCourseDialog({title: 'Add new course'}).pipe(
      filter(Boolean),
      map(({group, subject, teacher}) => ({group: group.id, subject: subject.id, teacher: teacher.uid})),
      switchMap(newCourse =>
        this.databaseService.fetchCourses().pipe(
          map(courses => courses.some(isSameCourse(newCourse))),
          map(existed => existed ? false : newCourse)
        )
      ),
      take(1),
    ).subscribe(course => {
      course && this.addCourseInDB(course);
      !course && this.notification.warningNotification('This course already exists');
    });
  }

  addCourseInDB(course) {
    this.databaseService.addCourse(course)
    .then(() => this.notification.successNotification('Course was successfully added'),
    () => this.notification.errorNotification('Add failed :('));
  }

  clearChatHistory() {
    if (confirm('Delete chat history?')) {
      this.chatService.clearHistory();
    }
  }

}
