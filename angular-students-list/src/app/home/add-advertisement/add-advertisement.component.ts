import { Component, OnInit } from '@angular/core';
import { DialogsService } from 'src/app/common/dialogs/dialogs.service';
import { DatabaseService } from '../../shared/services/db.service';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import * as moment from 'moment';
import { NotificationService } from '../../common/notifications/notification.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.scss']
})
export class AddAdvertisementComponent implements OnInit {
  publish_uid = '';

  constructor(
    private dialogs: DialogsService,
    private db: DatabaseService,
    private authenticationService: AuthenticationService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
    this.authenticationService.user$.subscribe(({uid}) => this.publish_uid = uid );
  }
  AddAdvertisement() {
    this.openDialog();
  }

  openDialog() {
    this.dialogs.openEditAdvertisementDialog({title: 'Add Advertisement'}).pipe(
      filter(Boolean)
    )
    .subscribe(res => {
      this.AddAdvertisementinDB(res = {
        ...res,
        publisher: this.publish_uid,
        date: moment().format()
      });
    });
  }

  AddAdvertisementinDB(adv) {
    this.db.addAnnouncement(adv)
    .then(() => this.notification.successNotification('Advertisement was successfully added'))
    .catch(() => this.notification.errorNotification('Add failed :('));
  }
}
