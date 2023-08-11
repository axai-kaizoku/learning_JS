/** @format */

'use strict';

const book = {
	isbn: '0-671-00410-7',
	title: 'Contact',
	author: 'Carl Sagan',
	publisher: 'Pocket Books',
};

Object.freeze(book);

try {
	book.isbn = null;
	book.title = null;
	book.author = null;
	book.publisher = 'Hacked';
	book.intro = function () {
		console.log('This object has been hacked!');
	};

	console.log(book.intro());
} catch (e) {
	console.log(e.message);
} finally {
	console.log(book);
}
