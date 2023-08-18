import { addToShoppingList } from './model';
import { renderShoppingList } from './view';

const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');
const clearCompletedBtn = document.querySelector('#clear-completed');

itemInput.addEventListener('keyup', function (evt) {
	if (evt.key === 'Enter') {
		// Add to shopping list
		addToShoppingList(evt.target.value);
		// update the view
		renderShoppingList();
		this.value = '';
	}
});
