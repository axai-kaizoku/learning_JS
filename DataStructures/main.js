const map = new Map();

const arr = [1, 2, 2, 7, 10];

var target = 15;

var solution = [];
var i = 0;
var foundPair = false;

while (i < arr.length) {
	map.set(arr[i], i);
	i++;
}

i = 0;

while (i < arr.length && !foundPair) {
	var compliment = target - arr[i];

	if (map.has(compliment)) {
		if (i != map.get(compliment)) {
			solution.push(arr[i]);
			solution.push(arr[map.get(compliment)]);
			foundPair = true;
		}
	}
	i++;
}

console.log(foundPair);
console.log(solution);
