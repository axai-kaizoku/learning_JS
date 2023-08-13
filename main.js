'use strict';
const now = new Date();
console.log(`Now: ${now.toLocaleString()}`);

const addDays = (dateObj = new Date(), days = 0) => {
	const daysToMs = days * 864_00_000;
	return new Date(dateObj.getTime() + daysToMs);
};
console.log(addDays(now, 7).toLocaleString());

const addHours = (dateObj = new Date(), hours = 0) => {
	const hoursToMs = hours * 36_00_000;
	return new Date(dateObj.getTime() + hoursToMs);
};
console.log(addDays(now, 2).toLocaleString());

const addMinutes = (dateObj = new Date(), minutes = 0) => {
	const minutessToMs = days * 864_00_000;
	return new Date(dateObj.getTime() + minutessToMs);
};
console.log(addDays(now, 25).toLocaleString());
