import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { DialogsModule } from 'src/app/common/dialogs/dialogs.module';
import { NotificationsModule } from 'src/app/common/notifications/notifications.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationsModule,
    DialogsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    ProfileComponent,
  ],
  exports: [ProfileComponent]
})

export class ProfileModule { }
