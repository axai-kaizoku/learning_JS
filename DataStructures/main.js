class Product {
	constructor() {
		this.name = '';
		this.price = 0;
	}

	printProduct() {
		console.log(
			`${this.price} is the price of product named with ${this.name}`,
		);
	}
}

const computer = new Product();

computer.name = 'Macbook M2';
computer.price = 799.99;

computer.printProduct();
