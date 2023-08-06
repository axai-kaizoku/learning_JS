/** @format */

const calcBmi = function (weight = 70, height = 180) {
	return {
		weight,
		height,
		bmi: weight / (height / 100) ** 2,
	};
};

console.log(calcBmi(65, 180));
