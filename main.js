/** @format */

'use strict';
const emotion = (score) => {
	const emojis = [
		'\u{1F620}',
		'\u{1F641}',
		'\u{1F610}',
		'\u{1F642}',
		'\u{1F60d}',
	];
	switch (score) {
		case 1:
			return emojis[0];
		case 2:
			return emojis[1].repeat(2);
		case 3:
			return emojis[2].repeat(3);
		case 4:
			return emojis[3].repeat(4);
		case 5:
			return emojis[4].repeat(5);
		default:
			return emojis[2];
	}
};

console.log(emotion(5));
