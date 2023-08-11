/** @format */

'use strict';
const post =
	'The Calzone at the #Pizza Mill #foodie #calzone #italian #dindin #foodpics #foodblogger #weekend #fun';

	const getTags = (post) => {
		const pattern = /(?<=#)\w+/gi;
		const detect = post.match(pattern);
		return detect && detect.length > 1 ? detect : detect[0];
	}

	console.log(getTags(post));