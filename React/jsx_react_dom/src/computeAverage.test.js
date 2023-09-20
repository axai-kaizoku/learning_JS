const computeAverage = require('./computeAverage');

test('Computes the average of [2, 3, 4, 5] as 3.5', () => {
	expect(computeAverage([2, 3, 4, 5])).toBe(3.5);
});

//./node_modules/.bin/jest
