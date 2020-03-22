/*
============================================
; Title: Nodebucket employee.js
; Author: Karie Funk
; Date: 12 March 2020
; Description: This will be an app
; showing to do and done tasks for employees
;===========================================
*/

/*Imports Mongoose*/
const mongoose = require('mongoose');
const Item = require('./item');

let employeeSchema = mongoose.Schema({
    empId: {type: String, unique: true, dropDups: true},
    firstName: {type: String},
    lastName: {type:String},
    todo: [Item],
    done: [Item]
});


module.exports = mongoose.model('Employee', employeeSchema);