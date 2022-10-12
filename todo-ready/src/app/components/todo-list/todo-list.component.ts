import {Component, OnInit} from '@angular/core';
import {Todo} from "../../models/todo";
import {ToastrService} from "ngx-toastr";
import {TodoListDataService} from "../../services/todo-list-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoList: Todo[] = this.todoDataService.todoList;

  constructor(private toasterService: ToastrService, private todoDataService: TodoListDataService, private router: Router) {
    this.setTodo();
  }

  ngOnInit(): void {
  }

  public redirectToDescription(item: Todo) {
    const pathSegment = this.router.url.includes('favorite') ? 'favorite' : 'list';
    this.router.navigateByUrl(`${pathSegment}/${item.id}`);
  }

  public onChange(item: Todo): void {
    this.todoDataService.onChange(item);
    item.isCompleted ? this.toasterService.success(`Todo succesfully completed`, 'completed') : '';
    this.setTodo();
  }


  public isFavorite(todo: Todo): void {
    this.todoDataService.isFavorite(todo);
    todo.isFavorite ? this.toasterService.success('Todo Added to Favorite') : this.toasterService.error('Todo Removed from Favorite');
    this.setTodo();
  }

  public deleteTodo(item: Todo): void {
    this.todoDataService.deleteTodo(item);
    this.toasterService.error(`Todo ${item.id} Deleted!`, 'Deleted Successfuly');
    this.setTodo();
  }

  private setTodo(): void {
    this.todoList = [...this.todoDataService.getTodoList()];
  }
}
