/** @format */

const randomNums = (count) =>
	Array.from(new Array(count), (elem) => parseInt(Math.random() * 100));

console.log(randomNums(5));
