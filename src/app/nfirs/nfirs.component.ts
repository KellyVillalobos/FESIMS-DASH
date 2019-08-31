import { Incident } from './../models/incident';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const INCIDENTS_DATA: Incident[] = [
  {
    date: '08-21-2019',
    incidentNbr: '10091',
    exposure: '400',
    status: 'Pending',
    exptLast: '',
    streetHwy: 'Easy St.',
    duration: '1',
  },
  {
    date: '05-25-2019',
    incidentNbr: '10085',
    exposure: '100',
    status: 'Pending',
    exptLast: '',
    streetHwy: '1rst Street',
    duration: '2',
  },
  {
    date: '01-15-2019',
    incidentNbr: '10084',
    exposure: '100',
    status: 'Invalid',
    exptLast: '1-18-2019',
    streetHwy: 'Hwy 66',
    duration: '1',
  },
]

@Component({
  selector: 'app-nfirs',
  templateUrl: './nfirs.component.html',
  styleUrls: ['./nfirs.component.scss']
})
export class NFIRSComponent implements OnInit {

  incidents = new MatTableDataSource<Incident>(INCIDENTS_DATA);

  constructor() { }

  ngOnInit() {
  }
getDisplayedColumns(): string[] {
return [
  'date',
  'incidentNbr',
  'exposure',
  'status',
  'exptLast',
  'streetHwy',
  'duration'
];
}
}
