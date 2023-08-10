/** @format */

'use strict';

const desk = ['Laptop', 'Mouse', 'Speakers', 'Monitors', 'Microphone'];

const move = (arr, start, count, moveTo) => {
	const clone = [...arr];
	clone.splice(moveTo, 0, ...clone.splice(start, count));
	return clone;
};

let newDesk = move(desk, 2, 2, 1);

let newDesk1 = move(desk, 0, 1, 1);
console.log(newDesk1);
