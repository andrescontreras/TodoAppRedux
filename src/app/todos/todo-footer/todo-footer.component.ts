import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filters, setFilter } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: filters;
  filtersList: filters[] = ['All', 'Completed', 'Pending'];
  pendingCounter: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('filter').subscribe((filter) => {
      this.currentFilter = filter;
    });

    this.store.subscribe(({ filter, todos }) => {
      this.currentFilter = filter;
      this.pendingCounter = todos.filter((todo) => !todo.finished).length;
    });
  }

  changeFilter(filter: filters) {
    this.store.dispatch(setFilter({ filter }));
  }
}
