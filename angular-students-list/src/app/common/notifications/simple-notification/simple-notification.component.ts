import { Component, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-simple-notification',
  templateUrl: './simple-notification.component.html',
  styleUrls: ['./simple-notification.component.scss']
})
export class SimpleNotificationComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: string[],
    public snackBar: MatSnackBar
  ) { }

  dismissNotification() {
    this.snackBar.dismiss();
  }
}
