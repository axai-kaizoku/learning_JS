/** @format */

'use strict';

const calcPower = function (num, power = 1) {
	if (power !== 1) {
		return num * calcPower(num, power - 1);
	}

	return num;
};

console.log(calcPower(2));
