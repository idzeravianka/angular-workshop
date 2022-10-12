import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {HeaderModule} from "./components/header/header/header.module";
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'add', loadChildren: () => import('./components/add-form/add-form.module').then(m => m.AddFormModule)},
  {path: 'list', loadChildren: () => import('./components/todo-list/todo-list.module').then(m => m.TodoListModule)},
  {path: 'favorite', loadChildren: () => import('./components/todo-list/todo-list.module').then(m => m.TodoListModule)},
  {path:'**', loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule)}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HeaderModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
