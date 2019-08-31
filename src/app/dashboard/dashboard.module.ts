import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModuleModule } from './../material-module/material-module.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModuleModule,
    NgbModule
  ]
})
export class DashboardModule { }
