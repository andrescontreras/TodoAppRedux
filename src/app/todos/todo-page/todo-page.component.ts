import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { completeAllTask } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  completed = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  completeAll() {
    this.completed = !this.completed;
    this.store.dispatch(completeAllTask({ completed: this.completed }));
  }
}
