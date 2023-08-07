/** @format */

// while

let m = 1,
	oddNums = [];

while (m < 1) {
	oddNums.push(m);
	m += 2;
}

console.log(oddNums.toString());

// do-while

let n = 1,
	oddNumsAgain = [];

do {
	oddNumsAgain.push(n);
	if (n === 15) break;
	n += 2;
} while (n < 1);

console.log(oddNumsAgain);
