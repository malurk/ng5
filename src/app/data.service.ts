import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>([]);
  goal = this.goals.asObservable();

  // monkey = new BehaviorSubject<number>(10);

  // observableMonkey = this.monkey.asObservable();

  changeGoal(goal){
    this.goals.next(goal);
  }


  constructor() { }
}
