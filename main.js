/** @format */

'use strict';

const crew = [
	{
		id: 1,
		name: 'Luffy',
		age: 18,
	},
	{
		id: 2,
		name: 'Zoro',
		age: 19,
	},
	{
		id: 3,
		name: 'Brook',
		age: 100,
	},
	{
		id: 4,
		name: 'Nami',
		age: 21,
	},
	{
		id: 5,
		name: 'Robin',
		age: 30,
	},
	{
		id: 6,
		name: 'Chopper',
		age: 16,
	},
];

const displayList = (arr, sortFn) => {
	sortFn([...arr]).forEach((elem) =>
		console.log(`${elem.name} | ${elem.age} years old`),
	);
};

const byAgeAsc = (arr) => arr.sort((a, b) => a.age - b.age);
const byAgeDesc = (arr) => arr.sort((a, b) => b.age - a.age);
const byNameAsc = (arr) =>
	arr.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
const byNameDesc = (arr) =>
	arr.sort((a, b) => (a.name < b.name ? 1 : a.name > b.name ? -1 : 0));

displayList(crew, byNameDesc);
