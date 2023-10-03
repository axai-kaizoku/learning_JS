const map = new Map();

const arr = [1, 2, 3, 4, 4, 4, 3, 3, 2, 1, 1, 1, 1, 6, 7, 8, 1];

for (var i = 0; i < arr.length; i++) {
	var v = arr[i];
	if (map.has(v)) {
		map.set(v, map.get(v) + 1);
	} else {
		map.set(v, 1);
	}
}

console.log(map);
