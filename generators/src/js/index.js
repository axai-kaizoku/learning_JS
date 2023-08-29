// Write your code here...
const multiplicand = document.querySelector('input[name=multiplicand]');
const multiplierLimit = document.querySelector('input[name=multiplierLimit]');
const controls = document.querySelector('.controls');
const createBtn = document.querySelector('#createBtn');
const stepBtn = document.querySelector('#stepThrough');
const entireTableBtn = document.querySelector('#entireTable');
const table = document.querySelector('.table');
const tableDetails = document.querySelector('.table-details');
const delayMS = document.querySelector('input[name=delay]');

const Row = (str) => `<div class="row">${str}</div>`;
const setupUI = () => {
	// Unhide (if initially hidden) controls
	controls.style.visibility = 'visible';
	// Empty out the table
	table.innerHTML = '';
	// Unhide (if initially hidden) table
	table.style.visibility = 'visible';
	// Enable 'Entire Table' button
	entireTableBtn.removeAttribute('disabled');
	// If playback delay is 0ms, then disable the step button
	// else enable it
	if (Number(delayMS.value) !== 0) {
		stepBtn.setAttribute('disabled', true);
	} else {
		stepBtn.removeAttribute('disabled');
	}

	// Populate table details
	tableDetails.innerText = `Table of ${multiplicand.value} (1 - ${multiplierLimit.value})`;
	// Display table details
	tableDetails.style.visibility = 'visible';
};

let tableFn;
let tableIterable;

const createIterable = (mpc, limit = 10) =>
	function* tableOf() {
		let step = 1;
		while (step <= limit) {
			yield `${mpc} X ${step} = ${mpc * step}`;
			step++;
		}
	};

createBtn.addEventListener('click', () => {
	setupUI();
	tableFn = createIterable(
		Number(multiplicand.value),
		Number(multiplierLimit.value),
		Number(delayMS.value),
	);
	tableIterable = tableFn();
});

stepBtn.addEventListener('click', async () => {
	entireTableBtn.setAttribute('disabled', true);
	let { value, done } = tableIterable.next();
	if (!done) {
		let row = Row(value);
		table.innerHTML += row;
	}
});

entireTableBtn.addEventListener('click', async () => {
	table.innerHTML = '';
	stepBtn.setAttribute('disabled', true);
	// let getTable = [...tableFn()];
	// let Elems = getTable.map((e) => Row(e));
	// table.innerHTML = Elems.join('');
	for await (let x of tableIterable) {
		table.innerHTML += Row(x);
	}
});
