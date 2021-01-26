import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/models/todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {
todo: Todo = {
  id: 0,
  todoTitle: '',
  todoTime: '',
  todoDetails: '',
  todoNeed: '',
}
  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addTodo(): void {
    this.todoService.addTodo(this.todo).subscribe(todo => {
      console.log(todo);
      this.router.navigate(["/home"]);
    })
  }
}
