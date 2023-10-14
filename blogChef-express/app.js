import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.status(200).send('<h1>Blog Chef says Hello!</h1>');
});

app.listen(3000, () => console.log('Blog Chef is cooking on port 3000'));
