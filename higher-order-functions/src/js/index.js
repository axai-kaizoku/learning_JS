import cart from './cart.json';
import currencyRates from './currencyRates.json';
import { renderRows, renderTotals } from './view';

const currencyPicker = document.querySelector("select[name='currency-picker']");

currencyPicker.innerHTML = Object.keys(currencyRates)
	.map((key) => `<option>${key}</option>`)
	.join('');
// console.log(currencyPicker);

const currencyConvert = function (currency, rates, fn) {
	const conversionRate = rates[currency] ?? 2;
	return (cart) => {
		const revised = cart.map((item) => {
			return {
				...item,
				cost: item.cost * conversionRate,
			};
		});
		return fn(revised);
	};
};

const computeCart = function () {
	const currency = currencyPicker?.value;
	// console.log(currency);
	currencyConvert(currency, currencyRates, renderRows)(cart);
	currencyConvert(currency, currencyRates, renderTotals)(cart);
	// renderRows(cart);
	// renderTotals(cart);
};

currencyPicker.addEventListener('change', computeCart);
computeCart();
