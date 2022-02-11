import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { CommonChartModule } from 'src/app/common/charts/common-chart.module';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CommonChartModule,
    MatCardModule
  ],
  declarations: [
    ChartComponent,
  ]
})
export class ChartModule { }
