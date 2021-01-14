import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[TODO] Add Task',
  props<{ text: string }>()
);

export const status = createAction(
  '[TODO] Completed Status',
  props<{ id: number }>()
);

export const editTask = createAction(
  '[TODO] Edit Task',
  props<{ id: number; text: string }>()
);
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset')
