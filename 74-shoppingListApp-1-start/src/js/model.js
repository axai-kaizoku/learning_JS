let shoppingList = [];

export const addToShoppingList = (item) => {
	const itemId = `${parseInt(
		Math.random() * 100000,
	)} - ${new Date().getTime()}`;

	shoppingList.push({
		id: itemId,
		item,
		priority: 'normal',
	});
};

export const getShoppingList = () => shoppingList;

export const setPriority = (itemId, priority) => {
	shoppingList = shoppingList.map((item) => {
		if (item.id === itemId) {
			return {
				...item,
				priority,
			};
		}
		return item;
	});
};
