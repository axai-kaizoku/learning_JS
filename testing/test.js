const { divide, multiply } = require('./math');
const { test, expect } = require('./testing-frameworks');

const multiplyTest = () => {
	const result = multiply(4, 5);
	const expected = 20;

	expect(result).toBe(expected);
};

test('multiply', multiplyTest);

const divideTest = () => {
	const result = divide(10, 5);
	const expected = 20;

	expect(result).toBe(expected);
};

test('divide', divideTest);
