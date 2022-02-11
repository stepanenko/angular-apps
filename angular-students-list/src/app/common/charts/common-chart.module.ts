import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonChartComponent } from './common-chart.component';


@NgModule({
    imports: [
      CommonModule,
    ],
    declarations: [ CommonChartComponent  ],
    exports: [ CommonChartComponent  ]
  })
  export class CommonChartModule { }
