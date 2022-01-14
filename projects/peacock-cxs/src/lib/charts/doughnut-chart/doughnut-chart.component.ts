import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ShareService } from '../../dashboard/share.service';

@Component({
  selector: 'pocxs-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor(public params: ShareService) {}
  ngOnInit(): void {
  }
  chartOption: EChartsOption = {
    color: this.params.params.colors,
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        color: 'white'
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: true,
        label: {
          show: false,
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' }
        ]
      }
    ]
  };

}
