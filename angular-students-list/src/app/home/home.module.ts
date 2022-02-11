import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule, MatListModule, MatCardModule, MatButtonModule } from '@angular/material';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { AddAdvertisementComponent } from './add-advertisement/add-advertisement.component';
import { DialogsModule } from 'src/app/common/dialogs/dialogs.module';

@NgModule({
  declarations: [
    HomeComponent,
    AdvertisementsComponent,
    AddAdvertisementComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    DialogsModule
  ]
})
export class HomeModule { }
