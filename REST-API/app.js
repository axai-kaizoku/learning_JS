const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

let notes = [];

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json({ message: 'Hello Noter!' });
});

app.get('/v2/notes', (req, res) => {
	console.log('message: This is from version 2 Bruh');
	res.json({ message: 'This is from version 2 Bruh' });
});

app.get('/v1/notes', (req, res) => {
	console.log('message: This is from version 1 Bruh');

	res.send(notes);
});

app.post('/v1/notes', (req, res) => {
	const note = req.body;
	notes.push({ ...note, id: uuidv4() });
	res.json({ message: `Created a note ${note.title}` });
});

app.get('/v1/notes/:id', (req, res) => {
	const { id } = req.params;

	const note = notes.find((note) => note.id === id);

	res.json({ note });
});

app.delete('/v1/notes/:id', (req, res) => {
	const { id } = req.params;
	notes = notes.filter((note) => note.id !== id);
	res.json({ message: `A note ${id} was deleted!` });
});

app.patch('/v1/notes/:id', (req, res) => {
	const { id } = req.params;
	const { title, content, isDraft } = req.body;
	const note = notes.find((note) => note.id === id);
	if (title) {
		note.title = title;
	}
	if (content) {
		note.content = content;
	}
	if (isDraft) {
		note.isDraft = isDraft;
	}
	res.json(`Updated ${id}`);
});

app.listen(PORT, () => {
	console.log('Server is running on PORT 3000!');
});
