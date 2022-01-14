import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from "echarts";



@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({ echarts })
  ],
  exports: [
    BarChartComponent,
    LineChartComponent,
    DoughnutChartComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ChartsModule { }
