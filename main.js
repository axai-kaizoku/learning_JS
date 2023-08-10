/** @format */

'use strict';

const coords_2 = [
	[
		[12, 45],
		[43, 56],
	],
	[
		[45, 87],
		[98, 75],
	],
	[
		[11, 3],
		[34, 5],
	],
	[
		[42, 67],
		[8, 95],
	],
];

const calcDistance = ([x1, y1], [x2, y2]) =>
	Number(Math.hypot(x2 - x1, y2 - y1).toPrecision(4));
const shortestRoute = coords_2
	.flatMap(([p1, p2]) => calcDistance(p1, p2))
	.filter((elem) => elem)
	.sort((a, b) => b - a);

console.log(shortestRoute);
