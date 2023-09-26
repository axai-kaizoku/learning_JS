const nums = [0, 1, 1, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 5, 6];

const removeDup = [];

for (let i = 0; i < nums.length; i++) {
	if (i < nums.length - 1) {
		if (nums[i] !== nums[i + 1]) {
			removeDup.push(nums[i]);
		}
	} else {
		removeDup.push(nums[i]);
	}
}

console.log(nums);
console.log(removeDup);
