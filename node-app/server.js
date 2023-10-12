import http2 from 'http2';

const helloHandler = (stream, headers) => {
	console.log(headers);
	stream.respond({
		':status': 200,
	});
	stream.write('Getting huh?');
	stream.end('Hello!');
};

const notFoundHandler = (stream, headers) => {
	stream.respond({
		':status': 404,
	});
	stream.write('404 x_x');
	stream.end('Path not found!');
};

const server = http2.createServer();

const router = (stream, headers) => {
	const path = headers[':path'];
	const method = headers[':method'];

	let handler;

	if (path === '/' && method === 'GET') {
		handler = helloHandler;
	} else {
		handler = notFoundHandler;
	}

	handler(stream, headers);
};

server.on('stream', router);

server.listen(8000, () => {
	console.log('Server is running');
});