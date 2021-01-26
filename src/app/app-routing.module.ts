import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { AddTodosComponent } from './components/add-todos/add-todos.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'home',component: TodoListComponent
  },
  {
    path:'add',component: AddTodosComponent
  },
  {
    path:'todoId/:id',component: TodoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
