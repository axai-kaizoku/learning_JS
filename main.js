/** @format */

const numArray = [
	[2, 3],
	[12, 23],
	[23, 2],
	[45, 20.9],
	[64, 98],
];

const toSum = (arr) => arr.map(([a, b]) => a + b);

console.log(toSum(numArray));
