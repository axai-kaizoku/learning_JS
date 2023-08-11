/** @format */

'use strict';

const str1 =
	'The captain of this ship, a dangerous man - Captain Roger was known to have killed 10 whales!!';

const str2 =
	'The captain of this ship - a dangerous man, Captain Roger was known to have killed 10 whales!!';

const compareStrings = (str1, str2) =>
	str1.toLowerCase().replaceAll(/[\W+_-]/gi, '') ===
	str2.toLowerCase().replaceAll(/[\W+_-]/gi, '');

console.log(compareStrings(str1, str2));
