import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainnavlist',
  templateUrl: './mainnavlist.component.html',
  styleUrls: ['./mainnavlist.component.scss']
})
export class MainnavlistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  NFIRS() {
    this.router.navigate(['/', 'nfirs']);
  }

}
