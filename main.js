/** @format */

'use strict';

const arrC = [1, 2, 3, 1, 23, 10, { id: 1 }, { id: 2 }, 'Hello'];
const arrD = [1, 2, 3, 1, 23, 10, { id: 1 }, { id: 2 }, 'Hello'];

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
