import express from 'express';
import morgan from 'morgan';

const app = express();

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

app.use(morgan(':method - :url - :date -:response-time ms'));

app.get('/', (req, res) => {
	res.render('home');
});

app.post('/', (req, res) => {
	res.json({ message: 'Your post request is handled!' });
});

app.get('/admin', (req, res) => {
	res.send(
		'<h1>This is Admin Route</h1>\n<button><a href="/">Home</a></button>',
	);
});

// Sample in-memory data storage
let posts = [];

// Routes

// Get all posts
app.get('/posts', (req, res) => {
	res.json(posts);
});

// Create a new post
app.post('/posts', (req, res) => {
	// const post = {
	// 	id: Date.now(),
	// 	title: req.body.title,
	// 	content: req.body.content,
	// };
	// posts.push(post);
	// res.status(201).json(post);
	const request = req;
	console.log(request);
});

// Update a post by ID
app.put('/posts/:id', (req, res) => {
	const post = posts.find((p) => p.id === parseInt(req.params.id));
	if (!post) return res.status(404).send('Post not found');

	post.title = req.body.title || post.title;
	post.content = req.body.content || post.content;

	res.json(post);
});

// Delete a post by ID
app.delete('/posts/:id', (req, res) => {
	const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
	if (postIndex === -1) return res.status(404).send('Post not found');

	const deletedPost = posts.splice(postIndex, 1);
	res.json(deletedPost);
});

app.listen(3000, () => {
	console.log('Server is running!');
});
