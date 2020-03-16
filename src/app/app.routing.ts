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

import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';



export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      /*
        New components go here...
       */
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];
