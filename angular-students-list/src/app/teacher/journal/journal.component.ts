import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent  {

  @Input() data = [];
  @Output() markChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() attendanceChange: EventEmitter<string> = new EventEmitter<string>();

  defaultAvatar = 'assets/images/students-avatars/default-avatar.png';
  inputStyles = {'fontFamily': 'Dancing Script', 'font-size': '1.5rem'};
  displayedColumns: string[] = ['image', 'name', 'mark', 'attendance'];

  validator = (inp) => (/^(\s*|\d+)$/).test(inp) && Number(inp) <= 100;

  handleMarkChange(mark, student) {
    this.markChange.emit({...student, mark});
  }

  handleAttendanceChange(attendance, student) {
    this.attendanceChange.emit({...student, attendance});
  }
}
