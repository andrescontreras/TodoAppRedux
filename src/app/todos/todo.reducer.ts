import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { addTask } from './todo.actions';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(addTask, (state, { text }) => [...state, new Todo(text)])
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
