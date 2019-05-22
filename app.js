const validator = require('validator');

const getNotes = require('./notes');

const notes = getNotes();

console.log(notes);

console.log(validator.isURL('youcan'));

// const add = require('./utils');

// const sum = add(3, 5);

// console.log(sum, 'from app.js');
