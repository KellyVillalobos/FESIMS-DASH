import { MaterialModuleModule } from './../material-module/material-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NFIRSComponent } from './nfirs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NfirsRoutingModule } from './nfirs-routing.module';


@NgModule({
  declarations: [NFIRSComponent],
  imports: [
    CommonModule,
    NgbModule,
    NfirsRoutingModule,
    MaterialModuleModule
  ]
})
export class NfirsModule { }
