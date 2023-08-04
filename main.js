'use strict';

// let item = 'Potato';
// let item = 'Kiwi';
let item = 69;
let type;

switch (item) {
  case 'Apple':
  case 'Banana':
  case 'Kiwi':
  case 'Strawberry':
    type = 'fruit';
    break;
  case 'Lettuce':
  case 'Potato':
  case 'Celery':
  case 'Eggplant':
    type = 'vegetable';
    break;
  default: {
    throw new Error('Unable to identify item...');
  }
}

console.log(`${item} is a type of ${type}`);