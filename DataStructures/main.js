const map = new Map();

var union = [];
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 3, 4];

for (var i = 0; i < arr1.length; i++) {
	var v = arr1[i];
	if (!map.has(v)) {
		map.set(v, v);
		union.push(v);
	}
}

for (var i = 0; i < arr2.length; i++) {
	var v = arr2[i];
	if (!map.has(v)) {
		map.set(v, v);
		union.push(v);
	}
}

console.log(union);
// console.log(union.sort());
