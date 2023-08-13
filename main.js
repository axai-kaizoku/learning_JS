'use strict';

// commented line are for including difference between years function but not implemented yet...

const dates = [
	['10 Feb, 2021', '1 Mar, 2021'],
	['25 Dec, 2020', '25 Dec, 1999'],
	['1 Jan, 2021', '1 Jan, 1954'],
];

const dateDiff = (start, end, format = 'D') => {
	// const years = function diff_years(end, start) {
	// 	var diff = (end.getTime() - start.getTime()) / 1000;
	// 	diff /= 60 * 60 * 24;
	// 	return Math.abs(Math.round(diff / 365.25));
	// };
	const diff = end - start;
	const suffix = diff <= 0 ? 'elapsed...' : 'left...';
	// years = `${years()} years`;
	const days = `${(Math.abs(diff) / 86400000).toPrecision(2)} days`;
	const hours = `${Math.ceil(diff) / 3600000} hours`;
	const minutes = `${Math.ceil(diff) / 60000} minutes`;
	const seconds = `${Math.ceil(diff) / 1000} seconds`;

	switch (format) {
		// case 'Y': {
		// 	return `${years} ${suffix}`;
		// }
		case 'D': {
			return `${days} ${suffix}`;
		}
		case 'H': {
			return `${hours} ${suffix}`;
		}
		case 'M': {
			return `${minutes} ${suffix}`;
		}
		case 'S': {
			return `${seconds} ${suffix}`;
		}
	}
};

dates.forEach(([d1, d2]) => {
	const dateD1 = new Date(d1);
	const dateD2 = new Date(d2);
	console.log(
		`Diff between ${d1} and ${d2} is ${dateDiff(dateD1, dateD2, 'D')}`,
	);
});
