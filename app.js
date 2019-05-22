const validator = require('validator');
const chalk = require('chalk');

const getNotes = require('./notes');
const validate = require('./utils');

const notes = getNotes();

console.log(notes);

validate('youcan.com');
validate('youcan');
