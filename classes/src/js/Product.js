export default class Product {
	constructor(name, cost, acceptingOrders, quantity, description) {
		this.name = name;
		this.cost = cost;
		this.acceptingOrders = acceptingOrders;
		this.quantity = quantity;
		this.description = description;
	}

	stockCost() {
		return this.cost * this.quantity;
	}
	getDesc() {
		return this.description;
	}
	renderUI() {
		const productCard = document.createElement('div');
		productCard.setAttribute('class', 'product');

		const nameDiv = document.createElement('div');
		nameDiv.setAttribute('class', 'name');

		const costDiv = document.createElement('div');
		costDiv.setAttribute('class', 'cost');

		const quantityDiv = document.createElement('div');
		quantityDiv.setAttribute('class', 'quantity');

		const stockCostDiv = document.createElement('div');
		stockCostDiv.setAttribute('class', 'stock-cost');

		const stockBtn = document.createElement('button');
		stockBtn.innerText = 'Stock Cost';

		stockBtn.addEventListener('click', (e) => {
			e.preventDefault();
			alert(`Total Cost: $${this.stockCost()}`);
		});
		stockCostDiv.append(stockBtn);

		const descriptionDiv = document.createElement('div');
		descriptionDiv.setAttribute('class', 'view-description');

		const descBtn = document.createElement('button');
		descBtn.innerText = 'Description';

		descBtn.addEventListener('click', (e) => {
			e.preventDefault();
			alert(`Description : ${this.getDesc()}`);
		});
		descriptionDiv.append(descBtn);

		const buyBtnDiv = document.createElement('div');
		buyBtnDiv.setAttribute('class', 'buy-btn');

		const buyBtn = document.createElement('button');
		buyBtn.innerText = 'Buy';

		buyBtn.addEventListener('click', (e) => {
			e.preventDefault();
			alert(`Buying ${this.name}`);
		});
		if (this.acceptingOrders === 'No') {
			buyBtn.setAttribute('disabled', true);
		}
		buyBtnDiv.append(buyBtn);

		nameDiv.innerText = this.name;
		costDiv.innerText = `$${this.cost}`;
		quantityDiv.innerText = `${this.quantity} unit(s)`;
		productCard.append(
			nameDiv,
			costDiv,
			quantityDiv,
			stockCostDiv,
			descriptionDiv,
			buyBtnDiv,
		);

		return productCard;
	}
}
