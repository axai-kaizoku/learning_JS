/** @format */

'use strict';

const message =
	'Rivercomb is 200 miles from the station and about 150 miles from the airport';
const getDistance = (str) => {
	const pattern = /(?<miles>\d+(?!miles))/g;
	return str.matchAll(pattern);
};

console.log(getDistance(message).next().value[0]);
