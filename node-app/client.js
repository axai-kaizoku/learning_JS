import net from 'net';

const client = net.connect({ port: 8080 }, () => {
	client.write('Hello server!');
});

client.on('data', (data) => {
	console.log(`Received: ${data.toString()}`);
});
