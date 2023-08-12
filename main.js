'use strict';

// DD, d-MM-YYYY at hh:mm:ss
const formatDate = (
	dateObj = new Date(),
	str = 'DD, d-MM-YYYY at hh:mm:ss',
) => {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const formattedDate = str
		.replaceAll('d', dateObj.getDate().toString().padStart(2, 0))
		.replaceAll('DD', days[dateObj.getDay()])
		.replaceAll('MM', months[dateObj.getMonth()])
		.replaceAll('YYYY', [dateObj.getFullYear()])
		.replaceAll('hh', dateObj.getHours().toString().padStart(2, 0))
		.replaceAll('mm', dateObj.getMinutes().toString().padStart(2, 0))
		.replaceAll('ss', dateObj.getSeconds().toString().padStart(2, 0));

	return formattedDate;
};

console.log(
	formatDate(new Date('7 April, 2022 22:45'), 'd MM (DD). The time was hh:mm'),
);
