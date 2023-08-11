/** @format */

'use strict';

const quotesFromContact = [
	'Had he merely announced his plans to the world, certain complications would ensue. If Hadden was frozen to four degrees Kelvin at ten billion kilometers from Earth, what exactly was his legal status?',
	'Gilgamesh was not equipped with a radio. He no longer wished to know what had happened to the five.',
];

const findString = (str, arr) => {
	let result = arr.filter((elem) =>
		elem.toLowerCase().includes(str.toLowerCase()),
	);

	return result && result.length > 1 ? result : result[0];
};

console.log(`FINDING "HADDEN": "${findString('hadden', quotesFromContact)}"`);

console.log(
	`FINDING "GILGAMESH": "${findString('gilgamesh', quotesFromContact)}"`,
);
