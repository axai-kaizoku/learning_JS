/** @format */

'use strict';

const steps = 6;

for (let x = 1; x <= steps; x++) {
	console.log(`${' '.repeat(x)}${'*'.repeat(steps + 1 - x)}`);
}

for (let x = steps; x >= 1; x--) {
	console.log(`${' '.repeat(x)}${'*'.repeat(steps + 1 - x)}`);
}
