const { v4: uuidv4 } = require('uuid');
const validator = require('express-validator');

const { validationResult } = validator;

let notes = [];

exports.getNotes = (req, res) => {
	console.log('message: This is from version 1 Bruh');

	res.send(notes);
};

exports.addNote = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });
	const note = req.body;
	notes.push({ ...note, id: uuidv4() });
	res.json({ message: `Created a note ${note.title}` });
};

exports.getNote = (req, res) => {
	const { id } = req.params;

	const note = notes.find((note) => note.id === id);

	res.json({ note });
};

exports.deleteNote = (req, res) => {
	const { id } = req.params;
	notes = notes.filter((note) => note.id !== id);
	res.json({ message: `A note ${id} was deleted!` });
};

exports.updateNote = (req, res) => {
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
};
