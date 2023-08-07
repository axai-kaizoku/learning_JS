/** @format */

const averageOfNums = function () {
	let sum = 0;
	for (const i of arguments) {
		sum += i;
	}
	return sum / arguments.length;
};

console.log(averageOfNums(1, 2, 3));
console.log(averageOfNums(3, 4, 5, 6));
