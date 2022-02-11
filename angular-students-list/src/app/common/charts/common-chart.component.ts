import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-common-chart',
  templateUrl: './common-chart.component.html',
  styleUrls: ['./common-chart.component.scss']
})
export class CommonChartComponent implements OnInit, OnChanges {
  @ViewChild('chart') private chartRef;
  @Input() private labels: any[] = [];
  @Input() private dataset1: any[] = [];
  @Input() private dataset2: any[] = [];
  @Input() private dataset2Hidden = false;
  @Input() private title1 = '';
  @Input() private title2 = '';
  @Input() private borderColors1: any = [];
  @Input() private borderColors2: any = [];
  @Input() private backgroundColor1: any;
  @Input() private backgroundColor2: any;
  @Input() private borderWidth: number;
  @Input() private chartType = 'line';
  @Input() private chartTitle = '';
  @Input() private displayYAxes = true;
  @Input() private yAxeLabel = '';
  @Input() private minYAxe = 0;
  @Input() private maxYAxe = 100;
  @Input() private fill = 'origin';
  @Input() private legend = 'true';
  @Input() private titleFontSize = 20;
  @Input() private responsive = 'true';
  @Input() private maintainAspectRatio = 'true';

  chart: any;

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges() {
    this.chart && this.setData();
  }

  setData() {
    this.chart.data = this.assembleData();
    this.chart.options = this.assembleOptions();
    this.chart.config.type = this.chartType;
    this.chart.update();
  }
  createChart() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: this.chartType,
      data: this.assembleData(),
      options: this.assembleOptions()
    });
  }

  assembleOptions() {
    return {
      responsive: this.responsive,
      maintainAspectRatio: this.maintainAspectRatio,
      title: {
        display: true,
        text: this.chartTitle,
        fontSize: this.titleFontSize
      },
      legend: {
        display: this.legend
      },
      scales: {
        yAxes: [
          {
            display: this.displayYAxes,
            ticks: {
              suggestedMin: this.minYAxe,
              suggestedMax: this.maxYAxe
            },
            scaleLabel: {
              display: true,
              labelString: this.yAxeLabel
            }
          }
        ]
      }
    };
  }

  assembleData() {
    return {
      datasets: [
        {
          data: this.dataset1,
          backgroundColor: this.backgroundColor1,
          label: this.title1,
          fill: this.fill,
          borderColor: this.borderColors1,
          borderWidth: this.borderWidth
        },
        {
          data: this.dataset2,
          backgroundColor: this.backgroundColor2,
          label: this.title2,
          fill: this.fill,
          borderColor: this.borderColors2,
          hidden: this.dataset2Hidden,
          borderWidth: this.borderWidth
        }
      ],
      labels: this.labels
    };
  }
}
