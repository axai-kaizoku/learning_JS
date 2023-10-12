import http2 from 'http2';

let books = [];

const server = http2.createServer();

const postBook = (stream, header) => {
	let body = '';

	stream.on('data', (data) => {
		body += data;
	});

	stream.on('end', () => {
		body = JSON.parse(body);
		books[body.title] = body.author;

		stream.respond({
			':status': 200,
		});

		stream.end('Added book!');
		console.log(books);
	});
};

const getBook = (stream, header) => {
	stream.write('Here are the books!');
	console.log(books);
};

const notFoundHandler = (stream, headers) => {
	stream.respond({
		':status': 404,
	});
	stream.write('404  x_x');
	stream.end('Path not found');
};

const router = (stream, headers) => {
	const path = headers[':path'];
	const method = headers[':method'];
	let handler;

	if (path === '/' && method === 'POST') {
		handler = postBook;
	} else if (path === '/' && method === 'GET') {
		handler = getBook;
	} else {
		handler = notFoundHandler;
	}

	handler(stream, headers);
};

server.on('stream', router);

server.listen(8000, () => {
	console.log('Server is running!');
});
