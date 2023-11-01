function multiply(a, b) {
	return a * b;
}

expect(multiply(2, 3)).toBe(3);

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected} bruh!`);
			}
		},
	};
}
