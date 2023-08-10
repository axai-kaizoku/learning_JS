/** @format */

'use strict';

function genNum() {
	const randomNum = [];
	let num;
	for (let i = 0; i < 10; i++) {
		num = Math.floor(10 + Math.random() * 1000);
		randomNum.push(num);
	}
	return randomNum;
}

const numArray = [...genNum()];
const asc = [...numArray].sort((a, b) => a - b);
const desc = [...numArray].sort((a, b) => b - a);

console.log(`Ascending: ${asc}`);
console.log(`Descending: ${desc}`);
console.log(`Original: ${numArray}`);
