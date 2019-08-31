import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NFIRSComponent } from './nfirs.component';

describe('NFIRSComponent', () => {
  let component: NFIRSComponent;
  let fixture: ComponentFixture<NFIRSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NFIRSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NFIRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
