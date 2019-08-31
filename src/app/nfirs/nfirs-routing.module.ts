import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NFIRSComponent } from './nfirs.component';


const routes: Routes = [
  {
    path: '',
    component: NFIRSComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NfirsRoutingModule { }
