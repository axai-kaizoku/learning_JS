const express = require('express');
const bodyParser = require('body-parser');

const notev1 = require('./routes/v1/notev1');
const notev2 = require('./routes/v2/notev2');
const authRoutesv1 = require('./routes/v1/authv1');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.json({ message: 'Hello Noter!' });
});

app.use('/v1/login', authRoutesv1);
app.use('/v1/notes', notev1);
app.use('/v2/notes', notev2);

app.listen(PORT, () => {
	console.log('Server is running on PORT 3000!');
});
