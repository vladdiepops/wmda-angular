import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  statusCreateQuestion: boolean;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentStatusQuestionForm.subscribe(
      (status) => (this.statusCreateQuestion = status)
    );
  }

  onCreateQuestion() {
    this.data.changeStatusCreateQuestion(true);
    this.data.changeStatusShowList(false);
  }

  onShowList() {
    this.data.changeStatusShowList(true);
    this.data.changeStatusCreateQuestion(false);
  }
}
