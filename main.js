'use strict';

const dateA = new Date('14 Aug, 2023 00:00:00');
const dateB = new Date('19 Sep, 2023 00:00:00');

const dateDiff = (start, end, format) => {
	const diff = end - start;
	const hasElapsed = diff <= 0;
	const suffix = hasElapsed ? 'elapsed...' : 'left...';
	const days = `${((hasElapsed ? -diff : diff) / 86400000).toPrecision(
		2,
	)} days`;
	const hours = `${Math.ceil((hasElapsed ? -diff : diff) / 3600000)} hours`;
	const minutes = `${Math.ceil((hasElapsed ? -diff : diff) / 3600000)} hours`;
	const seconds = `${Math.ceil((hasElapsed ? -diff : diff) / 3600000)} hours`;

	switch (format) {
		case 'D':
			return `${days} ${suffix}`;
		case 'H':
			return `${hours} ${suffix}`;
		case 'M':
			return `${minutes} ${suffix}`;
		case 'S':
			return `${seconds} ${suffix}`;
		default:
			return `Invalid format string`;
	}
};

console.log(dateDiff(dateA, dateB, 'D'));
