import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public navSwitch = new BehaviorSubject<string>('main');
  public navSwitch$ = this.navSwitch.asObservable();

  emitChange(change: string) {
    this.navSwitch.next(change);
  }
  constructor() { }
}
