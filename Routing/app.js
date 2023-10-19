import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const PORT = 3000;
const MESSAGES_PATH = './messages.json';

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/contact', (req, res) => {
	const formData = {
		name: req.body.name,
		email: req.body.email,
		message: req.body.message,
		date: new Date().toISOString(),
	};

	// Read existing messages from JSON file
	let messages = [];
	if (fs.existsSync(MESSAGES_PATH)) {
		const rawData = fs.readFileSync(MESSAGES_PATH);
		messages = JSON.parse(rawData);
	}

	// Add new message to the array and save to JSON file
	messages.push(formData);
	fs.writeFileSync(MESSAGES_PATH, JSON.stringify(messages));

	res.send('<h1>Thank you for your message! It has been stored.</h1>');
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
