/** @format */

'use strict';

const coords_1 = [
	[0, 3],
	[11, 7],
	[24, 4],
	[13, 35],
	[54, 33],
	[78, 39],
	[90, 73],
	[
		[12, 45],
		[43, 56],
	],
	[11, 9],
	[
		[45, 87],
		[98, 75],
	],
];

const flatArr = coords_1.flat(2).filter((elem) => `${elem}`);
console.log(flatArr);
