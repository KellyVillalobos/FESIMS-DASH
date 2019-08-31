import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnavlistComponent } from './mainnavlist.component';

describe('MainnavlistComponent', () => {
  let component: MainnavlistComponent;
  let fixture: ComponentFixture<MainnavlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainnavlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
