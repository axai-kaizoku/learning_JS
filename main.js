'use strict';

const crew = [
	{
		name: 'Luffy',
		age: 18,
		role: 'Captain',
	},
	{
		name: 'Zoro',
		age: 19,
		role: 'Swordsman',
	},
	{
		name: 'Brook',
		age: 100,
		role: 'musician',
	},
	{
		name: 'Nami',
		age: 21,
		role: 'navigator',
	},
	{
		name: 'Robin',
		age: 30,
		role: 'archeologist',
	},
	{
		name: 'Chopper',
		age: 16,
		role: 'doctor',
	},
];

const findCrewmen = ([prop, val], arr) => arr.filter((elem) => elem[prop] === val);

console.log(findCrewmen(['role', 'navigator'], crew))