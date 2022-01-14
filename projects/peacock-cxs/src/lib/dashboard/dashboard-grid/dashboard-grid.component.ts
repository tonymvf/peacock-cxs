import { Injector, Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from '../../charts/doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from '../../charts/line-chart/line-chart.component';
import { ShareService } from '../share.service';

@Component({
  selector: 'pocxs-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent implements OnInit {

  options: GridsterConfig;
  dashboard: GridsterItem[];
  charts = {
    bar: BarChartComponent,
    line: LineChartComponent,
    doughnut: DoughnutChartComponent
  }
  chartColors = {
    bar: ['#E77A00'],
    line: ['#0292BC'],
    doughnut: ['#892559', '#c2387f', '#ce64a0']
  }
  customInjector: Injector;
  
  constructor(private injector: Injector) {
    this.customInjector = Injector.create({providers: [{provide: ShareService, deps: []}], parent: this.injector})
  }

  ngOnInit(): void {
    this.dashboard = this.getDashboard();
    this.options = {
      minCols: 4,
      maxCols: 4,
      minRows: 4,
      maxRows: 4,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
      itemChangeCallback: ()=>{
        this.saveDashboard();
      },
      itemResizeCallback: ()=>{
        this.saveDashboard();
      },
      displayGrid: "none",
    };
  }
  addItem(type: string){
    const template = {
      cols: 1,
      rows: 1,
      y: 0,
      x: 0,
      id: this.dashboard.length,
      label: `Chart`,
      params: {
        colors: this.chartColors[type]
      },
      type
    }
    this.dashboard.push(template);
    this.saveDashboard();
  }

  getChartByType(type: string){
    return this.charts[type];
  }
  
  removeItem($event: MouseEvent, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
    this.saveDashboard();
  }
  
  saveDashboard(){
    localStorage.setItem('dashboard', JSON.stringify(this.dashboard));
  }

  getDashboard(): GridsterItem[]{
    return JSON.parse(localStorage.getItem('dashboard')) || [];
  }

  paramsInjector(params){
    //share params to the components created dynamically
    const shareService = this.customInjector.get(ShareService);
    shareService.params = params;
    return this.customInjector
  }
}
