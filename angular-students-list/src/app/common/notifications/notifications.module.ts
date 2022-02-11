import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SimpleNotificationComponent } from './simple-notification/simple-notification.component';

@NgModule({
  declarations: [SimpleNotificationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  entryComponents: [
    SimpleNotificationComponent
  ]
})
export class NotificationsModule { }
