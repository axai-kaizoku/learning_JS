import Row from './Row';

const totalQuantity = document.querySelector('.total-quantity');
const totalCost = document.querySelector('.total-cost');
const totalEachCost = document.querySelector('.total-eachcost');
const itemRows = document.querySelector('.item-rows');

export const renderTotals = (cart) => {
	const eachCost = cart
		.reduce((prev, item) => prev + item.itemCost, 0)
		.toPrecision(4);
	totalEachCost.innerText = eachCost;
	const cost = cart
		.reduce((prev, item) => prev + item.cost * item.quantity, 0)
		.toPrecision(6);
	const quantity = cart.reduce((prev, item) => prev + item.quantity, 0);

	totalQuantity.innerText = quantity;
	totalCost.innerText = cost;
};

export const renderRows = (rows) => {
	const eachCost = rows.map((element) => {
		element.itemCost = element.cost / element.quantity;
		return `${element.itemCost}`;
	});
	const domNodes = rows.map(({ product, itemCost, quantity, cost }) =>
		Row(product, itemCost, quantity, cost.toPrecision(5)),
	);
	console.log(domNodes.join(''));

	itemRows.innerHTML = domNodes.join('');
};
