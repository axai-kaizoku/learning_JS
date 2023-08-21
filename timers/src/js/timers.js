let typeWriterTimer;
let loopThroughTimer;

export const typeWriter = function (str, sel, typeDelay = 1000) {
	sel.innerHTML = '';
	let breakApart = str.split('').map((e) => e.replace(/\n/g, '<br>'));
	console.log(breakApart);
	let count = 0;
	return function timer() {
		sel.innerHTML += breakApart[count];
		console.log(sel);
		count++;
		count < breakApart.length &&
			(typeWriterTimer = setTimeout(timer, typeDelay));
	};
};

export const loopThrough = function (arr, sel, fn, hold = 5000, typeDelay) {
	let count = 0;
	return {
		play: function timer() {
			fn(arr[count], sel, typeDelay)();
			count++;
			count >= arr.length && (count = 0);
			loopThroughTimer = setTimeout(timer, hold);
		},
		stop: function () {
			clearTimeout(loopThroughTimer);
		},
	};
};
