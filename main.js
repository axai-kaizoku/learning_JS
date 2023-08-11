/** @format */

'use strict';
const stories = [
	'And poor Jack jumped off the roof in anticipation of a tragic outcome, but instead landed on a haystack, safe and sound and away from the inferno of her former home. He knew the secret too well now.',
	'It is a known fact that secret agents have all the tools at their disposal that helps them collect valuable data in the field.',
];

const findString = (str, arr) => {
	let result = arr.filter((elem) =>
		elem.toLowerCase().includes(str.toLowerCase()),
	);

	return result && result.length > 1 ? result : result[0];
};

console.log(findString('tools', stories))