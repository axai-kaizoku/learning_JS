/** @format */

'use strict';

const data = [
	'SENSE01,1123,23,55,0.52',
	'SENSE01,1200,22.3,65,0.77',
	'SENSE01,1343,23.6,75,0.872',
	'SENSE02,1234,29.2,85,0.76',
	'SENSE02,1203,17,20,0.77',
	'SENSE02,1453,14,45,0.59',
];

const readDataToObj = (key, arr) =>
	arr
		.filter((el) => el.startsWith(key))
		.filter((el) => el.split(',')[4] > 0.75)
		.map((el) => {
			const [sensor, time, temp, humidity, accuracy] = el.split(',');

			return {
				sensor,
				time,
				temp,
				humidity,
				accuracy,
			};
		});

console.log(readDataToObj('SENSE01', data))
