import express from 'express';
import { join } from 'path';
const app = express();

app.use('/assets', express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.status(200).send('<h1>Blog Chef says Hello!</h1>');
});

app
	.get('/admin/login', (req, res) => {
		res.sendFile(join(__dirname, 'views', 'login.html'));
	})
	.post('/admin/login', (req, res) => {
		res.send('Handle Login Here!');
	});

app.listen(3000, () => console.log('Blog Chef is cooking on port 3000'));
