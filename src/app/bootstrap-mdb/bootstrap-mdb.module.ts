import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule, NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    NavbarModule,
    WavesModule,
    ButtonsModule
  ],
  exports: [
    MDBBootstrapModule,
    NavbarModule,
    WavesModule,
    ButtonsModule
  ]
})
export class BootstrapMDBModule { }
