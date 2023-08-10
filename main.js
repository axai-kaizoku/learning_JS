/** @format */

'use strict';

const hollywoodDirectors = [
	'Martin Scorsese',
	'David Dhawan',
	'Steven Spielberg',
	'Christopher Nolan',
	'Quentin Tarantino',
	'James Cameron',
];


const removeAndInsert = (arr, elem, newElem) => {
	const findElem = arr.findIndex((e) => e === elem);
	const tempArray = [...arr];
	tempArray.splice(findElem, 1, newElem);
	return tempArray;
};

const topThree = (arr) => arr.slice(0, 3);

const revisedList = removeAndInsert(
	hollywoodDirectors,
	'David Dhawan',
	'Davis Diley',
);
const directors = topThree(revisedList);

console.log(`Hollywood Masterclass featuring ${directors}`);
