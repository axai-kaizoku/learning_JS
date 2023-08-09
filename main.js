/** @format */

const numArray = [
	[2, 3],
	[12, 23],
	[0, 1],
	[59, 59.5],
];

const isGreater = (a, b) =>
	a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;

numArray.forEach((elem) => console.log(isGreater(...elem)));
