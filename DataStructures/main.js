const nums = [];

const randomArray = (len) => {
	for (let i = 0; i < len; i++) {
		nums.push(Math.floor(Math.random() * 109));
	}
};

randomArray(10);

console.log(nums);
// console.log(nums[0]);
var maxVal = nums[0];
var minVal = nums[0];

for (let i = 0; i < nums.length; i++) {
	if (minVal > nums[i]) {
		minVal = nums[i];
	} else if (maxVal < nums[i]) {
		maxVal = nums[i];
	}
}
console.log(maxVal);
console.log(minVal);
