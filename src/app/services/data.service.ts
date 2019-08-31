import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = new BehaviorSubject<string>('1');
  currentData = this.dataSource.asObservable();


  changeFdid(fdid: string) {
    this.dataSource.next(fdid);
  }

}
