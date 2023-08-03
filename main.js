'use strict';

// Compute a sum
var a = '10';
var b = 20;
try {
  if (typeof a != typeof b)
    throw new Error('Both operands must belong to the same data type!');
  var c = a + b;
  console.log(`The result of the sum is ${c}`);
} catch (error) {
  console.log(error);
} finally {
  console.log('I will run no matter what!');
}

// Display the value of PI
var pi = Math.PI;
console.log(`The value of PI is ${pi}`);