import { NgModule } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';
import { PeacockCxsComponent } from './peacock-cxs.component';



@NgModule({
  declarations: [
    PeacockCxsComponent
  ],
  imports: [
    DashboardModule
  ],
  exports: [
    PeacockCxsComponent,
    DashboardModule
  ]
})
export class PeacockCxsModule { }
