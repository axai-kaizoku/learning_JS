import net from 'net';

const server = net.createServer((socket) => {
	socket.write('Hello!');

	socket.on('data', (data) => {
		console.log(`Received: ${data.toString()}`);
	});

	socket.on('error', (err) => {
		console.log(`${err}`);
	});

	socket.on('close', () => {
		console.log('Server connection closed!');
	});
});

server.listen(8080, () => {
	console.log('Server is running on PORT 3000');
});
