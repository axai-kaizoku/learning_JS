/** @format */

const loopMe = function (maxCount, counter = 0) {
	if (counter < maxCount) {
		console.log(`This should run 10 times ${counter}`);
		return loopMe(maxCount, counter + 1);
	}
};

loopMe(10);
