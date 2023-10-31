const { v4: uuidv4 } = require('uuid');

let notes = [];

exports.getNotes = (req, res) => {
	console.log('message: This is from version 2 Bruh');
	res.json({ message: 'This is from version 2 Bruh' });
};
