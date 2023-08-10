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
const evenNums = numArray.filter((elem) => elem % 2 === 0)
const oddNums = numArray.filter((elem) => elem % 2 !== 0)

console.log(`\nEven: ${evenNums}\n`)
console.log(`Odd: ${oddNums}\n`)

console.log(`Original: ${numArray}\n`);