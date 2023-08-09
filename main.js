/** @format */
'use strict';
const mcs = [
	{
		id: 1,
		name: 'luffy',
		age: 22,
		anime: 'onepiece',
	},
	{
		id: 2,
		name: 'naruto',
		age: 18,
		anime: 'naruto',
	},
	{
		id: 3,
		name: 'ichigo',
		age: 20,
		anime: 'bleach',
	},
	{
		id: 4,
		name: 'goku',
		age: 23,
		anime: 'dragonball',
	},
];

const findMC = (name, arr) =>
	arr.find((elem) => elem.name === name)?.anime || 'No MC found...';

// console.log(findMC('goku', mcs));
// console.log(findMC('kira', mcs));

// console.log(mcs.findIndex((elem) => elem.age === 18));

console.log([1, 2, 3, 4].includes(3));
