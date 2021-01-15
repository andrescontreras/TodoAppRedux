import { Pipe, PipeTransform } from '@angular/core';
import { filters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: filters): Todo[] {
    switch (filter) {
      case 'All':
        return todos;
      case 'Completed':
        return todos.filter((todo) => todo.finished);
      case 'Pending':
        return todos.filter((todo) => !todo.finished);

      default:
        break;
    }
  }
}
