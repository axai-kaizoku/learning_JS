import http from 'http';

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-type': 'text/plain' });
	res.end('Hello World!');
});

server.listen(80, () => {
	console.log('Server is running!');
});
