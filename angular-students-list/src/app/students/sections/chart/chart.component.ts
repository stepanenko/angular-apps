import { Component, OnInit, OnDestroy } from '@angular/core';
import { COLORS1, COLORS2 } from './chart.config';
import { StudentsService } from '../../students.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { map as _map } from 'lodash/fp';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnDestroy {
  studentMarks: Array<number>;
  studentAttendance: Array<number>;
  labelsForLineChart: Array<string>;
  colorsForLineChart: Array<string>;
  subscription: Subscription;

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.subscription = this.studentService.getPerformance().
      pipe(
        map(info => info.
          map(({mark, subject, attendance}) =>
          ({subject: subject['name'], mark, attendance}))))
          .subscribe (perf =>
            this.generateDataForChart(perf)
      );
  }

  generateDataForChart(perf) {
    this.studentMarks = perf.map(el => el.mark);
    this.studentAttendance = perf.map(el => el.attendance);
    this.labelsForLineChart = perf.map(el => el.subject);
    this.colorsForLineChart = COLORS1;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
