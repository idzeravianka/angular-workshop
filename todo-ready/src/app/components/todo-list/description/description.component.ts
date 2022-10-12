import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoListDataService} from "../../../services/todo-list-data.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit, OnDestroy {
  public description: string = '';

  private subscription: Subscription | null = null;

  constructor(private todoListDataService: TodoListDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.description = this.todoListDataService.todoList.find(todo => todo.id === Number(id))?.description || '';
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
