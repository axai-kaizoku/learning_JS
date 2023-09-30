const product = {
	name: 'Iphone',
	price: 1890.99,
	model: 'XR 780',
	get prod() {
		return this.name;
	},
	set prod(prod) {
		if (prod !== '') {
			this.name = prod;
		}
	},
};

product.name = '';

console.log(product.prod);

// for (prop in product) {
// 	console.log(`The property is \"${prop}\" and value is \"${product[prop]}\"`);
// }
