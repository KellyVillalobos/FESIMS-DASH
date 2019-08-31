import { Incident } from './../models/incident';
import { Training } from './../models/training';
import { Fdid } from './../mainnav/mainnav.component';
import { DataService } from './../services/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

const NON_CRITICAL_DATA: Training[] = [
  {
    individual: 'Doe, John J',
    exceptions: '0',
    ceuRequired: '1',
    ceuComplete: '0',
    complete: '0%',
  },
  {
    individual: 'Doe, Jane J',
    exceptions: '0',
    ceuRequired: '1',
    ceuComplete: '1',
    complete: '100%',
  },
  {
    individual: 'Ohm, Chase S',
    exceptions: '0',
    ceuRequired: '2',
    ceuComplete: '1',
    complete: '50%',
  },
  {
    individual: 'Lindsay, Paul M',
    exceptions: '0',
    ceuRequired: '3',
    ceuComplete: '1',
    complete: '75%',
  },
  {
    individual: 'Doe, John J',
    exceptions: '1',
    ceuRequired: '2',
    ceuComplete: '0',
    complete: '100%',
  },
];
const TRAINING_DATA: Training[] = [
  {
    individual: 'Doe, John J',
    exceptions: '0',
    ceuRequired: '1',
    ceuComplete: '0',
    complete: '0%',
  },
  {
    individual: 'Doe, Jane J',
    exceptions: '0',
    ceuRequired: '1',
    ceuComplete: '1',
    complete: '100%',
  },
  {
    individual: 'Ohm, Chase S',
    exceptions: '0',
    ceuRequired: '2',
    ceuComplete: '1',
    complete: '50%',
  },
  {
    individual: 'Lindsay, Paul M',
    exceptions: '0',
    ceuRequired: '3',
    ceuComplete: '1',
    complete: '75%',
  },
  {
    individual: 'Doe, John J',
    exceptions: '1',
    ceuRequired: '2',
    ceuComplete: '0',
    complete: '100%',
  },
];

const PENDING_DATA: Incident[] = [
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
  }
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ]),
    trigger('detailExpand', [
      state(
        'collapsed, void',
        style({
          height: '0px',
          visibility: 'hidden'
        })
      ),
      state(
        'expanded',
        style({
          'min-height': '48px',
          height: '*',
          visibility: 'visible'
        })
      ),
      transition(
        'expanded <=> collapsed, void <=> *',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class DashboardComponent implements OnInit {
  @Output() someEvent: EventEmitter<number> = new EventEmitter();
  selected = '1';

  fdids: Fdid[] = [
    {id: 1, viewValue: '1'},
    {id: 2, viewValue: '2'},
    {id: 3, viewValue: '3'},
  ];

  pendingData = new MatTableDataSource<Incident>(PENDING_DATA);

  training = TRAINING_DATA;
  columnsToDisplay = ['individual', 'exceptions', 'ceuRequired', 'ceuComplete', 'complete'];
  expandedElement: Training | null;

  nonCritical = new MatTableDataSource(NON_CRITICAL_DATA);
  displayedColumns: string[] = ['individual', 'exceptions', 'ceuRequired', 'ceuComplete', 'complete'];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentData.subscribe((fdid) => {
      this.selected = fdid;
    });
  }

  changeFDID(fdid: Fdid) {
    this.data.changeFdid(fdid.viewValue);
  }

  getPendingColumns(): string[] {
    return [
      'pendingDate',
      'pendingNbr',
    ];
  }


}
