import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {
  addTask,
  completeAllTask,
  deleteTask,
  editTask,
  status,
} from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Tarea 1'),
  new Todo('Tarea 2'),
  new Todo('Tarea 3'),
  new Todo('Tarea 4'),
];

const _todoReducer = createReducer(
  initialState,
  on(addTask, (state, { text }) => [...state, new Todo(text)]),
  on(status, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          finished: !todo.finished,
        };
      } else {
        return todo;
      }
    });
  }),
  on(editTask, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else {
        return todo;
      }
    });
  }),
  on(deleteTask, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(completeAllTask, (state, { completed }) => {
    return state.map((todo) => {
      return {
        ...todo,
        finished: completed,
      };
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
