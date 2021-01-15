import { createReducer, on } from '@ngrx/store';
import { filters, setFilter } from './filter.actions';

export const initialState: filters = 'All';

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
