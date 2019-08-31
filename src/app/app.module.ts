import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MaterialModuleModule } from './material-module/material-module.module';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapMDBModule } from './bootstrap-mdb/bootstrap-mdb.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainnavlistComponent } from './mainnavlist/mainnavlist.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { NfirsModule } from './nfirs/nfirs.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MainnavlistComponent,
    MainnavComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    MaterialModuleModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapMDBModule,
    DashboardModule,
    NfirsModule
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
