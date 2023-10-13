import cluster from 'cluster';
import http from 'http';

const numCpus = 4;

if (cluster.isPrimary) {
	for (let i = 0; i < numCpus; i++) {
		cluster.fork();
	}
} else {
	http
		.createServer((req, res) => {
			res.writeHead(200);
			res.end(`Process ${process.pid} says hello!`);
		})
		.listen(8000, () => {
			console.log('Server is up and running!\n     ', process.pid);
		});
}
