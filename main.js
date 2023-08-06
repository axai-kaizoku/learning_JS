/** @format */

const computeReturns = function (principal, rateOfInterest = 3, tenure = 1) {
	return principal + (principal * rateOfInterest * tenure) / 100;
};

console.log(computeReturns(1000))