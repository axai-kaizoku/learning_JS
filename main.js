/** @format */

'use strict';

const book = {
	id: 1,
	title: 'Freakonomics',
	authors: [
		{
			authorCode: 210,
			name: 'Steven D. Levitt',
		},
		{
			authorCode: 231,
			name: 'Stephen J. Dubner',
		},
	],
	isbn10: '0-06-124270-5',
	cost: 7.99,
};

let { title, authors, cost, publisher } = {
	...book,
	publisher: 'Harper Torch',
	title: 'Freaknomoics 2011',
};

console.log(
	`${title} published by ${publisher} is written by ${authors.map(
		(elem) => elem.name
	)}`,
);
