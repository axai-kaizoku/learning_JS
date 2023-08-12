/** @format */

'use strict';

const log = (str) => console.log(str);
const now = new Date();

const showTime = (date = Date()) => {
	const dateObj = new Date(date);
	return `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
};

log(showTime(new Date('3 April, 2021 20:35')));
// log(now.toLocaleString())