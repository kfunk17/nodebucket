/*
============================================
; Title: Nodebucket app.routing.ts
; Author: Richard Krasso
; Modified by: Karie Funk
; Date: 15 March 2020
; Description: This will be an app
; showing to do and done tasks for employees
;===========================================
*/
import { Routes } from "@angular/router";
import { BaseLayoutComponent } from "./shared/base-layout/base-layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskCreateDialogComponent } from './shared/task-create-dialog/task-create-dialog.component';

export const AppRoutes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "task-create-dialog",
        component: TaskCreateDialogComponent
      },
      {
        path: "**",
        pathMatch: 'full',
        component: NotFoundComponent
      }
    ]
  }
];