/** @format */

'use strict';

const article =
	'The movie starring Johnny Depp was released to the masses on a social networking site which created quite a buzz in the industry due to its unconventional approach.';
	

	const findActor = (str, actor) => {
		const pattern = new RegExp(actor, 'gi');
		// return pattern.test(str);
		return str.search(pattern);
	}

	// console.log(findActor(article, 'johnny deep')) // this doesn't work
	console.log(findActor(article, 'Johnny Depp'))