import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ShareService } from '../../dashboard/share.service';

@Component({
  selector: 'pocxs-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(public params: ShareService) {}

  ngOnInit(): void {
  }
  chartOption: EChartsOption = {
    color: this.params.params.colors,
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };
}
