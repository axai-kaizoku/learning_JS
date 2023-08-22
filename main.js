function funcOne() {
	return 'Hi from Function One';
}

function funcTwo(cb) {
	setTimeout(function () {
		cb('Hello from function two');
	}, 0);
}

function funcThree() {
	return 'Hello from function three';
}

console.log(funcOne());
funcTwo((out) => console.log(out));
console.log(funcThree());
