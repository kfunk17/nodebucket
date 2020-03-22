/*
============================================
; Title: Nodebucket item.js
; Author: Karie Funk
; Date: 17 March 2020
; Description: This will be an app
; showing to do and done tasks for employees
;===========================================
*/

//Require Mongoose
const mongoose = require('mongoose');

//Create item schema
let itemSchema = mongoose.Schema({
    text: {type: String}
});

//Export item
module.exports = itemSchema;