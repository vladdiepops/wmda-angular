import { Injectable } from '@angular/core';
import { Question } from '../question';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  questionList: Question[] = [];

  constructor(private httpService: HttpService) {
    this.fetchFromDB();
  }

  fetchFromDB() {
    this.httpService.getQuestionList().subscribe((questionsData) => {
      let questionsArray = questionsData.questions;

      for (let i = 0; i < questionsArray.length; i++) {
        this.questionList.push(questionsArray[i]);
      }
    });
  }

  addQuestion(question: Question) {
    this.httpService
      .saveQuestion(question)
      .subscribe((res) => this.questionList.push(res));
  }

  fetchQuestionsArray() {
    return this.questionList;
  }

  editQuestion(question: Question) {
    this.httpService.editQuestionDB(question).subscribe((res) => {
      let q = this.questionList.find((q) => q.id === question.id);
      q = res.question;
    });
  }
}
