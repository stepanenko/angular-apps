import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { StudentsService } from '../../students.service';


@Component({
  selector: 'app-academic-performance',
  templateUrl: './academic-performance.component.html',
  styleUrls: ['./academic-performance.component.scss']
})
export class AcademicPerformanceComponent {

  filterStr = '';

  data$ = this.studentService.getPerformance().pipe(
    map(info => info.map(({mark, subject, attendance}) =>
      ({subject: subject['name'], mark, attendance}))));

  colums = [
    { key: 'subject', header: 'Subject'},
    { key: 'mark', header: 'Grade'},
    { key: 'attendance', header: 'Attendaces %'}
  ];

  constructor(private studentService: StudentsService) { }

  applyFilter(value: any) {
    this.filterStr = value;
  }
}
