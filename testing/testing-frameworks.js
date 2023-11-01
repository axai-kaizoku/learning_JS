function test(title, callback) {
	try {
		callback();
		console.log(`✅ ${title}`);
	} catch (err) {
		console.log(`❌ ${title}`);
		console.error(err);
	}
}

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected} bruh!`);
			}
		},
	};
}

module.exports = { test, expect };
