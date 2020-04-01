/*
==============================================
; Title: Nodebucket base-layout.component.ts
; Author: Richard Krasso
; Modified by: Karie Funk
; Date: 31 March 2020
; Description: This will be an app
; showing to do and done tasks for employees
;=============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  year: number = Date.now();

  constructor() {

  }

  ngOnInit() {
  }

}
