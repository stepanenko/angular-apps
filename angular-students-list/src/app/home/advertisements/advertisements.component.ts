import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/shared/services/db.service';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss']
})
export class AdvertisementsComponent {
  adverts$ = this.db.fetchAnnouncementsWithPublisher().pipe(
    map(items => items.sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf()))
  );
  constructor(
    private db: DatabaseService
  ) { }
}
