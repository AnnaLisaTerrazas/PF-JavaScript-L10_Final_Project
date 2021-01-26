import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/models/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
todos: Todo[];

  constructor(
    private todoService: TodoService
  )
  { }

  ngOnInit()  {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }
  onClickDelete(todo: Todo) {
    //remove a todo
    this.todos=this.todos.filter(todos=>todo.id!==todo.id);
    this.todoService.deleteTodo(todo.id,todo).subscribe();
    //need to reload/refresh page
    window.location.reload();
  }
}

    