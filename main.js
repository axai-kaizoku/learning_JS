/** @format */

const loopMe = function (maxCount, callback, counter = 0) {
	if (counter < maxCount) {
		callback(counter);
		return loopMe(maxCount,callback,  counter + 1);
	}
};

const fruits = ['Apples', 'Mango', 'Kiwi']

loopMe(fruits.length, function(count) {
	console.log(fruits[count])
});
