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

export const removeItem = (itemId) => {
	const confirm = window.confirm('Do you really want to delete the item?');
	if (confirm) {
		shoppingList = shoppingList.filter(({ id }) => id !== itemId);
		return true;
	}
	return false;
};

export const getShoppingList = () => shoppingList;
