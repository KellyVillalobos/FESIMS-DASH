import { MainnavComponent } from './mainnav/mainnav.component';
import { Component, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Fdid {
  id: number;
  viewValue: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MainnavComponent, {static: false}) child: MainnavComponent;
  mode = new FormControl('side');
  title = 'FESIMS-DASH';
}
