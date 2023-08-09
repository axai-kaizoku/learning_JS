/** @format */

const colorType = (color) => {
	const primaryColors = ['red', 'green', 'blue']
	const secondaryColors = ['orange', 'green', 'violet']

	let fcolor = primaryColors.includes(color) ? `${color} is a primary color` : secondaryColors.includes(color) ? `${color} is a secondary color` : `${color} is neither primary nor secondary`
	
	return fcolor;
};



console.log(colorType('pink'));