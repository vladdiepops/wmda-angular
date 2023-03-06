import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ListService } from '../services/list.service';
import { Question } from '../question';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
  statusCreateQuestion: boolean;

  typesRes = ['number', 'text', 'boolean'];
  submitted = false;

  constructor(private data: DataService, private listService: ListService) {}

  ngOnInit() {
    this.data.currentStatusQuestionForm.subscribe(
      (status) => (this.statusCreateQuestion = status)
    );
  }

  onSubmit(formData) {
    this.submitted = true;

    let question = new Question(
      formData.form.value.content,
      formData.form.value.order,
      formData.form.value.typeResponse
    );

    this.listService.addQuestion(question);

    this.data.changeStatusCreateQuestion(false);
    formData.reset();

    setTimeout(() => {
      this.submitted = false;
    }, 1500);
  }

  isNumber(val): boolean {
    return typeof val === 'number';
  }
}
