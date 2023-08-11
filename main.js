/** @format */

'use strict';

const words = ['Civic:', 'Seltos', 'Car', 'Noon', 'Refer', 'Tenet', 'Design'];

const isPalindrome = (str) => {
	const starAProc = str
		.toLowerCase()
		.replaceAll(/\s/g, '')
		.replaceAll(/[:;'"!@#$%^&*]/g, '');

	const starBProc = str
		.toLowerCase()
		.replaceAll(/\s/g, '')
		.replaceAll(/[:;'"!@#$%^&*]/g, '')
		.split('')
		.reverse()
		.join('');

	return starAProc === starBProc;
};

words.forEach((w) => {
	console.log(`${w} ${isPalindrome(w) ? 'is' : 'is not'} a palindrome`);
});
