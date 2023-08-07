/** @format */

let numArray = [
	{
		x: 0,
		y: 1,
	},
	{
		x: 21,
		y: 13,
	},
	{
		x: 32,
		y: 89,
	},
	{
		x: 10,
		y: 11,
	},
	{
		x: 32,
		y: 78,
	},
];

const multNums = (obj) => obj.x + obj.y;

for (let n = 0; n < numArray.length; n++) {
	console.log(`${numArray[n].x} + ${numArray[n].y} = ${multNums(numArray[n])}`);
}
