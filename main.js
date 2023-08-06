/** @format */

'use strict';

const Product = function (name, description, cost, stock) {
	this.name = name;
	this.description = description;
	this.cost = cost;
	this.stock = stock;
	let revenue = 0;

	this.buy = (qty) => {
		if (qty <= this.stock) {
			this.stock -= qty;
			let costOfOrder = qty * this.cost;
			revenue += costOfOrder;
			console.log(`${qty} of ${this.name}: $${costOfOrder}`);
		} else {
			console.log(`Out of stock!`);
		}
	};
	this.getStock = () =>
		`Available Quantity (${this.name}): ${this.stock} units\n`;

	this.salesReport = () => `Total sales for ${this.name}: $${revenue}\n`;
};

const vPhone = new Product(
	'vPhone 12 pro',
	'The fastest smartphone ever',
	800,
	25,
);

const tapBookPro = new Product(
	'TapBook Pro V2',
	'Our thinnest laptop ever',
	1250,
	40,
);

vPhone.buy(2);
vPhone.buy(12);


console.log(vPhone.salesReport());
console.log(vPhone.getStock());

tapBookPro.buy(2);
tapBookPro.buy(12);
tapBookPro.buy(12);

console.log(tapBookPro.salesReport());
