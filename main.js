let startMs = Date.now();

function multipleTimeouts() {
	let delay = 1000;

	setTimeout(function () {
		console.log(`First one : ${Date.now() - startMs}ms`);
	}, delay);
	setTimeout(function () {
		for (let i = 0; i < 1000000000; i++) {}
		console.log(`Second one : ${Date.now() - startMs}ms`);
	}, delay);
	setTimeout(function () {
		console.log(`Third one : ${Date.now() - startMs}ms`);
	}, delay);
	setTimeout(function () {
		console.log(`Fourth one : ${Date.now() - startMs}ms`);
	}, delay);
}

multipleTimeouts();
