import dns from 'dns';

dns.resolve('www.google.com', (err, address) => {
	console.log(address);
});
