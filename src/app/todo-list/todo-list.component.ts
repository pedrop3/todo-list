import { Component } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoListMock: Todo[] = [
    { id: 1, title: 'Tarefa 1', description: 'Descrição da Tarefa 1', complete: false },
    { id: 2, title: 'Tarefa 2', description: 'Descrição da Tarefa 2', complete: false },
    { id: 3, title: 'Tarefa 3', description: 'Descrição da Tarefa 3', complete: false },
    { id: 4, title: 'Tarefa 4', description: 'Descrição da Tarefa 4', complete: false },
    { id: 5, title: 'Tarefa 5', description: 'Descrição da Tarefa 5', complete: false },
    { id: 6, title: 'Tarefa 6', description: 'Descrição da Tarefa 6', complete: false },
  ];

  todoList: Todo[] = [];
  selectTodo: Todo | null = null;

  selectedTodo(todo: Todo): void {
    this.selectTodo = todo;
  }


  markCompleted(endTodo: Todo) {
    const index = this.todoListMock.findIndex(todo => todo.id === endTodo.id);

    if (index != -1) {
      this.todoListMock[index].complete = true;
      this.selectTodo = null;
    }

  }

}
