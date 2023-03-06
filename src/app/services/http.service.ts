import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../question';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getQuestionList() {
    return this.http.get<any>('http://127.0.0.1:8000/api/questions/');
  }

  saveQuestion(question: Question) {
    return this.http.post<any>(
      'http://127.0.0.1:8000/api/questions/',
      question
    );
  }

  editQuestionDB(question: Question) {
    return this.http.post<any>(
      'http://127.0.0.1:8000/api/question/' + question.id,
      question
    );
  }
}
