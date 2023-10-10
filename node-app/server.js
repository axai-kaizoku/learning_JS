import net from 'net';
let sockets = [];

const broadcast = (data) => {
	sockets.forEach((socket) => {
		socket.write(data);
	});
};

const server = net.createServer((socket) => {
	sockets.push(socket);

	socket.on('data', (data) => {
		broadcast(data);
	});

	socket.on('error', (err) => {
		console.log(`${err}`);
	});

	socket.on('close', () => {
		console.log('Connection closed from client!');
	});
});

server.listen(8080, () => {
	console.log('Server is connected to PORT 8080');
});
