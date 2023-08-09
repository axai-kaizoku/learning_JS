/** @format */

const prices = [100, 210, 230, 102, 23];
const Tax = function (tax) {
	this.tax = tax;
	this.withTax = function (arr) {
		let output = [];
		arr.forEach(function (elem) {
			let withTax = (this.tax / 100) * elem + elem;
			output.push(withTax);
		}, this);
		return output;
	};
};


const gst5 = new Tax(5);
const gst18 = new Tax(18);

console.log(gst5.withTax(prices))
console.log(gst18.withTax(prices))