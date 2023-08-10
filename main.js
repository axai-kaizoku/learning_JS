/** @format */

'use strict';

const arrC = ['Cheese Cubes', 'Pasta', 'Milk', 'Coke Zero', 'Apples'];
const arrD = ['Pasta', 'Cheese Cubes', 'Apples', 'Milk', 'Coke Zero'];

const hasSameContents = (arrA, arrB) => {
	const stringA = arrA.map((el) => JSON.stringify(el));
	const stringB = arrB.map((el) => JSON.stringify(el));
	// console.log(stringA)

	return [
		arrA.length === arrB.length,
		...stringA.map((el) => stringB.includes(el)),
		...stringB.map((el) => stringA.includes(el)),
	].every((el) => el);
};

console.log(
	hasSameContents(arrC, arrD)
	? 'Both arrays have identical content'
	: 'Both arrays do not have identical content'
);
