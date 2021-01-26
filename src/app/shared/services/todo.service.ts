import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/todo';
//set up the Http options.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
//define the server route
private todosRoute = 'http://localhost:3000/todos';
public todos: Todo[];
  constructor(private http: HttpClient) { }
//get the todos
getTodos():Observable<Todo[]>{
  return this.http.get<Todo[]>(`${this.todosRoute}`); 
  }
  //get a todo
  getTodo(id:number):Observable<Todo>{
    const url=`${this.todosRoute}/${id}`;
    return this.http.get<Todo>(url); 
    }
  // updated todo
  updateTodo(id:number, todo:any): Observable<Todo>{
    const url=`${this.todosRoute}/${id}`;
    return this.http.put<Todo>(url,todo)
  }
  //delete a todo 
  deleteTodo(id:number,todo:any): Observable<Todo>{
    const url=`${this.todosRoute}/${id}`;
    return this.http.delete<Todo>(url,httpOptions)
  }
// add a todo
addTodo(todo: Todo):Observable<Todo> {
  const url=`${this.todosRoute}`;
  return this.http.post<Todo>(url,todo);
  
}
}

