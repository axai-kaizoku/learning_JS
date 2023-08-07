/** @format */

'use strict';

let m = 0,
	n = 1,
	evenNumbers = [],
	oddNumbers = [];

// Use the while loop here
while (m < 100) {
	evenNumbers.push(m);
	m += 2;
}

// Use the do-while loop here
do {
	oddNumbers.push(n);
	n += 2;
} while (n <= 100);

console.log(`Even Numbers (0 - 100): ${evenNumbers.toString()}`);
console.log('--------------------------------------');
console.log(`Odd Numbers (0 - 100): ${oddNumbers.toString()}`);
