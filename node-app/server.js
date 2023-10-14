import Waffle from './lib';
const server = new Waffle();

server.get('/', (res) => {
	res.send('Hello from Waffle!');
});

server.get('/about', (res) => {
	res.send('This is the About Page!');
});

server.get('/api', (res) => {
	res.json({
		name: 'Monkey D Luffy',
		occupation: 'Strawhat pirate crew Captain',
		city: 'Northern Land',
	});
});

server.get('/blog', (res) => {
	res.html('blog');
});

server.start(3000, () => {
	console.log('Server is running on PORT 3000');
});
