import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent {

  @Input() selectTodo: Todo | null = null;
  @Output() completed: EventEmitter<Todo> = new EventEmitter<Todo>();

  markCompleted(): void {
    if (this.selectTodo) {
      this.completed.emit(this.selectTodo);
    }
  }
}
