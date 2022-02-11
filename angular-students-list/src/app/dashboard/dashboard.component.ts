import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/shared/services/db.service';
import { map, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BACKGROUND_COLORS, BORDER_COLORS } from './dashboard.config';
import { mean, flow, filter, map as map_  } from 'lodash/fp';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  backgroundColor = BACKGROUND_COLORS;
  borderColors = BORDER_COLORS;
  hideChart = true;
  subjects$ = this.dbService.fetchSubjects();

  selectedSubject$ = new Subject();

  info$ = this.selectedSubject$.pipe(
    switchMap(subjectId =>
      this.dbService.fetchPerformanceByGroups(subjectId).pipe(
        map(course => course.map(({group, id}) => ({
          avgMark: this.calcAvgMark(id), groupName: group.name
        })))
      )
    )
  );

  labels$ = this.info$.pipe(map(key => key.map(({groupName}) => groupName)));
  data$ = this.info$.pipe(map(key => key.map(({avgMark}) => avgMark)));

  constructor(private dbService: DatabaseService) {}

  calcAvgMark(data) {
    return flow([
      map_(({id}) => parseInt(id.mark, 10)),
      filter(Boolean),
      mean
    ])(data);
  }

  selectSubject (subjectId: string) {
    this.selectedSubject$.next(subjectId);
    this.hideChart = false;
  }
}
