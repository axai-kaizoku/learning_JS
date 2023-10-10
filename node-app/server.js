import http from 'http';
import url from 'url';

http
	.createServer((req, res) => {
		if (req.method === 'GET') {
			res.write('GET request received!');
		} else {
			res.write('Other request received!');
		}
		res.end();
	})
	.listen(80);
