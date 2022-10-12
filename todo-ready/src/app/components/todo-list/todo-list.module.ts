import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import {RouterModule} from "@angular/router";
import { DescriptionComponent } from './description/description.component';
import {CanSeeDescriptionGuard} from "../../guards/can-see-description.guard";



@NgModule({
  declarations: [
    TodoListComponent,
    DescriptionComponent,
  ],
  exports: [TodoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: TodoListComponent,
      children: [{
        path: ':id',
        component: DescriptionComponent,
        canActivate: [CanSeeDescriptionGuard],
      }]
    }]),
  ]
})
export class TodoListModule { }
