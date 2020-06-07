import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root',
})

export class DataService{

    private dataSource = new BehaviorSubject<boolean>(false);
    currentMessage = this.dataSource.asObservable();
    constructor() { }
  
    changeMessage(message:boolean) {
    
      this.dataSource.next(message);
    }

}