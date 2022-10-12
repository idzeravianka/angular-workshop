import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TodoListDataService} from "../../services/todo-list-data.service";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  public addForm: FormGroup;

  constructor(private todoListData: TodoListDataService) {
    this.addForm = new FormGroup({
      todoName: new FormControl(''),
      todoDescription: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    const values = this.addForm.value;
    this.todoListData.addTodo(values.todoName, values.todoDescription);
    this.addForm.reset();
  }

}
