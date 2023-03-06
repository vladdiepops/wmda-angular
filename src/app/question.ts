export class Question {
  constructor(
    public question_text: string,
    public question_order: number,
    public question_response_type: string,
    public id?: number
  ) {}
}
