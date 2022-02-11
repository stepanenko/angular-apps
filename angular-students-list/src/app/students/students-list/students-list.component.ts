
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { take, filter } from 'rxjs/operators';

import { DatabaseService } from 'src/app/shared/services/db.service';
import { DialogsService } from 'src/app/common/dialogs/dialogs.service';
import { NotificationService } from 'src/app/common/notifications/notification.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  searchString: string;
  activeStudent;
  studentsList: MatTableDataSource<any>;
  displayedColumns: string[] = ['image', 'name', 'actions'];
  defaultAvatar = 'assets/images/students-avatars/default-avatar.png';

  @Output() clickOnStudent = new EventEmitter();

  constructor(
    private service: DatabaseService,
    private dialogs: DialogsService,
    private notific: NotificationService
  ) {}

  allStudents = this.service.fetchStudents();

  ngOnInit() {

    this.selectDefaultStudent();

    this.allStudents.subscribe(data => {
      this.studentsList = new MatTableDataSource(data);

      this.activeStudent = data.find(stud => stud.id === this.activeStudent.id);
      this.activeStudent && this.clickOnStudent.emit(this.activeStudent);

      this.studentsList
        .filterPredicate = (value, filterStr: string): boolean => {
          return value.name.toLowerCase().includes(filterStr) ||
          value.surname.toLowerCase().includes(filterStr);
        };
    });

  }

  selectDefaultStudent() {
    this.allStudents.pipe(take(1))
      .subscribe(data => this.onTableRowClick(data[0]));
  }

  deleteStudent(id) {
    if (confirm('Delete this student?')) {
      this.service.deleteStudent(id);
      this.selectDefaultStudent();
    }
  }

  addStudent() {
    this.dialogs.openEditStudentDialog({title: 'Add new student'})
      .pipe(
        filter(Boolean)
      )
      .subscribe(res => {
        this.addStudentInDB(res);
      });
  }

  addStudentInDB(student) {
    this.service.addStudent(student).then(
      ok => this.notific.successNotification('User was successfully added'),
      err => this.notific.errorNotification('Add failed :('));
  }

  onTableRowClick(student) {
    this.activeStudent = student;
    this.clickOnStudent.emit(student);
  }

  applyFilter(filterValue: string) {
    this.searchString = filterValue;
    this.studentsList.filter = filterValue.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchString = '';
    this.applyFilter('');
  }

}
