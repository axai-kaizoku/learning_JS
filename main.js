/** @format */

'use strict';

const { title, publisher, authors, cost} = {
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
	publisher: 'Harper Torch',
	isbn10: '0-06-124270-5',
	cost: 7.99,
};

console.log(
	`${title} is published by ${publisher} and is written by ${authors.map((el) => el.name).join(' and ')}.It costs $${cost}`
)