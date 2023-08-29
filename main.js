function* getIds() {
	let n = 0;
	while (n <= 10) {
		yield parseInt(Math.random() * 20000);
		n++;
	}
}

const idIterable = getIds();

let loop = setInterval(() => {
	let { value, done } = idIterable.next();
	if (done) return clearInterval(loop);
	console.log(value);
}, 900);
