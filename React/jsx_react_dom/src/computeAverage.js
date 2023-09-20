const computeAverage = (array) => {
	return array.reduce((prev, curr) => prev + curr, 0) / array.length;
};

module.exports = computeAverage;
