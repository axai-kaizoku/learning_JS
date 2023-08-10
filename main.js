/** @format */

'use strict';

const myArr = [
	1,
	2,
	{
		id: 1,
		key: 12,
	},
	2,
	{
		id: 1,
		key: 12,
	},
	4,
	5,
];

const removeDup = (arr) =>
	arr.reduce(
		(acc, curr) =>
			!acc.some((elem) => JSON.stringify(elem) === JSON.stringify(curr))
				? [...acc, curr]
				: acc,
		[],
	);

console.log(myArr);
console.log(removeDup(myArr));
