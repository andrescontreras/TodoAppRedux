import { createAction, props } from '@ngrx/store';

export const addTask = createAction(
  '[TODO] Add Task',
  props<{ text: string }>()
);
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset')
