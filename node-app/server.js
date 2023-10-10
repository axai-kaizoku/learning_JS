import net from 'net';

const server = net.createServer(function (connection) {
	console.log('Connection Made!');
});

server.listen(8080, () => {
	console.log('Server is running on PORT 3000');
});
