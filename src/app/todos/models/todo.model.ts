export class Todo {
  public id: number;
  public text: string;
  public finished: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = Date.now();
    this.finished = false;
  }
}
