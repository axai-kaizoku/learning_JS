const map = new Map();

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [9, 7, 5];

for (var i = 0; i < arr1.length; i++) {
	var v = arr1[i];
	if (!map.has(v)) {
		map.set(v, v);
	}
}

var isSubset = true;
var i = 0;

while (i < arr2.length && isSubset) {
	var v = arr2[i];
	if (!map.has(v)) {
		isSubset = false;
	}
	i++;
}

console.log(isSubset);
console.log(map);
