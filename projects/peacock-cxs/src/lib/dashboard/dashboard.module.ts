import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component';
import { GridsterModule } from 'angular-gridster2';
import { ChartsModule } from '../charts/charts.module';
import { ShareService } from './share.service';



@NgModule({
  declarations: [
    DashboardGridComponent
  ],
  imports: [
    CommonModule,
    GridsterModule,
    ChartsModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    ShareService
  ],
  exports: [
    DashboardGridComponent
  ],
})
export class DashboardModule { }
