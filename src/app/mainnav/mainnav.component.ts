import { DataService } from './../services/data.service';
import { Router } from '@angular/router';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

export interface Fdid {
  id: number;
  viewValue: string;
}

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.scss']
})
export class MainnavComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter<void>();
  @Output() toggleSettings = new EventEmitter<void>();
  showFESIMS = true;
  currentFdid: string;

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.data.currentData.subscribe((fdid) => {
      this.currentFdid = fdid;
    });
  }

  onToggleSideNav() {
    this.sideNavToggle.emit();
    this.showFESIMS = !this.showFESIMS;
  }

  dashboard() {
    this.router.navigate(['/', 'nfirs']);
  }

}
