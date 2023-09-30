const nums = [112, 32, 4, 9, 8, 11];
var maxVal = nums[0];

for (let i = 0; i < nums.length; i++) {
	if (maxVal > nums[i]) {
		maxVal = nums[i];
	}
}

console.log(maxVal);
