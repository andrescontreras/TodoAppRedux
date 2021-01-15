import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { deleteTask, editTask, status } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('input') input: ElementRef;
  checkCompleted: FormControl;
  txtInput: FormControl;

  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.finished);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(status({ id: this.todo.id }));
    });
  }

  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.input.nativeElement.select();
    }, 10);
  }

  save() {
    this.editing = false;
    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.text) {
      return;
    }

    this.store.dispatch(
      editTask({
        id: this.todo.id,
        text: this.txtInput.value,
      })
    );
  }

  delete() {
    this.store.dispatch(deleteTask({ id: this.todo.id }));
  }
}
