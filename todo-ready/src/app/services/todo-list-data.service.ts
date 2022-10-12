import {Injectable} from '@angular/core';
import {Todo} from "../models/todo";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TodoListDataService {
  public todoList: Todo[] = [];

  constructor(private router: Router) {
    this.getTodoFromStorage();
  }

  public getTodoList(): Todo[] {
    return this.router.url.includes('favorite') ? this.todoList.filter(todo => todo.isFavorite) : this.todoList;
  }

  public addTodo(title: string, description: string): void {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: title,
      description: description
    }
    this.todoList.unshift(item);
    this.updateLocalStorage();
  }

  public onChange(item: Todo): void {
    this.todoList.forEach(todo => {
      if (todo.id === item.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  public isFavorite(todo: Todo): void {
    todo.isFavorite = !todo.isFavorite;
    this.updateLocalStorage();
  }

  public deleteTodo(item: Todo): void {
    const index = this.todoList.findIndex(todo => todo.id === item.id);
    this.todoList.splice(index, 1);
    this.updateLocalStorage();
  }


  public updateLocalStorage(): void {
    localStorage.setItem("todo", JSON.stringify(this.todoList));
  }

  public getTodoFromStorage(): void {
    const savedTodoAtLocalStorage = JSON.parse(localStorage.getItem('todo') as string);
    if (savedTodoAtLocalStorage) { this.todoList = savedTodoAtLocalStorage; }
  }
}
