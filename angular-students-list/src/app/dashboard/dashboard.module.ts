import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CommonChartModule } from '../common/charts/common-chart.module';
import { MatSelectModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [
    CommonModule,
    CommonChartModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    MatButtonToggleModule
  ,
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [ DashboardComponent ],
  providers: [ ]
})
export class DashboardModule { }
