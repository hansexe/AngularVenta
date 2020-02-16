import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponentComponent } from './dashboard-component.component';
@NgModule({
  declarations: [DashboardComponentComponent ],
    exports: [
      DashboardComponentComponent
    ],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    // DashboardComponentComponent,
  ]
})
export class DashboardModule { }
