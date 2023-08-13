'use strict';

const date = new Date(2023, 7, 13);

const addDays = (dateObj, days = 0) => {
	const daysToMs = days * 864_00_000;
	return new Date(dateObj.getTime() + daysToMs);
};

console.log(`Vinayaka Chavithi is on ${addDays(date, 37)}`);
