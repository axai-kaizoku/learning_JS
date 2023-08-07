/** @format */

const loopMe = function loop(maxCount, counter = 0) {
	if (counter < maxCount) {
		console.log(`This should run 10 times ${counter}`);
		return loop(maxCount, counter + 1);
	}
};

loopMe(10);
