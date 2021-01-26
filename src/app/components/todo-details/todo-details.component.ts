import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/models/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
todo: Todo; 
  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.getTodo();
  }
getTodo(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.todoService.getTodo(id).subscribe(todo => 
    this.todo=todo);
}
updateTodo(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.todoService.updateTodo(id,this.todo).subscribe(response => {
    this.router.navigate(["/home"]);
  }); 
}
deleteTodo(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.todoService.deleteTodo(id,this.todo).subscribe(response => {
    this.router.navigate(["/home"]);
  })
}
}
