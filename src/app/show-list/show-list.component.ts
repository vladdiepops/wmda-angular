import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit {
  statusShowList: boolean;
  statusCreateQuestion: boolean;

  questionList = [];

  typesRes = ['number', 'text', 'boolean'];

  userText = '';
  userOrder = 0;
  userType = '';

  editMode = false;
  orderNo: number;

  constructor(private data: DataService, private serviceList: ListService) {
    this.questionList = this.serviceList.fetchQuestionsArray();
  }

  ngOnInit(): void {
    this.data.currentStatusShowList.subscribe(
      (status) => (this.statusShowList = status)
    );
  }

  isNumber(val): boolean {
    return typeof val === 'number';
  }

  onEdit(order) {
    this.editMode = true;
    this.orderNo = order;

    let question = this.findQuestion(order);

    this.userOrder = question.question_order;
    this.userText = question.question_text;
    this.userType = question.question_response_type;
  }

  onEditQuestionText(textValue) {
    this.userText = textValue;
  }

  onEditQuestionOrder(orderValue) {
    this.userOrder = orderValue;
  }

  onEditQuestionType(typeValue) {
    this.userType = typeValue;
  }

  findQuestion(order) {
    return this.questionList.find(
      (question) => question.question_order === order
    );
  }

  onSave(order) {
    let question = this.findQuestion(order);

    question.question_text = this.userText;
    question.question_order = this.userOrder;
    question.question_response_type = this.userType;

    this.serviceList.editQuestion(question);

    this.editMode = false;
    this.orderNo = 0;
  }

  sortList() {
    this.questionList.sort((a, b) => {
      return a.question_order - b.question_order;
    });
  }
}
