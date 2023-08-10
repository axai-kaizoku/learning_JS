/** @format */

'use strict';

const arrA = [1, 2, 3, 1, 23, 10, { id: 1 }, { id: 2 }, 'Hello'];
const arrB = [1, 2, 3, 1, 23, 10, { id: 1 }, { id: 2 }, 'Hello'];

const isIdentical = (arrA, arrB) => 
JSON.stringify(arrA) === JSON.stringify(arrB);

console.log(
	`Array A ${isIdentical(arrA, arrB) ? 'is' : 'is not'} equal to Array B`
)