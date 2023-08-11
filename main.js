/** @format */

'use strict';
const text =
	'Whether its color or colour, it is all the same. The human eye can see a wide gamut of colours, which makes us unique as a species.';
const pattern = /colou?rs?/g;

let results;
while ((results = pattern.exec(text)) !== null) {
	console.log(results[0]);
}
