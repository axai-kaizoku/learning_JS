import http from 'http';
import url from 'url';

http
	.createServer((req, res) => {
		const q = url.parse(req.url, true);
		console.log(q);
		res.writeHead(200, { 'Content-type': 'text/html' });
		res.write('Hello!');
		res.end();
	})
	.listen(80);
