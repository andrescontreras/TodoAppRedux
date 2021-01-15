import { createAction, props } from '@ngrx/store';

export type filters = 'All' | 'Completed' | 'Pending';

export const setFilter = createAction(
  '[Filter] Ser Filter',
  props<{ filter: filters }>()
);
