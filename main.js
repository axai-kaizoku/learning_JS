/** @format */

'use strict';

const today = new Date();

console.log(
	`New Delhi: ${today.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}`,
);
console.log(
	`Singapore: ${today.toLocaleString('en-US', { timeZone: 'Asia/Singapore' })}`,
);
console.log(
	`New York: ${today.toLocaleString('en-US', {
		timeZone: 'America/New_York',
	})}`,
);
console.log(`Tokyo: ${today.toLocaleString('en-US', { timeZone: 'Japan' })}`);
