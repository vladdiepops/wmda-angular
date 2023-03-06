import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
BehaviorSubject;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private statusShowList = new BehaviorSubject<boolean>(false);
  private statusQuestionForm = new BehaviorSubject<boolean>(false);

  currentStatusShowList = this.statusShowList.asObservable();
  currentStatusQuestionForm = this.statusQuestionForm.asObservable();

  constructor() {}

  changeStatusCreateQuestion(status: boolean) {
    this.statusQuestionForm.next(status);
  }

  changeStatusShowList(status: boolean) {
    this.statusShowList.next(status);
  }
}
