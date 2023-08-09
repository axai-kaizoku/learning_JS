/** @format */

let restaurants = [
	{
		name: 'Taj',
		category: 'Biryani',
		area: 'Ambedkar Chowk',
	},
	{
		name: 'Friends',
		category: 'fastfood',
		area: 'Gopal Nagar',
	},
];

const findDetails = (name) => {
	let findPlace = restaurants.find((elem) => elem.name === name);
	return findPlace ? [findPlace.category, findPlace.area] : [];
};

let [category, area] = findDetails('Friends');
console.log(`Category: ${category}, area: ${area}`);
