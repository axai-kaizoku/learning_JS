'use strict';

let a = 20;
let b = 50;
// let action = 'ADD';
// let action = 'SUBTRACT';
let action = 'MULTIPLY';
// let action = 'DIVIDE';

switch (action) {
  case 'ADD': {
    let result = a + b;
    console.log(`The sum of ${a} and ${b} is ${result}`);
    break;
  }
  case 'SUBTRACT': {
    let result = a - b;
    console.log(`The subtraction of ${a} and ${b} is ${result}`);
    break;
  }
  case 'MULTIPLY': {
    let result = a * b;
    console.log(`The multiplication of ${a} and ${b} is ${result}`);
    break;
  }
  case 'DIVIDE': {
    let result = a / b;
    console.log(`The division of ${a} and ${b} is ${result}`);
    break;
  }
}