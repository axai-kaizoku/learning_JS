/** @format */

'use strict';

const waltDisneyBirthday = new Date('5 December, 1901 00:35:00');

const yearsTo = (date) => {
	const diff = (date = Date.now()) / 3156000000;
	return Math.abs(diff.toPrecision(4));
};

console.log(
	`Walt Disney was born on ${waltDisneyBirthday.toLocaleString(
		'en-IN',
	)}. That was ${yearsTo(waltDisneyBirthday)} years ago!`,
);
